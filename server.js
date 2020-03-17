var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
  buildSchema
} = require('graphql');
var cors = require('cors');
var Promise = require('promise')


/* Server */
const app = express();


/* Schema */
console.log('Merging Schema');
//var merged_schema = mergeSchema(path.join(__dirname, './schemas'));
let merged_schema =
  `
type Author {
  id: ID
  name: String
}

type Page {
  id: ID
  number: Int
}

type Book {
  """
  @original-field
  """
  id: ID

  """
  @original-field
  """
  title: String

  """
  @original-field
  """
  genre: String

  authors: [Author]

  pages: [Page]
}

type Query {
  books: [Book]
}`

console.log(merged_schema);
var Schema = buildSchema(merged_schema);

/* Resolvers*/
let resolvers = {
  books: async function(args, context, info) {
    console.log(
      `${Date.now()} - Resolver books. recordsLimit: ${context.recordsLimit}`
    )
    context.recordsLimit -= 1
    return [{
      id: 1,
      title: 'Title One',
      genre: 'Genre One',
      authors: async function(args, context, info) {
          return new Promise((res, rej) => {
            setTimeout(function() {
              while (context.lock) {
                process.stdout.write('.')
              }
              context.lock = true
              console.log(
                `Waited 2 seconds in authors resolver`)
              console.log(
                `${Date.now()} - Resolver authors. recordsLimit: ${context.recordsLimit}`
              )
              context.recordsLimit -= 2
              res([{
                id: 1,
                name: 'Shakesapple'
              }, {
                id: 2,
                name: 'Gothic Oete'
              }])
              context.lock = false
            }, 0)
          })
        },
        pages: async function(args, context, info) {
          return new Promise((res, rej) => {
            while (context.lock) {
              process.stdout.write('.')
            }
            context.lock = true
            console.log(
              `${Date.now()} - Resolver pages. recordsLimit: ${context.recordsLimit}`
            )
            context.recordsLimit -= 2
            res([{
              id: 1,
              number: 12
            }, {
              id: 2,
              number: 21
            }])
            context.lock = false
          })
        }
    }]
  }
}

/*request is passed as context by default  */
app.use('/graphql', cors(), graphqlHTTP((req) => ({
  schema: Schema,
  rootValue: resolvers,
  pretty: true,
  graphiql: true,
  context: {
    request: req,
    recordsLimit: 5,
    lock: false
  },
  formatError(error) {
    return {
      message: error.message,
      details: error.originalError && error.originalError.errors ?
        error.originalError.errors : "",
      path: error.path
    };
  }
})));

var server = app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
