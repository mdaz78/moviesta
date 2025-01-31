import FavoriteButton from '@/components/buttons/favorite-button';
import { Role } from '@/types';
import Link from 'next/link';
import BackgroundImage from '../utils/background-image';

interface MovieCardProps {
  id: string;
  title: string;
  isFav: boolean;
  poster: string;
  role?: Role;
}

const MovieCard = ({
  id,
  title,
  isFav,
  poster,
  role = 'user',
}: MovieCardProps) => {
  const href = role === 'admin' ? `/admin/${id}` : `/${id}`;

  return (
    <Link href={href}>
      <div className='w-[230px] min-h-[260px] relative bg-gray-100 rounded-md shadow-sm'>
        <FavoriteButton
          id={id}
          isFav={isFav}
          className='absolute top-2 right-2 z-30'
        />
        <div className='h-full border-gray-200 rounded-md cursor-pointer  hover:bg-red-100 hover:opacity-90'>
          <BackgroundImage imageUrl={poster} />
          <h2 className='text-sm font-semibold text-center p-3'>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
