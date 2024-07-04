import MovieCard from '@/components/card/movie-card';
import { getFavorites } from '@/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Your favorite movies on Moviesta!',
};

const FavoritesPage = async () => {
  const movies = await getFavorites();

  if (movies.length === 0) {
    return (
      <div>
        <h2 className='text-2xl font-semibold text-center mt-20'>
          No favorites found!
        </h2>
      </div>
    );
  }

  return (
    <div className='flex gap-8 flex-wrap h-full justify-center'>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default FavoritesPage;
