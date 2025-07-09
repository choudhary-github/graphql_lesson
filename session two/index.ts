import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typedefs';
import type { User, Genre, Movie, Review } from './dummyData';
import { genres, movies, reviews, users } from './dummyData';

const resolvers = {
  Query: {
    users: () => users,
    movies: () => movies,
    genres: () => genres,
    reviews: () => reviews,
  },
  Movie: {
    genres: (movie: Movie) => genres.filter((genre: Genre) => movie.genreIds.includes(genre.id)),
    rating: (movie: Movie) => reviews.find(r => r.movieId === movie.id)?.rating,
  },
  Genre: {
    movies: (genre: Genre) => movies.filter(m => m.genreIds.includes(genre.id)),
  },
  Review: {
    movie: (review: Review) => console.log(review),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
