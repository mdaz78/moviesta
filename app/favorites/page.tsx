import MovieCard from '@/components/card/movie-card';
import { getFavorites } from '@/db';

const FavoritesPage = async () => {
  const movies = await getFavorites();

  return (
    <div className='flex gap-8 flex-wrap h-full justify-center'>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default FavoritesPage;
