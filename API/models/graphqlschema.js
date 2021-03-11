const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type User {
  _id: ID!
  username: String!
  password: String
  createdEvents: [Event!]
}

input UserInput {
  username: String!
  password: String!
}
type RootQuery {
    users: [User!]!
    bookings: [Booking!]!
}
type RootMutation {
    
    createUser(userInput: UserInput): User
    
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);