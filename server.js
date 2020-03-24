var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
  buildSchema
} = require('graphql');
var cors = require('cors');
var rewire = require('rewire');
var execute = rewire('./node_modules/graphql/execution/execute.js')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _isPromise = require('./node_modules/graphql/jsutils/isPromise.js');
var _isPromise2 = _interopRequireDefault(_isPromise);

/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */
const buildResponse = function (context, data) {
  console.log(`in buildResponse, context is:\n${context}\n${Object.keys(context)}\n${Object.keys(context.contextValue)}`)
  if ((0, _isPromise2.default)(data)) {
    return data.then(function (resolved) {
      return buildResponse(context, resolved);
    });
  }
  if (context.contextValue.benignErrors.length > 0) {
    console.log(`benign errors:\n${context.contextValue.benignErrors}`)
    context.errors = context.errors.concat(context.contextValue.benignErrors)
    console.log(`context.errors:\n${context.errors}`)
  }
    return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
}

execute.__set__('buildResponse', buildResponse)




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
  countBooks(errorOrNot: Boolean): Int
}`

console.log(merged_schema);
var Schema = buildSchema(merged_schema);

/* Resolvers*/
let resolvers = {
  countBooks: async function(args, context, info) {
    console.log(`${Date.now()} - Resolver countBooks invoked.`)
    if (args.errorOrNot === true) {
      context.benignErrors.push(new Error('Adapter A timed out'))
      return 6
    } else {
      return 12
    }
  },
  books: async function(args, context, info) {
    console.log(
      `${Date.now()} - Resolver books. recordsLimit: ${context.recordsLimit}`
    )
    context.recordsLimit -= 1
    return [{
      id: 1,
      title: new Error('Erroneus title - speling error'),
      genre: 'Genre One',
      authors: async function(args, context, info) {
          console.log(
            `${Date.now()} - Resolver authors. recordsLimit: ${context.recordsLimit}`
          )
          context.recordsLimit -= 2
          return [{
            id: 1,
            name: 'Shakesapple'
          }, {
            id: 2,
            name: 'Gothic Oete'
          }]
        },
        pages: async function(args, context, info) {
          console.log(
            `${Date.now()} - Resolver pages. recordsLimit: ${context.recordsLimit}`
          );
          context.recordsLimit -= 2;
          return [{
            id: 1,
            number: 12
          }, new Error('Something went wrong'), new Error(
            'Second time something went wrong')];
        },
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
    benignErrors: []
  },
  customExecuteFn: execute.execute
})));

var server = app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
