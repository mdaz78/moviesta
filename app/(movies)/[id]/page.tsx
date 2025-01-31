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

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
