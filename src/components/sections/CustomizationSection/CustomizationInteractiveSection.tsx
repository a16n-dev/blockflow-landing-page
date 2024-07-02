'use client';

import HeadingConstructionGraphic from '@/components/sections/CustomizationSection/HeadingConstructionGraphic';
import ParagraphConstructionGraphic from '@/components/sections/CustomizationSection/ParagraphConstructionGraphic';
import CardConstructionGraphic from '@/components/sections/CustomizationSection/CardConstructionGraphic';
import TryItOutText from '@/components/sections/CustomizationSection/TryItOutText';
import { useEffect, useState } from 'react';
import { LandingPageThemeTokens, setTheme } from '@/utils/themeHelpers';

interface ThemeState {
  bgStyle: 'grid' | 'dot' | 'blank';
  headingFont: string;
  paragraphFont: string;
  colorScheme: 'blue' | 'green' | 'purple';
}

const mapStateToTheme = (
  state: ThemeState,
): Partial<LandingPageThemeTokens> => ({
  bgTexture:
    state.bgStyle === 'grid'
      ? 'url("/bg-grid-04.svg")'
      : state.bgStyle === 'dot'
        ? 'url("/bg-dot-04.svg")'
        : '',
});

const CustomizationInteractiveSection = () => {
  const [state, setState] = useState<ThemeState>({
    bgStyle: 'grid',
    headingFont: 'Inter',
    paragraphFont: 'Inter',
    colorScheme: 'blue',
  });

  useEffect(() => {
    setTheme(mapStateToTheme(state));
  }, [state]);

  return (
    <div className={'flex max-w-[1100px] py-12'}>
      <div className={'flex flex-col mix-blend-multiply'}>
        <HeadingConstructionGraphic />
        <div className={'relative'}>
          <ParagraphConstructionGraphic />
          <p
            className={'absolute inset-0 text-sm py-5 px-6'}
            style={{
              maskImage:
                ' linear-gradient(-35deg, rgb(0 0 0 / 100%) 25%, transparent 70%)',
            }}
          >
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo dui, euismod quis metus in, viverra fringilla est. Duis pulvinar vel odio sed tincidunt. Vivamus est lectus, facilisis vitae scelerisque eu, imperdiet elementum enim. Donec nibh nunc, accumsan vitae fringilla id, posuere et est.'
            }
          </p>
        </div>
        <div className={'grid grid-cols-2 -mt-2'}>
          <CardConstructionGraphic />
          <div
            className={
              'bg-theme-main text-theme-bg m-2 mb-3 rounded-xl p-4 text-lg font-bold'
            }
          >
            <p>Task List</p>
          </div>
        </div>
      </div>
      <div className={'relative flex flex-col'}>
        <TryItOutText className={'self-end relative -right-16 top-2'} />
        <div
          className={
            'bg-white flex flex-col border border-gray-100 w-[240px] p-4 shadow-xl rounded-xl'
          }
        >
          <p className={'font-bold text-gray-800 text-sm'}>Background Style</p>
        </div>
      </div>
    </div>
  );
};

export default CustomizationInteractiveSection;
