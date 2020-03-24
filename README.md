# NodeAsyncExperiments
Trying out access to a single object from many "parallel" async processes

See [this question on Stackoverflow](https://stackoverflow.com/questions/60722673/can-concurrent-write-access-to-the-same-object-from-asynchronous-functions-cause) for more details.

## Experiments

You can execute the following exeperiments.

### GraphQL

```node server.js```

Then invoke GraphiQL in your browser http://localhost:3000/graphql.

Query

```
{
  countBooks(errorOrNot: true) 
}
```

Note how the resolver `countBooks` does _not_ throw an error, but (benign) errors get returned in the GraphQL response as well as data!
