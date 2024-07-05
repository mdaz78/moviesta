'use client';

import { deleteMovie } from '@/actions/movies';
import { Button } from '../ui/button';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <Button variant='destructive' onClick={async () => await deleteMovie(id)}>
      Delete Movie
    </Button>
  );
};

export default DeleteButton;
