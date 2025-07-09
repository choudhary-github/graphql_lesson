import type { Author, Book, Genre, Review } from './typeDefs';

const books: Book[] = [
  { id: 1, title: 'The Awakening', authorId: 101 },
  { id: 2, title: 'The Secret Garden', authorId: 102 },
  { id: 3, title: 'Gone with the Wind', authorId: 103 },
  { id: 4, title: 'Harry Potter', authorId: 102 },
];

const authors: Author[] = [
  { id: 101, name: 'Jane Austen' },
  { id: 102, name: 'J.K. Rowling' },
  { id: 103, name: 'Margaret Mitchell' },
];

const reviews: Review[] = [
  { bookId: 1, id: 1, rating: 4, comment: 'Great book!' },
  { bookId: 2, id: 2, rating: 5, comment: 'Great book!' },
  { bookId: 2, id: 3, rating: 3, comment: 'Good book!' },
];

const genres: Genre[] = [
  { bookId: 1, id: 1, name: 'Comedy' },
  { bookId: 3, id: 2, name: 'Thrill' },
  { bookId: 4, id: 3, name: 'Adventure' },
  { bookId: 4, id: 4, name: 'Play' },
];

export { books, authors, reviews, genres };
