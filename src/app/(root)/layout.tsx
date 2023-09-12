import '../globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pixel = localFont({ src: '../../../public/fonts/PixeloidSans.ttf' });

export const metadata: Metadata = {
  title: 'Converse',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixel.className}>{children}</body>
    </html>
  );
}
