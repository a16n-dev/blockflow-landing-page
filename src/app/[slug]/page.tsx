import { client } from '@/utils/client';
import { notFound } from 'next/navigation';
import { renderRichText, twBlockTransformer } from '@/utils/twBlockTransformer';

const DynamicPage = async ({ params }: { params: { slug: string } }) => {
  // get page content

  const page = await client.getDocumentBySlug('pages', params.slug);

  if (!page) {
    notFound();
  }

  return (
    <main className='flex flex-col min-h-screen'>
      <div className='container mx-auto pt-32 pb-16 px-4 flex flex-col items-center'>
        <h1 className={'text-5xl font-medium text-center'}>{page.name}</h1>
        <h1 className={'text-xl text-center'}>
          {renderRichText(page.properties.subtitle)}
        </h1>
      </div>
      <div className='max-w-[1000px] pb-32 w-full mx-auto px-4 flex flex-col'>
        {twBlockTransformer.transform(page.blocks)}
      </div>
    </main>
  );
};

export default DynamicPage;
