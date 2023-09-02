import Header from '@/components/ui/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Header />
      <div className='flex items-center justify-center flex-grow'>
        <h1>Home Page</h1>
      </div>
    </main>
  );
}
