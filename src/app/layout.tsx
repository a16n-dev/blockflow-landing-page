import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
