# NodeAsyncExperiments

Experiments with GraphQL using the reference implementation.

## Experiment

Try to return both `data` and `errors` in the GraphQL response without setting a field to an instance of Error. The idea is to find a different solution than the [standard one](https://stackoverflow.com/questions/52778096/how-to-return-both-error-and-data-in-a-graphql-resolver).

Start the experiment with

```node server.js```

Then invoke GraphiQL in your browser http://localhost:3000/graphql.

Query

```
{
  countBooks(errorOrNot: true) 
}
```

Note how the resolver `countBooks` does _not_ throw an error, but (benign) errors get returned in the GraphQL response as well as data!
