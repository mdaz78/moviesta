import { UserProvider } from '@/context/user.context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
