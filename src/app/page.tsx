import { Client } from '@blockflow/client';
import { notFound } from 'next/navigation';
import Logo from '@/component/common/Logo/Logo';

const Home = async () => {
  const landingPage = await client.getDocumentBySlug(
    'pages',
    'ce2jv37g-title-here',
  );

  if (!landingPage) {
    notFound();
  }

  return (
    <main className='flex flex-col min-h-screen'>
      <div className='container mx-auto py-32 px-4 flex'>
        <div className={'w-1/2'}>
          {/*<Logo width={64} />*/}
          <h1 className={'text-5xl font-medium'}>Title Here</h1>
          <p className={'text-xl font-light'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            feugiat enim. Nunc aliquet nisl ligula, ac porttitor mauris posuere
            vitae. Vivamus tempor lobortis ex, eget lacinia quam scelerisque
            eget.
          </p>
        </div>
        <div className={'w-1/2'}>
          <div className={'h-[300px] bg-gray-300 rounded-xl'}></div>
        </div>
      </div>
      <div>{JSON.stringify(landingPage)}</div>
    </main>
  );
};

export default Home;
