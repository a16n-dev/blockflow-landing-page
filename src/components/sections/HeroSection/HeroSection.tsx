import { APP_NAME } from '@/utils/constants';
import Image from 'next/image';
import heroImage from './heroImage.png';
import styles from './HeroSection.module.css';
import Logo from '@/components/common/Logo/Logo';
import HeroGraphic from '@/components/sections/HeroSection/HeroGraphic';

const HeroSection = () => {
  return (
    <section
      className={`${styles.background} pt-16 pb-8 flex flex-col items-center px-8 w-full mx-auto`}
    >
      <div className={'max-w-[800px] mb-14 flex flex-col'}>
        <Logo className={'self-center mb-4 text-theme-main'} size={64} />
        <h1
          className={
            'text-5xl md:text-6xl font-theme-display text-center font-bold text-theme-text'
          }
        >
          {`${APP_NAME}.so`}
        </h1>

        <p className={'font-theme text-xl text-theme-text text-center mt-1'}>
          Your all-in-one digital planner thats fully customizable!
        </p>
      </div>
      <HeroGraphic />
    </section>
  );
};

export default HeroSection;
