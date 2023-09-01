
var {graphql, buildSchema} = require("graphql");

var schema = buildSchema(`
  type Query {
    hello: String,
    hi: String,
  }
`)

var rootValue = {hello: () => "Hello World", hi: () => "Hi World"}

var source = "{hello, hi}"

graphql({schema, source, rootValue}).then(response => {
  console.log(response)
})