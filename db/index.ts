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

  return await prisma.movie.update({
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

export const getMovieById = async (id: string) => {
  return await prisma.movie.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
    },
  });
};

export const addComment = async (
  movieId: string,
  title: string,
  body: string
) => {
  return await prisma.comment.create({
    data: {
      title,
      body,
      movieId,
    },
  });
};
