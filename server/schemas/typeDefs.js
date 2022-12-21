const { gql } = require("apollo_server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  input Book {
    bookId: String!
    authors: String!
    description: String!
    title: String!
    image: String!
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: Book): User
    removeBook(bookId: bookId!): Book
  }
`;

module.exports = typeDefs;
