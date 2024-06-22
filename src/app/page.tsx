import Logo from '@/component/common/Logo/Logo';
import { client } from '@/utils/client';
import { notFound } from 'next/navigation';
import { NotionRichText } from '@blockflow/notionTypes';
import { renderRichText, twBlockTransformer } from '@/utils/twBlockTransformer';
import { twLandingPageBlockTransformer } from '@/utils/twLandingPageBlockTransformer';
import { notionRichTextToPlainText } from '@blockflow/utils';

interface landingPageProperties {
  name: NotionRichText;
  subtitle: NotionRichText;
  created: string;
}

export async function generateMetadata() {
  const page = await client.getDocumentBySlug<landingPageProperties>(
    'pages',
    'index',
  );

  if (!page) {
    notFound();
  }

  return {
    title: `${page.name}`,
    description: notionRichTextToPlainText(page.properties.subtitle),
  };
}

const Home = async () => {
  const landingPage = await client.getDocumentBySlug<landingPageProperties>(
    'pages',
    'index',
  );

  if (!landingPage) {
    notFound();
  }

  return (
    <main className='flex flex-col min-h-screen'>
      <div className='w-full max-w-[1080px] mx-auto py-32 px-4 flex flex-col'>
        <div className={'flex pb-32'}>
          <div className={'w-1/2'}>
            <Logo width={96} />
            <h1 className={'text-5xl font-medium pt-8 pb-2'}>
              {landingPage.name}
            </h1>
            <p className={'text-xl font-light'}>
              {renderRichText(landingPage.properties.subtitle)}
            </p>
          </div>
          <div className={'w-1/2'}>
            <div className={'h-[300px] bg-gray-300 rounded-xl'}></div>
          </div>
        </div>
        <div>{twLandingPageBlockTransformer.transform(landingPage.blocks)}</div>
      </div>
    </main>
  );
};

export default Home;
