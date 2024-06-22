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
        blue: {
          '50': '#eef9ff',
          '100': '#daf2ff',
          '200': '#bde9ff',
          '300': '#8fdcff',
          '400': '#5bc6ff',
          '500': '#34a9fd',
          '600': '#1e8cf2',
          '700': '#1674df',
          '800': '#195db4',
          '900': '#1a508e',
          '950': '#153156',
        },
      },
    },
  },
  plugins: [],
};
export default config;
