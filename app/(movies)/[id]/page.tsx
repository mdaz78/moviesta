import BackButton from '@/components/buttons/back-button';
import FavoriteButton from '@/components/buttons/favorite-button';
import AddComment from '@/components/comments/add-comment';
import CommentsList from '@/components/comments/comments-list';
import BackgroundImage from '@/components/utils/background-image';
import Pills from '@/components/utils/pills';
import { getMovieById } from '@/db';
import { Clock } from 'lucide-react';
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
    <div>
      <header className='flex items-center'>
        <BackButton />
        <h1 className='text-2xl font-semibold ml-4 space-x-2 flex justify-between w-full'>
          <span>{movie.title}</span>
          <FavoriteButton
            id={movie.id}
            isFav={movie.isFav}
            className='text-3xl'
          />
        </h1>
      </header>

      <main>
        <div className='py-3'>
          <BackgroundImage
            imageUrl={movie.poster}
            className='w-[250px] h-[350px] object-cover mt-4'
          />
        </div>
        <div className='py-4'>
          <p className='text-lg font-semibold mt-4'>Description</p>
          <p className='text-gray-600 mt-2'>{movie.plot}</p>
        </div>
        <div>
          <Pills className='w-fit flex items-center space-x-2'>
            <Clock className='text-md' />
            <span className='text-sm'>{movie.runtime} mins</span>
          </Pills>
        </div>

        <hr className='my-4' />

        <AddComment movieId={movie.id} />
        <CommentsList comments={movie.comments} />
      </main>
    </div>
  );
};

export default MovieDetailsPage;
