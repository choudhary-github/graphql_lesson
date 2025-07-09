const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals dreams.",
    releaseYear: 2010,
    genreIds: [2],
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Exploring space & time.",
    releaseYear: 2014,
    genreIds: [1, 2],
  },
];

const genres: Genre[] = [
  { id: 1, name: "Sci-Fi" },
  { id: 2, name: "Drama" },
];

const reviews: Review[] = [
  { id: 1, movieId: 1, userId: 1, rating: 5, comment: "Mind-blowing!" },
  { id: 2, movieId: 2, userId: 2, rating: 4, comment: "Amazing visuals." },
];

const watchlists: Watchlist[] = [
  { userId: 1, movieId: 1 },
  { userId: 1, movieId: 2 },
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
  movieIds?: number[];
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
