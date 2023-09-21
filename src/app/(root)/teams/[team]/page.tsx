import React from 'react';
import teams from '@/lib/data/teams';
import Link from 'next/link';
import PersonCard from '@/components/PersonCard';

export const dynamicParams = false;

export async function generateStaticParams() {
  return teams.map((t) => {
    return { team: t.slug };
  });
}

export default async function Team({ params }: { params: { team: string } }) {
  const team = teams.find((t) => t.slug === params.team);
  const people = team?.people;

  return (
    <div className="flex flex-col w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="md:text-3xl mb-3 text-xl">
        <Link href="/">Home </Link> {'>'} <Link href="/teams">Teams </Link>{' '}
        {'>'} {team?.title}
      </h1>
      {people &&
        Object.keys(people).map((key) => {
          return (
            <div key={key}>
              <h1 className="text-2xl md:text-4xl mb-4">{key}s</h1>
              <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-16 ">
                {people[key].map((obj) => {
                  return (
                    <PersonCard
                      key={obj.name}
                      name={obj.name}
                      position={key}
                      team={team.title}
                      github={obj.github}
                      instagram={obj.instagram}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
