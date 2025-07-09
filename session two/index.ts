import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typedefs";
import type { User, Genre, Movie } from "./dummyData";
import { genres, movies, users } from "./dummyData";

const resolvers = {
  Query: {
    users: () => users,
    movies: () => movies,
    genres: () => genres,
  },
  Movie: {
    genres: (movie: Movie) => {
      return genres.filter((genre: Genre) => movie.genreIds.includes(genre.id));
    },
  },
  Genre: {
    movies: (genre: Genre) =>
      movies.filter((m) => m.genreIds.includes(genre.id)),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
