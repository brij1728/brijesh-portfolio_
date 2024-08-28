import './globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@/components';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { theme } from '../theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brijesh Portfolio',
  description: 'Generated by create next app',
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
          <div className='min-h-screen flex flex-col'>
            {/* Header */}
            <div className='h-24'>
              <Header />
            </div>
            {/* Main content */}
            <div className='flex-grow flex items-center'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
