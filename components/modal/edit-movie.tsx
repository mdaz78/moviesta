import { updateMovie } from '@/actions/movies';
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

interface EditMovieProps {
  id: string;
  title: string;
  plot: string;
  poster: string;
  runtime: number;
}

const EditMovie = ({ id, title, plot, poster, runtime }: EditMovieProps) => {
  const updateAction = updateMovie.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='default'>Edit Movie</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Movie</DialogTitle>
        </DialogHeader>
        <form action={updateAction}>
          <div className='grid gap-4 py-4'>
            <div className='gap-4'>
              <Label htmlFor='title' className='text-right'>
                Title
              </Label>
              <Input id='title' name='title' required defaultValue={title} />
            </div>
            <div className='gap-4'>
              <Label htmlFor='plot' className='text-right'>
                Plot
              </Label>
              <Textarea
                id='plot'
                className=''
                name='plot'
                required
                defaultValue={plot}
              />
            </div>
            <div className='gap-4'>
              <Label htmlFor='poster' className='text-right'>
                Image Url / Poster Link
              </Label>
              <Input id='poster' name='poster' required defaultValue={poster} />
            </div>
            <div className='gap-4'>
              <Label htmlFor='running-time' className='text-right row-span-1'>
                Running Time (mins)
              </Label>
              <Input
                id='running-time'
                name='run-time'
                type='number'
                required
                defaultValue={runtime}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>
              <DialogClose>Update Movie</DialogClose>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMovie;
