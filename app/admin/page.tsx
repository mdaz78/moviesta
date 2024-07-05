import MovieCard from '@/components/card/movie-card';
import SummaryCard from '@/components/card/summary-card';
import MoviesContainer from '@/components/container/movies-container';
import AddMovie from '@/components/modal/add-movie';
import { getAllComments, getAllMovies } from '@/db';

const AdminPage = async () => {
  const movies = await getAllMovies();
  const comments = await getAllComments();

  return (
    <div>
      <h1 className='text-xl font-bold'>Admin Page</h1>
      <section className='grid grid-cols-12 my-2'>
        <div className='md:col-span-3 col-span-12'>
          <SummaryCard
            totalComments={comments.length}
            totalMovies={movies.length}
          />
        </div>
      </section>
      <hr className='my-6' />
      <AddMovie />
      <section className='my-6'>
        <MoviesContainer>
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} role='admin' />
          ))}
        </MoviesContainer>
      </section>
    </div>
  );
};

export default AdminPage;
