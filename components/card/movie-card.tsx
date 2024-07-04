import FavoriteButton from '@/components/buttons/favorite-button';

interface MovieCardProps {
  id: string;
  title: string;
  isFav: boolean;
  poster: string;
}

const MovieCard = ({ id, title, isFav, poster }: MovieCardProps) => {
  return (
    <div className='w-[250px] min-h-[300px] relative bg-gray-100 rounded-md shadow-sm'>
      <FavoriteButton id={id} isFav={isFav} />
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
