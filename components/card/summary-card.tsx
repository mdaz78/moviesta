import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface SummaryCardProps {
  totalMovies: number;
  totalComments: number;
}

const SummaryCard = ({ totalMovies, totalComments }: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Total Items in DB</CardTitle>
        <CardDescription>Count of total movies and comments</CardDescription>
      </CardHeader>
      <CardContent className=''>
        <div className='grid grid-cols-6'>
          <p className='col-span-4 text-sm font-medium'>Movies</p>
          <p className='col-span-2 text-sm'>{totalMovies}</p>
        </div>
        <div className='grid grid-cols-6'>
          <p className='col-span-4 font-medium text-sm'>Comments</p>
          <p className='col-span-2 text-sm'>{totalComments}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
