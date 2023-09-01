import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Converse 2023</h1>
      <Link href={'register'}>Register</Link>
    </main>
  );
}
