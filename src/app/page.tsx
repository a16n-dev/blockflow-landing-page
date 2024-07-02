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

export async function generateMetadata() {
  return {
    title: `BlockFlow`,
    description: 'Power your content with Notion',
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
        <HeroSection />
        <JoinBetaSection />
        <UseCaseSection />
        <CustomizationSection />
        <MotivationSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Home;
