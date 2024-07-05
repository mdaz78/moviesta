import { Prisma } from '@prisma/client';
import CommentCard from './comment';

type Comment = Prisma.CommentGetPayload<{}>;
type CommentList = Comment[];

interface CommentsListProps {
  comments: CommentList;
}

const CommentsList = ({ comments }: CommentsListProps) => {
  console.log({ comments });

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className='mt-3 space-y-2'>
      {comments.map((comment) => (
        <CommentCard {...comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsList;
