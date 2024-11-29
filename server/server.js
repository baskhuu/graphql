import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//Creating Apollo Server object type to create Schema ([1]GraphQL's schema definition language (SDL))
const typeDefs = `
    type Query {
        hello:  String
        ognoo:  String   
}
`;

//This is [2]Resolver Function!
const resolvers = {
    Query:  {
        hello: () => 'Hello Basaa!',
        ognoo: () => new Date().toLocaleString()
    } ,
};

//[3]Starting Apollo Server using with [1] and [2].
const server = new ApolloServer({
    typeDefs,
    // typeDefs: typeDefs, // The above text is an abbreviated text!
    resolvers,
});

//Waiting promise from [3] and deconstruct url from result.
const { url } = await startStandaloneServer(server, { listen : { port : 4567 } });
// const { url } = await startStandaloneServer(server);

console.log(` Server ready at ${url}`);