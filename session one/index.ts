import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, type Author, type Book, type Genre, type Review } from './typeDefs.ts';
import { authors, books, genres, reviews } from './data.ts';

const resolvers = {
  Query: {
    books: () => books.slice().sort((a, b) => a.title.localeCompare(b.title)),
    authors: () => authors,
    reviews: () => reviews,
    genres: () => genres,
    book: (_: unknown, args: { id: number }) => books.find(b => b.id === args.id) || null,
    booksByAuthor: (_: unknown, args: { id: number }) => books.filter(b => b.authorId === args.id),
  },

  Book: {
    author: (book: Book) => authors.find(a => a.id === book.authorId) || null,
    summary: (book: Book) => {
      const author = authors.find(a => a.id === book.authorId);
      return author ? `${book.title} by ${author.name}` : book.title;
    },
    reviews: (book: Book) => {
      const review = reviews.filter(r => {
        return r.bookId === book.id;
      });
      return review;
    },
    genre: (book: Book) => {
      const genre = genres.filter(g => {
        return g.bookId === book.id;
      });
      console.log(genre);
      return genre;
    },
  },

  Author: {
    books: (author: Author) => books.filter(b => b.authorId === author.id),
  },

  Review: {
    book: (review: Review) => books.find(b => b.id === review.bookId),
  },

  Genre: {
    books: (genre: Genre) => books.filter(b => b.id === genre.bookId),
  },

  Mutation: {
    addBook: (_: unknown, args: { title: string; authorId: number }) => {
      const { title, authorId } = args;

      if (!title || !authorId) {
        throw new Error('Both title and authorId are required');
      }

      const authorExists = authors.some(a => a.id === authorId);
      if (!authorExists) {
        throw new Error(`Author with id ${authorId} does not exist`);
      }

      const newId = Math.max(0, ...books.map(b => b.id)) + 1;

      const newBook: Book = { id: newId, title, authorId };
      books.push(newBook);

      return newBook;
    },

    deleteBook: (_: unknown, args: { id: number }) => {
      const bookIndex = books.findIndex(b => b.id === args.id);
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
      const [deleted] = books.splice(bookIndex, 1);
      return deleted;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
