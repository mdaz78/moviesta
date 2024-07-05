'use server';

import * as db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const toggleFavorite = async (movieId: string, path: string) => {
  await db.toggleFavorite(movieId);

  revalidatePath(path);
  redirect(path);
};

export const addMovie = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const plot = formData.get('plot') as string;
  const poster = formData.get('poster') as string;
  const runtime = formData.get('runtime') as string;

  await db.addMovie(title, plot, poster, runtime);

  revalidatePath('/movies');
  revalidatePath('/admin');

  redirect('/admin');
};
