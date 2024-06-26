export const typeDefs: any = `#graphql
    type Game {
        id: ID! # Special type for id's
        title: String! # Exclamation mark is for required fields
        platform: [String!]! # Array of strings
        reviews: [Review!] # The exclamation mark is not necessary outside because a game doesn't have a review list necessarily, but if it does, review is required (exclamation mark) inside.
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query { # Its not optional
        reviews: [Review] # All reviews
        review(id: ID!): Review # Unique review by id
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput!) : Game 
    }

    input AddGameInput {
        title: String!,
        platform: [String!]!
    } 

    input EditGameInput {
        title: String,
        platform: [String!]
    } 
`