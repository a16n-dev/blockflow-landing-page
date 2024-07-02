import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-main': 'var(--theme-main-color)',
        'theme-main-bg': 'var(--theme-main-color-bg)',
        'theme-bg': 'var(--theme-bg-color)',
        'theme-surface': 'var(--theme-surface-color)',
        'theme-text': 'var(--theme-text-color)',
      },
    },
  },
  plugins: [],
};
export default config;
