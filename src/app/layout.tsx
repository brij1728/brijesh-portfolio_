import './globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { TransitionProvider } from '@/components';
import { theme } from '../theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brijesh Portfolio',
  description: 'Animated Portfolio App using Framer Motion and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gradient-to-b from-blue-100 to-red-100`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TransitionProvider>{children}</TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
