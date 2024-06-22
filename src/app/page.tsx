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
  return {
    title: `BlockFlow`,
    description: 'Power your content with Notion',
  };
}

const Home = async () => {
  return (
    <main className='flex flex-col min-h-screen bg-gray-50'>
      <div className=' py-32 flex flex-col'>
        <div className={'flex px-4 pb-32 w-full max-w-[1080px] mx-auto'}>
          <div className={'w-1/2'}>
            <Logo width={108} />
            <h1 className={'text-6xl font-medium pt-6 pb-2'}>BlockFlow</h1>
            <p className={'text-xl '}>
              {
                'Power your FAQs and help articles with Notion, to keep all your content in one place'
              }
            </p>
          </div>
          <div className={'w-1/2'}>
            <div className={'h-[300px] bg-gray-300 rounded-xl'}></div>
          </div>
        </div>
        {/* Core Action Section */}
        <div
          className={'flex flex-col px-4 w-full max-w-[800px] mx-auto pb-32'}
        >
          <h2 className={'text-center text-4xl font-bold'}>
            Easy <span className={'text-cyan-500'}>FAQs</span> and Developer
            Docs
          </h2>
          <p className={'text-center text-xl text-balance pb-4 pt-2'}>
            {
              'Lorem ipsum dolor sit amet consectetur. Amet nunc tristique nunc donec vulputate amet adipiscing cursus.'
            }
            <br />
            {'nunc semper sed facilisis dolor magnis mi a.'}
          </p>
          <button
            className={
              'bg-cyan-600 text-white self-center px-12 py-3 text-lg rounded-lg hover:bg-cyan-500 transition-colors'
            }
          >
            Action here
          </button>
        </div>
        {/* How it works */}
        <div className={'bg-gray-900 py-16 text-white'}>
          <div className={'max-w-[1080px] flex flex-col mx-auto p-2'}>
            <h2 className={'self-center text-center text-4xl font-bold pb-12'}>
              How it works
            </h2>
            <div className={'flex gap-8'}>
              <div className={'w-1/3 flex flex-col'}>
                <div className={'w-full aspect-[4/3] bg-gray-800 rounded-xl'} />
                <h3 className={'text-2xl font-medium pt-12 pb-2'}>
                  Lorem Ipsum
                </h3>
                <p className={'text-lg font-light text-gray-300'}>
                  dolor sit amet consectetur. Amet nunc tristique nunc donec
                  vulputa
                </p>
              </div>
              <div className={'w-1/3 flex flex-col'}>
                <div className={'w-full aspect-[4/3] bg-gray-800 rounded-xl'} />
                <h3 className={'text-2xl font-medium pt-12 pb-2'}>
                  Lorem Ipsum
                </h3>
                <p className={'text-lg font-light text-gray-300'}>
                  dolor sit amet consectetur. Amet nunc tristique nunc donec
                  vulputa
                </p>
              </div>
              <div className={'w-1/3 flex flex-col'}>
                <div className={'w-full aspect-[4/3] bg-gray-800 rounded-xl'} />
                <h3 className={'text-2xl font-medium pt-12 pb-2'}>
                  Lorem Ipsum
                </h3>
                <p className={'text-lg font-light text-gray-300'}>
                  dolor sit amet consectetur. Amet nunc tristique nunc donec
                  vulputa
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Key value props */}
        <div
          className={'w-full max-w-[1080px] flex flex-col mx-auto pt-32 px-2'}
        >
          <h2 className={'text-center text-4xl font-bold'}>Value</h2>
          <div className={'flex gap-16'}>
            <div className={'w-1/2 flex flex-col gap-4'}>
              <h3 className={'text-2xl font-medium pt-12 pb-2 text-center'}>
                For Everyone
              </h3>
              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>

              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>
              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>
            </div>
            <div className={'w-1/2 flex flex-col gap-4'}>
              <h3 className={'text-2xl font-medium pt-12 pb-2 text-center'}>
                For Developers
              </h3>
              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>

              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>
              <div className={'p-4 shadow-xl rounded-lg bg-white'}>
                <h4>Something</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
