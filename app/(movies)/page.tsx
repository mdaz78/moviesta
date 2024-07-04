import MovieCard from '@/components/card/movie-card';
import { getAllMovies } from '@/db';

export default async function Home() {
  const movies = await getAllMovies();

  return (
    <div className='flex gap-8 flex-wrap h-full justify-center'>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
