export const typeDefs = `

type  User {
  id:ID!
  name: String!
  email: String!
  watchlist:[Movie!]!
  reviews:[Review!]
}

type Movie {
  id:ID!
  title: String!
  description: String!
  releaseYear: Int!
  genres: [Genre!]!
  reviews: [Review!]!
  rating: Float!
}

type Genre {
  id:ID!
  name: String!
  movies: [Movie!]!
}

type Review {
  id:ID!
  user: User!
  comment: String!
  rating: Int!
  movie: Movie!
}

type Query {
  movies:[Movie!]!
  users:[User!]!
  genres:[Genre!]!
  reviews:[Review!]
}

`;
