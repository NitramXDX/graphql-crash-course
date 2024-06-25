export const typeDefs: any = `#graphql
    type Game {
        id: ID! # Special type for id's
        title: String! # Exclamation mark is for required fields
        platform: [String!]! # Array of strings
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query { # Its not optional
        reviews: [Reviews]
        games: [Game]
        authors: [Author]
    }
`