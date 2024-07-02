'use client';

import HeadingConstructionGraphic from '@/components/sections/CustomizationSection/HeadingConstructionGraphic';
import ParagraphConstructionGraphic from '@/components/sections/CustomizationSection/ParagraphConstructionGraphic';
import CardConstructionGraphic from '@/components/sections/CustomizationSection/CardConstructionGraphic';
import TryItOutText from '@/components/sections/CustomizationSection/TryItOutText';
import { useEffect, useState } from 'react';
import { LandingPageThemeTokens, setTheme } from '@/utils/themeHelpers';
import { Grid3x3Icon, GripIcon, SquareIcon } from 'lucide-react';
import Color from 'color';

enum themeColor {
  green = 'green',
  teal = 'teal',
  blue = 'blue',
  purple = 'purple',
  orange = 'orange',
  red = 'red',
}

interface ThemeState {
  bgStyle: 'grid' | 'dot' | 'blank';
  headingFont: string;
  paragraphFont: string;
  colorScheme: themeColor | string;
}

const mapStateToTheme = (
  state: ThemeState,
): Partial<LandingPageThemeTokens> => ({
  bgTexture:
    state.bgStyle === 'grid'
      ? 'url("/bg-grid-04.svg")'
      : state.bgStyle === 'dot'
        ? 'url("/bg-dot-04.svg")'
        : 'url("/bg-none.svg")',
  mainColor: state.colorScheme.startsWith('#')
    ? state.colorScheme
    : mapColor[state.colorScheme][0],
  mainColorBg: state.colorScheme.startsWith('#')
    ? Color(state.colorScheme).lighten(1).hex()
    : mapColor[state.colorScheme][1],
});

const mapColor: Record<string, [string, string]> = {
  green: ['#98C65B', '#E8F3D9'],
  teal: ['#5fbb8b', '#e6f8f1'],
  blue: ['#3f6ff1', '#e6e9f8'],
  purple: ['#803ff1', '#e9d6ef'],
  orange: ['#f1833f', '#efdfd6'],
  red: ['#f13f3f', '#efd9d6'],
};

const CustomizationInteractiveSection = () => {
  const [state, setState] = useState<ThemeState>({
    bgStyle: 'grid',
    headingFont: 'Inter',
    paragraphFont: 'Inter',
    colorScheme: themeColor.blue,
  });

  useEffect(() => {
    setTheme(mapStateToTheme(state));
  }, [state]);

  return (
    <div className={'flex max-w-[1100px] w-full py-12 gap-4'}>
      <div className={'overflow-hidden flex justify-end'}>
        <div
          className={'flex flex-col mix-blend-multiply w-[720px]'}
          style={{ flexGrow: 1 }}
        >
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
      </div>
      <div className={'relative flex flex-col pr-20'}>
        <TryItOutText
          className={'self-end relative -right-16 top-2 text-theme-text'}
        />
        <div
          className={
            'bg-white flex flex-col border border-gray-100 w-[240px] p-4 shadow-xl rounded-xl'
          }
        >
          <p className={'font-bold text-gray-800 text-sm'}>Background Style</p>
          <div className={`flex bg-gray-100 rounded-lg my-2`}>
            {['grid', 'dot', 'none'].map((v) => (
              <button
                className={`px-2 py-1 grow flex text-gray-800 justify-center border border-gray-100 rounded-lg ${state.bgStyle === v ? 'bg-white border-gray-200 shadow-sm' : 'opacity-50'}`}
                key={v}
                onClick={() => setState((s) => ({ ...s, bgStyle: v as any }))}
              >
                {v === 'grid' ? (
                  <Grid3x3Icon />
                ) : v === 'dot' ? (
                  <GripIcon />
                ) : (
                  <SquareIcon />
                )}
              </button>
            ))}
          </div>
          <p className={'font-bold text-gray-800 text-sm mt-2'}>Color Scheme</p>
          <div className={`flex gap-1 rounded-lg my-2`}>
            {Object.values(themeColor).map((v) => (
              <button
                className={`w-6 h-6 rounded-xl border-2 border-white ${state.colorScheme === v ? 'rounded-md border-theme-main' : ''}`}
                style={{ background: mapColor[v][0] }}
                key={v}
                onClick={() =>
                  setState((s) => ({ ...s, colorScheme: v as any }))
                }
              />
            ))}
            <div
              className={
                'w-6 h-6 bg-gray-300 rounded-xl flex items-center justify-center'
              }
            >
              <input
                onChange={(e) =>
                  setState((s) => ({ ...s, colorScheme: e.target.value }))
                }
                defaultValue={'#ffffff'}
                type={'color'}
                className={'w-4 h-4 p-0 m-0 rounded-xl'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationInteractiveSection;
