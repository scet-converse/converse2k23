import sponsors from '@/lib/data/sponsors';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function SponsorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="md:text-3xl mb-3 text-xl">
        <Link href="/">Home </Link> {'>'} Sponsors
      </h1>
      <p>Meet the organizations that make this event possible.</p>

      <div className="grid grid-cols-12 gap-8 mt-8 py-10">
        {sponsors &&
          sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="gradient border-2 border-gray-200 rounded-lg p-4 py-10 col-span-12 flex gap-6 items-center md:flex-row flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={180}
                height={180}
              />

              <div>
                <h2 className="text-white md:text-xl text-lg mb-2">
                  {sponsor.name}
                </h2>
                <ReactMarkdown className={montserrat.className}>
                  {sponsor.description}
                </ReactMarkdown>
                {sponsor.phone && (
                  <a href={`tel:${sponsor.phone}`}>&#128222; {sponsor.phone}</a>
                )}
                <Link
                  href={sponsor.link}
                  className="block mt-4 hover:underline text-pink-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
