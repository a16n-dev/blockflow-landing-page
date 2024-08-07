import { CSSProperties } from 'react';

export enum Fonts {
  'OpenSans' = '',
  'Rubik' = 'Rubik',
  'PlayFair' = 'Playfair Display',
  'FiraMono' = 'Fira Mono',
  'Poppins' = 'Poppins',
  'Caveat' = 'Caveat',
  'Raleway' = 'Raleway',
}

export interface LandingPageThemeTokens {
  mainColor: string;
  mainColorBg: string;
  bgColor: string;
  surfaceColor: string;
  textColor: string;
  bgTexture?: string;
  displayFontFamily: Fonts;
  textFontFamily: Fonts;
}

const fontHrefs: Record<Fonts, string> = {
  [Fonts.OpenSans]: '',
  [Fonts.Rubik]:
    'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap',
  [Fonts.PlayFair]:
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
  [Fonts.FiraMono]:
    'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap',
  [Fonts.Poppins]:
    'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  [Fonts.Caveat]:
    'https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Fira+Mono:wght@400;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  [Fonts.Raleway]:
    'https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Fira+Mono:wght@400;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
};

export const THEME_PROVIDER_ID = 'landing-page-theme-provider';

export const defaultTokens: LandingPageThemeTokens = {
  mainColor: '#90b065',
  mainColorBg: '#E8F3D9',
  bgColor: '#fff',
  surfaceColor: '#ededed',
  textColor: '#31362B',
  bgTexture: 'url("/bg-grid-04.svg")',
  displayFontFamily: Fonts.OpenSans,
  textFontFamily: Fonts.OpenSans,
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
    '--theme-display-font': tokens.displayFontFamily,
    '--theme-text-font': tokens.textFontFamily,
  } as any;
};

export const setTheme = (tokens: Partial<LandingPageThemeTokens>) => {
  const elem = document.getElementById(THEME_PROVIDER_ID);

  const combinedTokens: LandingPageThemeTokens = {
    ...defaultTokens,
    ...tokens,
  };

  const styles = tokensToStyles(combinedTokens);

  // load the font from google fonts
  if (combinedTokens.displayFontFamily) {
    const link = document.createElement('link');
    link.href = fontHrefs[combinedTokens.displayFontFamily];
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  if (combinedTokens.textFontFamily) {
    const link = document.createElement('link');
    link.href = fontHrefs[combinedTokens.textFontFamily];
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  for (const style of Object.keys(styles)) {
    elem?.style.setProperty(style, (styles as any)[style]);
  }
};
