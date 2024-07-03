import { APP_NAME } from '@/utils/constants';
import Image from 'next/image';
import heroImage from './heroImage.png';

const HeroSection = () => {
  return (
    <section
      className={'pt-24 pb-8 flex flex-col items-center px-8 w-full mx-auto'}
    >
      <div className={'max-w-[800px] mb-14'}>
        <h1
          className={
            'text-6xl font-theme-display text-center font-bold text-theme-text mb-4'
          }
        >
          {APP_NAME}
        </h1>
        <p className={'font-theme text-2xl text-theme-text text-center'}>
          Get your thoughts down, customize, and organize your life. <br /> All
          in one place.
        </p>
      </div>
      {/* Hero image/svg goes here */}
      {/*<div className={'w-full aspect-video bg-theme-surface rounded-xl'} />*/}
      <Image
        src={heroImage}
        className={'max-w-[1080px]'}
        alt={'Example Journal layout'}
      />
    </section>
  );
};

export default HeroSection;
