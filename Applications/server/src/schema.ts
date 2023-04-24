export const { gql } = require("graphql-tag");

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;