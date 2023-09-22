'use client';

import './globals.css';
import { Header } from '@/components';
import { FilterContextProvider } from '@/contexts/filter-context';
import { Saira } from 'next/font/google';
import { ReactNode } from 'react';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

interface AppProps {
  children: ReactNode;
}

export function App({ children }: AppProps) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
