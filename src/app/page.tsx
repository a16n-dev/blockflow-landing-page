import HeroSection from '@/components/sections/HeroSection/HeroSection';
import {
  defaultTokens,
  THEME_PROVIDER_ID,
  tokensToStyles,
} from '@/utils/themeHelpers';
import JoinBetaSection from '@/components/sections/JoinBetaSection/JoinBetaSection';
import UseCaseSection from '@/components/sections/UseCaseSection/UseCaseSection';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection';
import CustomizationSection from '@/components/sections/CustomizationSection/CustomizationSection';
import MotivationSection from '@/components/sections/MotivationSection/MotivationSection';
import DatabaseSection from '@/components/sections/DatabaseSection/DatabaseSection';
import Header from '@/components/layout/Header/Header';
import { Metadata } from 'next';
import JoinBetaCondensedSection from '@/components/sections/JoinBetaCondensedSection/JoinBetaCondensedSection';

export function generateMetadata(): Metadata {
  return {
    title: `BlockFlow`,
    description:
      'Get your thoughts down, style them, and organize your life. All in one place.',
    openGraph: {
      images: ['/social.png'],
    },
  };
}

const Home = async () => {
  return (
    <div
      id={THEME_PROVIDER_ID}
      style={{
        ...tokensToStyles(defaultTokens),
      }}
    >
      <main className='flex flex-col min-h-screen'>
        {/*<Header />*/}
        <HeroSection />
        <JoinBetaCondensedSection />
        <CustomizationSection />
        <DatabaseSection />
        <UseCaseSection />
        <hr className={'mx-auto max-w-[600px] w-full border-theme-surface'} />
        <MotivationSection />
        <FeaturesSection />
        <JoinBetaSection />
      </main>
    </div>
  );
};

export default Home;
