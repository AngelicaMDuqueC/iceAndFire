import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
      },
      textColor: {
        'accent': '#0d0d0d',
        'neutral': 'gray',


      },
      extend: {
        typography: {
          DEFAULT: {
            css: {
              'h1': {
                fontSize: '4xl',
                '@screen sm': {
                  fontSize: '5xl',
                },
                '@screen md': {
                  fontSize: '7xl',
                },
                textTransform: 'uppercase',
              },
              'h2': {
                fontSize: 'lg',
                fontWeight: 'medium',
                '@screen lg': {
                  fontSize: '3xl',
                },
              },
              'h3': {
                fontSize: '2xl',
                '@screen sm': {
                  fontSize: '3xl',
                },
                fontWeight: 'semibold',
                textTransform: 'uppercase',
              },
              'h4': {
                fontSize: 'xl',
                '@screen md': {
                  fontSize: '2xl',
                },
                textTransform: 'uppercase',
              },
              'body': {
                fontSize: 'base',
              },
              'text': {
                fontSize: 'xl',
                '@screen md': {
                  fontSize: '3xl',
                },
              },
              'bigger': {
                fontSize: '4xl',
                '@screen sm': {
                  fontSize: '5xl',
                },
                '@screen md': {
                  fontSize: '6xl',
                },
                textTransform: 'uppercase',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // other plugins if needed
  ],
};
export default config;
