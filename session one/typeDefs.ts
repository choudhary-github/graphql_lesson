export const typeDefs = `
type Book {
  id: Int!
  title: String!
  authorId: Int!
  author: Author!
  summary: String
  reviews:[Review]
  genre:[Genre]
}

type Author {
  id: Int!
  name: String!
  books: [Book!]!
}

type Query {
  books: [Book!]!
  authors: [Author!]!
  reviews: [Review!]!
  genres: [Genre!]!
  book(id: Int!): Book
  author(id: Int!): Author
  booksByAuthor(id: Int!): [Book!]!
}

type Mutation {
  addBook(title: String!, authorId: Int!): Book!
  deleteBook(id: Int!): Book
}
  
type Genre {
  id: Int!
  name: String!
  books: [Book!]!
}

type Review {
  id: Int!
  book: Book!
  rating: Int!
  comment: String
}

`;

export type Book = { id: number; title: string; authorId: number };
export type Author = { id: number; name: string };
export type AddBookArgs = { title: string; authorId: number; id: number };
export type Review = { id: number; bookId: number; rating: number; comment: string };
export type Genre = { id: number; name: string; bookId: number };
