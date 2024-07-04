'use server';

import * as db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const toggleFavorite = async (movieId: string, redirectTo?: string) => {
  await db.toggleFavorite(movieId);

  revalidatePath('/');
  redirect('/');
};
