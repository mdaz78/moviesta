import BottomNav from '@/components/nav/bottom-nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moviesta',
  description: 'Find your next movie to watch!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='m-14 py-6'>{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
