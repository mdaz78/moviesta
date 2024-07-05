'use client';

import { toggleFavorite } from '@/actions/movies';
import { usePathname } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
  id: string;
  isFav: boolean;
  className?: string;
}

const FavoriteButton = ({ id, isFav, className = '' }: FavoriteButtonProps) => {
  const path = usePathname();

  const handleLikeButtonClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await toggleFavorite(id, path);
  };

  return (
    <FaHeart
      className={`${
        isFav ? 'text-red-600' : 'text-gray-600'
      } text-lg cursor-pointer ${className}`}
      onClick={handleLikeButtonClick}
    />
  );
};

export default FavoriteButton;
