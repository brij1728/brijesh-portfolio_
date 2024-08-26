import './globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@/components';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { theme } from '../theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100'>
            <div className='h-24'>
              <Header />
            </div>
            <div className='h-[calc(100vh - 6rem)]'> {children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
