const {typeDefs} = require("./models/typeDefs.js");
const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");
const {resolvers} = require("./resolvers/resolver.js")

const server = new ApolloServer({typeDefs, resolvers});

startStandaloneServer(server, {
    listen: {port:4000},
}).then(({url}) => {
    console.log(`server is ready at ${url}`);
})