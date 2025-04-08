import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import QueryProvider from '@/components/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App by Ammar Arshad',
  description: 'Built for PM Accelerator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}