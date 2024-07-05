'use server';

import * as db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addComment = async (movieId: string, formData?: FormData) => {
  const title = formData?.get('title') as string;
  const body = formData?.get('body') as string;

  await db.addComment(movieId, title, body);

  revalidatePath(`/${movieId}`);
  redirect(`/${movieId}`);
};
