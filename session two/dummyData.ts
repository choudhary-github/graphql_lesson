const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'Diana', email: 'diana@example.com' },
];

const movies: Movie[] = [
  { id: 1, title: 'Inception', description: 'A thief who steals dreams.', releaseYear: 2010, genreIds: [1, 2] },
  { id: 2, title: 'Interstellar', description: 'Exploring space & time.', releaseYear: 2014, genreIds: [1, 3] },
  { id: 3, title: 'The Matrix', description: 'Reality is a simulation.', releaseYear: 1999, genreIds: [1] },
  { id: 4, title: 'The Godfather', description: 'Crime family saga.', releaseYear: 1972, genreIds: [2] },
  { id: 5, title: 'Pulp Fiction', description: 'Stories intertwined.', releaseYear: 1994, genreIds: [2, 4] },
  { id: 6, title: 'Avengers: Endgame', description: 'Superheroes unite.', releaseYear: 2019, genreIds: [1, 5] },
  { id: 7, title: 'Forrest Gump', description: 'Life of a simple man.', releaseYear: 1994, genreIds: [2, 6] },
  { id: 8, title: 'Gladiator', description: 'Roman revenge.', releaseYear: 2000, genreIds: [4] },
];

const genres: Genre[] = [
  { id: 1, name: 'Sci-Fi' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Adventure' },
  { id: 4, name: 'Action' },
  { id: 5, name: 'Superhero' },
  { id: 6, name: 'Romance' },
];

const reviews: Review[] = [
  { id: 1, movieId: 1, userId: 1, rating: 5, comment: 'Mind-blowing!' },
  { id: 2, movieId: 2, userId: 2, rating: 4, comment: 'Amazing visuals.' },
  { id: 3, movieId: 3, userId: 3, rating: 5, comment: 'Changed my perception of reality.' },
  { id: 4, movieId: 4, userId: 4, rating: 5, comment: 'Classic.' },
  { id: 5, movieId: 5, userId: 1, rating: 4, comment: 'Very cool.' },
  { id: 6, movieId: 6, userId: 2, rating: 5, comment: 'Epic conclusion!' },
  { id: 7, movieId: 7, userId: 3, rating: 4, comment: 'Heartwarming.' },
  { id: 8, movieId: 8, userId: 4, rating: 4, comment: 'Powerful.' },
  { id: 9, movieId: 2, userId: 3, rating: 5, comment: 'Even better the second time!' },
  { id: 10, movieId: 3, userId: 1, rating: 4, comment: 'Still holds up.' },
];

const watchlists: Watchlist[] = [
  { userId: 1, movieId: 1 },
  { userId: 1, movieId: 3 },
  { userId: 1, movieId: 5 },
  { userId: 2, movieId: 2 },
  { userId: 2, movieId: 4 },
  { userId: 3, movieId: 6 },
  { userId: 3, movieId: 7 },
  { userId: 4, movieId: 8 },
  { userId: 4, movieId: 1 },
];

export { users, movies, genres, reviews, watchlists };

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  genreIds: number[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  movieId: number;
  userId: number;
  rating: number;
  comment: string;
};

export type Watchlist = {
  userId: number;
  movieId: number;
};
