'use client';

import { toggleFavorite } from '@/actions/movies';
import { usePathname } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
  id: string;
  isFav: boolean;
}

const FavoriteButton = ({ id, isFav }: FavoriteButtonProps) => {
  const path = usePathname();

  return (
    <button
      className='absolute top-2 right-2 z-30'
      type='button'
      onClick={async () => {
        await toggleFavorite(id, path);
      }}
    >
      {isFav ? (
        <FaHeart className={`text-red-600 text-lg`} />
      ) : (
        <FaHeart className={`text-gray-600 text-lg`} />
      )}
    </button>
  );
};

export default FavoriteButton;
