import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>The Movie you were looking for cannot be found</h2>
      <p>
        You can go to the{' '}
        <Link href='/' className='text-blue-300'>
          homepage
        </Link>{' '}
        to find more movies.
      </p>
    </div>
  );
};

export default NotFound;
