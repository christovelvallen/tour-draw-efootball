import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'tourdraw | Tournament Drawing Efootball',
  description: 'Tournament Drawing Efootball',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
