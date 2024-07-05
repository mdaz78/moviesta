import { Card, CardContent } from '@/components/ui/card';

interface CommentCardProps {
  title: string;
  body: string;
  movieId: string;
}

const CommentCard = ({ title, body, movieId }: CommentCardProps) => {
  return (
    <Card>
      <CardContent className='p-2'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        <p className='text-sm py-3'>{body}</p>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
