import { CSSProperties } from 'react';

export interface LandingPageThemeTokens {
  mainColor: string;
  mainColorBg: string;
  bgColor: string;
  surfaceColor: string;
  textColor: string;
  bgTexture?: string;
}

export const THEME_PROVIDER_ID = 'landing-page-theme-provider';

export const defaultTokens: LandingPageThemeTokens = {
  mainColor: '#3f6ff1',
  mainColorBg: '#e6e9f8',
  bgColor: '#fff',
  surfaceColor: '#ededed',
  textColor: '#31362B',
  bgTexture: 'url("/bg-grid-04.svg")',
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
    '--theme-bg-texture': tokens.bgTexture,
  } as any;
};

export const setTheme = (tokens: Partial<LandingPageThemeTokens>) => {
  const elem = document.getElementById(THEME_PROVIDER_ID);

  const styles = tokensToStyles({ ...defaultTokens, ...tokens });

  for (const style of Object.keys(styles)) {
    elem?.style.setProperty(style, (styles as any)[style]);
  }
};
