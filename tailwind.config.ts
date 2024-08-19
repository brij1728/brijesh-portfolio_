import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FD6F00',
          200: '#FF8C00',
          300: '#FFFFFF',
          400: '#FFA500',
          500: '#FFFFF0',
          600: '#F8F8F8',
          700: '#D9D9D9',
        },
        secondary: {
          100: '#000000',
          200: '#1E1E1E',
          300: '#545454',
          400: '#121212',
          500: '#424242',
          600: '#797979',
          700: '#AFAFAF',
        },
        orange: {
          50: '#fff6e6',
          100: '#ffcb90',
          200: '#ffb78a',
          300: '#ff9654',
          400: '#ff8233',
          500: '#ff6300',
          600: '#e85a00',
          700: '#b54600',
          800: '#8c3600',
          900: '#6b2a00',
        },
        black: {
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
