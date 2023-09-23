import TimeTable from '@/components/TimeTable';
import Link from 'next/link';

export default async function Schedule() {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="md:text-3xl mb-3 text-xl">
        <Link href="/">Home </Link> {'>'} Schedule
      </h1>
      <TimeTable />
    </div>
  );
}
