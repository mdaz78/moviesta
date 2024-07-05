import DeleteButton from '@/components/buttons/delete-button';
import EditMovie from '@/components/modal/edit-movie';
import MovieDetails from '@/components/movie-details';
import { getMovieById } from '@/db';
import { notFound } from 'next/navigation';

interface MovieDetailsPageProps {
  params: {
    id: string;
  };
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return notFound();
  }

  return (
    <div className='space-y-4'>
      <div className='space-x-3'>
        <EditMovie {...movie} />
        <DeleteButton id={movie.id} />
      </div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
