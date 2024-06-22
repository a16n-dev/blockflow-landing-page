import Logo from '@/components/common/Logo/Logo';
import { NotionRichText } from '@blockflow/notionTypes';

import {
  ArrowRightIcon,
  BlocksIcon,
  FileJson2Icon,
  MessageCircleMoreIcon,
  PencilIcon,
  WebhookIcon,
} from 'lucide-react';
import NotionIcon from '@/components/common/NotionIcon/NotionIcon';

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
            Easy <span className={'text-blue-500'}>FAQs</span> and Developer
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
              'bg-blue-600 text-white self-center px-12 py-3 text-lg rounded-lg hover:bg-blue-500 transition-colors'
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
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <PencilIcon className={'text-blue-500'} />
                </div>
                <p>
                  Easily add, edit, preview and publish content such as FAQ and
                  Help pages to your site without the need to get into the code.
                </p>
              </div>
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <NotionIcon className={'text-blue-500'} />
                </div>
                <p>
                  Stay working in your core tools like Notion, without needing
                  to explore expensive content management systems.
                </p>
              </div>
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <MessageCircleMoreIcon className={'text-blue-500'} />
                </div>
                <p>
                  {
                    "Take advantage of the collaboration tools in Notion, and keep your content alongside the rest of your team's docs"
                  }
                </p>
              </div>
            </div>
            <div className={'w-1/2 flex flex-col gap-4'}>
              <h3 className={'text-2xl font-medium pt-12 pb-2 text-center'}>
                For Developers
              </h3>
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <FileJson2Icon className={'text-blue-500'} />
                </div>
                <p>
                  {`The easiest way to work with Notion data as JSON content, to power any application content`}
                </p>
              </div>
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <WebhookIcon className={'text-blue-500'} />
                </div>
                <p>
                  Use the simple REST API to pull Notion content into any
                  application, or take advantage of the TypeScript code client
                  for end-to-end type safety
                </p>
              </div>
              <div
                className={
                  'p-4 flex flex-col gap-2 text-lg font-light rounded-lg bg-white'
                }
              >
                <div className={'p-2 bg-blue-50 rounded-xl self-start'}>
                  <BlocksIcon className={'text-blue-500'} />
                </div>
                <p>
                  Use our provided rendering framework to quickly render Notion
                  blocks in your preferred frontend framework
                </p>
              </div>
            </div>
          </div>
          <div
            className={'flex flex-col items-center gap-4 justify-center py-16'}
          >
            <button
              className={
                'bg-blue-600 flex gap-1 items-center text-white text-xl px-12 py-3 font-medium rounded-lg'
              }
            >
              Get started
              <ArrowRightIcon />
            </button>
            <button
              className={
                'border border-blue-600 text-lg text-blue-600 font-medium px-8 py-2 rounded-lg'
              }
            >
              Read the docs
            </button>
          </div>
        </div>
        {/* Why did we design this? */}
        <div
          className={'w-full max-w-[800px] flex flex-col mx-auto pt-24 px-2'}
        >
          <h2 className={'text-center text-4xl font-bold'}>
            Why did we design this?
          </h2>
          <p className={'text-center text-xl font-light py-8'}>
            {
              'Planning our previous start up’s FAQs, Blog posts and landing page content was all done in Notion, which we then would translate into code. We’d often want to iterate on this content, which was an annoying process in the code and also restricted non-technical team members from being able to contribute.'
            }
            <br />
            <br />
            {
              'Soooo we ended up integrating our Notion content databases into our site through building a Notion MUI and tailwind code translator. But this took time, features kept being added to the list and Notion limitations needed to be overcome, so we’ve decided to create BlockFlow as an out of the box solution to make your lives easier!'
            }
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
