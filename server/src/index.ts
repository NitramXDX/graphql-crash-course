import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from './_db.js';

// types
import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_: any, args: any) {
      return db.games.find((game) => game.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_: any, args: any) {
      return db.reviews.find((review) => review.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_: any, args: any) {
      return db.authors.find((author) => author.id === args.id)
    },
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at port: ${url}`);