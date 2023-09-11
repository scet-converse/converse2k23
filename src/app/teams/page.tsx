import Cassette from '@/components/Cassette';
import React from 'react';

function TeamsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen p-8 max-w-[1200px] mx-auto my-0">
      <h1 className="text-4xl mb-3">Teams</h1>
      <p>Meet the faces behind converse</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-10 md:gap-y-5 py-10 flex-grow overflow-scroll">
        <Cassette />
        <Cassette />
        <Cassette />
        <Cassette />
        <Cassette />
      </div>
    </div>
  );
}

export default TeamsPage;
