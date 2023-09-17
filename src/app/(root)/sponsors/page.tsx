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

      <div className="grid grid-cols-12 gap-4 mt-8">
        {sponsors &&
          sponsors.map((sponsor, index) => (
            <div className="border-2 border-gray-200 rounded-lg p-4 col-span-12 flex gap-6 items-center md:flex-row flex-col">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={240}
                height={240}
              />

              <div>
                <h2 className="text-white md:text-xl text-lg mb-2">
                  {sponsor.name}
                </h2>

                <ReactMarkdown className={montserrat.className}>
                  {sponsor.description}
                </ReactMarkdown>

                <Link
                  href={sponsor.link}
                  className="block mt-4"
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
