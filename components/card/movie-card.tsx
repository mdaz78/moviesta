'use client';
import { toggleFavorite } from '@/actions/movies';
import { FaHeart } from 'react-icons/fa';

interface MovieCardProps {
  id: string;
  title: string;
  isFav: boolean;
  poster: string;
}

const MovieCard = ({ id, title, isFav, poster }: MovieCardProps) => {
  return (
    <div className='w-[250px] min-h-[300px] relative bg-gray-100 rounded-md shadow-sm'>
      <button
        className='absolute top-2 right-2 z-30'
        type='button'
        onClick={async () => {
          await toggleFavorite(id);
        }}
      >
        {isFav ? (
          <FaHeart className={`text-red-600 text-lg`} />
        ) : (
          <FaHeart className={`text-gray-600 text-lg`} />
        )}
      </button>
      <div className='h-full border-gray-200 rounded-md cursor-pointer  hover:bg-red-100 hover:opacity-90'>
        <div
          className='h-[250px] rounded-t-md bg-cover border-b border-gray-200'
          style={{ backgroundImage: `url(${poster})` }}
        />
        <h2 className='text-sm font-semibold text-center p-3'>{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
