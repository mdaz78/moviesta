import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getAllMovies = async () => {
  return await prisma.movie.findMany();
};

export const toggleFavorite = async (movieId: string) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  const data = await prisma.movie.update({
    where: {
      id: movieId,
    },
    data: {
      isFav: !movie?.isFav,
    },
  });
};

export const getFavorites = async () => {
  return await prisma.movie.findMany({
    where: {
      isFav: true,
    },
  });
};
