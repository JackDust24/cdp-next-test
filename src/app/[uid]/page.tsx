import { createClient } from '@/prismicio';
import { PrismicText } from '@prismicio/react';

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('page');

  return pages.map((page) => {
    if (page.uid !== 'home') {
      return { uid: page.uid };
    }
  });
}

export default async function Page({
  params: { uid },
}: {
  params: { uid: string };
}) {
  const client = createClient();

  const page = await client.getByUID('page', uid);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>
        <PrismicText field={page.data.title} />
      </h1>
    </main>
  );
}
