'use client';

import HeadingConstructionGraphic from '@/components/sections/CustomizationSection/HeadingConstructionGraphic';
import ParagraphConstructionGraphic from '@/components/sections/CustomizationSection/ParagraphConstructionGraphic';
import CardConstructionGraphic from '@/components/sections/CustomizationSection/CardConstructionGraphic';
import TryItOutText from '@/components/sections/CustomizationSection/TryItOutText';
import { useEffect, useState } from 'react';
import { Fonts, LandingPageThemeTokens, setTheme } from '@/utils/themeHelpers';
import {
  CheckIcon,
  CheckSquare2Icon,
  Grid3x3Icon,
  GripIcon,
  SquareIcon,
} from 'lucide-react';
import Color from 'color';
import ComboBox from '@/components/common/ComboBox/ComboBox';
import { TODO_ITEMS } from '@/utils/constants';

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
  headingFont: Fonts;
  paragraphFont: Fonts;
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
  displayFontFamily: state.headingFont,
  textFontFamily: state.paragraphFont,
});

const mapColor: Record<string, [string, string]> = {
  green: ['#90b065', '#E8F3D9'],
  teal: ['#5fbb8b', '#e6f8f1'],
  blue: ['#3f6ff1', '#e6e9f8'],
  purple: ['#803ff1', '#e9d6ef'],
  orange: ['#f1833f', '#efdfd6'],
  red: ['#f13f3f', '#efd9d6'],
};

const CustomizationInteractiveSection = () => {
  const [state, setState] = useState<ThemeState>({
    bgStyle: 'grid',
    headingFont: Fonts.OpenSans,
    paragraphFont: Fonts.OpenSans,
    colorScheme: themeColor.green,
  });

  useEffect(() => {
    setTheme(mapStateToTheme(state));
  }, [state]);

  return (
    <div className={'flex max-w-[1100px] w-full py-12 gap-4'}>
      <div className={'overflow-hidden flex justify-end -mr-24 md:mr-0'}>
        <div
          className={'flex flex-col mix-blend-multiply w-[720px] '}
          style={{ flexGrow: 1 }}
        >
          <HeadingConstructionGraphic />
          <div className={'relative'}>
            <ParagraphConstructionGraphic />
            <p
              className={'font-theme absolute inset-0 text-sm py-5 px-6'}
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
              className={'bg-theme-main text-theme-bg m-2 mb-3 rounded-xl p-4'}
            >
              <div className={'flex gap-1 items-center'}>
                <CheckSquare2Icon size={'24'} />
                <p className={'text-lg font-bold font-theme-display'}>
                  Task List
                </p>
              </div>
              <div className={'flex flex-col gap-4 mt-4'}>
                {TODO_ITEMS.map((item, i) => (
                  <div key={i} className={'flex gap-2 items-center'}>
                    {item.checked ? (
                      <div
                        className={
                          'w-5 h-5 rounded-md bg-theme-bg text-theme-main'
                        }
                      >
                        <CheckIcon size={20} />
                      </div>
                    ) : (
                      <div
                        className={'w-5 h-5 rounded-md border border-theme-bg'}
                      />
                    )}
                    <div className={'font-theme'}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'relative flex flex-col pr-12'}>
        <TryItOutText
          className={'self-end relative -right-8 text-theme-main'}
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
              className={'w-6 h-6 rounded-xl flex items-center justify-center'}
              style={{
                background: state.colorScheme.startsWith('#')
                  ? '#d7d7d7'
                  : 'conic-gradient(from 90deg, violet, indigo,blue, green, yellow, orange, red, violet)',
              }}
            >
              <input
                onChange={(e) =>
                  setState((s) => ({ ...s, colorScheme: e.target.value }))
                }
                defaultValue={'#ffffff'}
                type={'color'}
                className={`${state.colorScheme.startsWith('#') ? 'w-6 h-6' : 'w-4 h-4'} cursor-pointer p-0 m-0 rounded-xl`}
              />
            </div>
          </div>
          <p className={'font-bold text-gray-800 text-sm'}>Heading Font</p>
          <ComboBox
            value={state.headingFont}
            onChange={(v) => setState((s) => ({ ...s, headingFont: v }))}
          />
          <p className={'font-bold text-gray-800 text-sm mt-1'}>Body Font</p>
          <ComboBox
            value={state.paragraphFont}
            onChange={(v) => setState((s) => ({ ...s, paragraphFont: v }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizationInteractiveSection;
