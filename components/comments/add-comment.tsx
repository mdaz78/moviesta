import { addComment } from '@/actions/comments';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface AddCommentProps {
  movieId: string;
}

const AddComment = ({ movieId }: AddCommentProps) => {
  const addCommentAction = addComment.bind(null, movieId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Add Comment</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Comment</DialogTitle>
        </DialogHeader>
        <form action={addCommentAction}>
          <div className='grid gap-4 py-4'>
            <div className='gap-4'>
              <Label htmlFor='title' className='text-right'>
                Title
              </Label>
              <Input id='title' name='title' required />
            </div>
            <div className='gap-4'>
              <Label htmlFor='body' className='text-right'>
                Body
              </Label>
              <Textarea id='body' className='col-span-3' name='body' required />
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>
              <DialogClose>Comment</DialogClose>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddComment;
