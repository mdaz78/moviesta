import MovieCard from '@/components/card/movie-card';
import MoviesContainer from '@/components/container/movies-container';
import { getAllMovies } from '@/db';

export default async function Home() {
  const movies = await getAllMovies();

  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </MoviesContainer>
  );
}
