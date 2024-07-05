'use client';

import { deleteComment } from '@/actions/comments';
import { Card, CardContent } from '@/components/ui/card';
import { useUser } from '@/context/user.context';
import { FaTrashCan } from 'react-icons/fa6';

interface CommentCardProps {
  id: string;
  title: string;
  body: string;
  movieId: string;
}

const CommentCard = ({ id, title, body, movieId }: CommentCardProps) => {
  const { role } = useUser();

  return (
    <Card className='relative'>
      <CardContent className='p-2'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        <p className='text-sm py-3'>{body}</p>
      </CardContent>

      {role === 'admin' && (
        <FaTrashCan
          className='text-red-500 text-md cursor-pointer absolute top-2 right-2'
          onClick={async () => {
            await deleteComment(id, movieId);
          }}
        />
      )}
    </Card>
  );
};

export default CommentCard;
