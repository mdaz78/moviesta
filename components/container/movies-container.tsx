import { Prisma } from '@prisma/client';

type Movie = Prisma.MovieGetPayload<{}>;
type MovieList = Movie[];

interface MoviesContainerProps {
  className?: string;
  children: React.ReactNode;
}

const MoviesContainer = ({
  className = '',
  children,
}: MoviesContainerProps) => {
  return (
    <div
      className={`grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-full content-center ${className}`}
    >
      {children}
    </div>
  );
};

export default MoviesContainer;
