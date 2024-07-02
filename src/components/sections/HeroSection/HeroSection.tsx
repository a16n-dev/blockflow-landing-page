import { APP_NAME } from '@/utils/constants';

const HeroSection = () => {
  return (
    <section
      className={
        'pt-24 pb-8 flex flex-col items-center max-w-[932px] px-8 w-full mx-auto'
      }
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
      <div className={'w-full aspect-video bg-theme-surface rounded-xl'} />
    </section>
  );
};

export default HeroSection;
