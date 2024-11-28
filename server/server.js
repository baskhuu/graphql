const typeDefs = `
    type Query {
        hello:  String
        ognoo:  String   
}
`;

const resolvers = {
    Query:  {
        hello: () => 'Hello Basaa!',
        ognoo: () => new Date().toLocaleString()
    } ,
};