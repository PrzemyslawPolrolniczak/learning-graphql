const { ApolloServer } = require("apollo-server");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {models}
})

server.listen(4000).then(({url}) => {
    console.log(`Server is listening on ${url}`);
})