import { createClient } from '@/prismicio';
import { PrismicText } from '@prismicio/react';

export default async function Home() {
  const client = createClient();

  const home = await client.getByUID('page', 'home');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>
        <PrismicText field={home.data.title} />
      </h1>
    </main>
  );
}
