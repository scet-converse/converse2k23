import './globals.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import localFont from 'next/font/local';
import Head from 'next/head';

const pixel = localFont({ src: '../../public/fonts/PixeloidSans.ttf' });

export const metadata: Metadata = {
  title: 'Converse',
  description:
    'Converse is technical festival organized Information Technology & Artificial Intelligence and Data Science departments of Sarvajanik College of Engineering and Technology proudly present Converse 2K23, set to unfold on the 29th and 30th of September, 2023.',
  keywords:
    'Converse 2K23, Technical Festival, Sarvajanik College, Engineering, Technology, Information Technology, AI, Artificial Intelligence, Data Science',
  authors: [
    {
      name: 'Sarvajanik College of Engineering and Technology',
      url: 'https://www.scet.ac.in/',
    },
    {
      name: 'Information Technology Department',
      url: 'https://scet.ac.in/department/information-technology/',
    },
  ],
  creator: 'Converse Dev Team',
  abstract:
    'Converse is technical festival organized Information Technology & Artificial Intelligence and Data Science departments of Sarvajanik College of Engineering and Technology',
  applicationName: 'Converse 2K23',
  themeColor: '#000000',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang="en">
          <body className={pixel.className}>{children}</body>
        </html>
      </ClerkProvider>
    </>
  );
}
