import { CSSProperties } from 'react';

interface LandingPageThemeTokens {
  mainColor: string;
  mainColorBg: string;
  bgColor: string;
  surfaceColor: string;
  textColor: string;
}

export const THEME_PROVIDER_ID = 'landing-page-theme-provider';

export const defaultTokens: LandingPageThemeTokens = {
  mainColor: '#3f6ff1',
  mainColorBg: '#e6e9f8',
  bgColor: '#fff',
  surfaceColor: '#ededed',
  textColor: '#31362B',
};

export const tokensToStyles = (
  tokens: LandingPageThemeTokens,
): CSSProperties => {
  return {
    '--theme-main-color': tokens.mainColor,
    '--theme-bg-color': tokens.bgColor,
    '--theme-main-color-bg': tokens.mainColorBg,
    '--theme-surface-color': tokens.surfaceColor,
    '--theme-text-color': tokens.textColor,
  } as any;
};
