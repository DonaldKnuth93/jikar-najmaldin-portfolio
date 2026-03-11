import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jikar Najmaldin — Entrepreneur & Founder',
  description:
    'Jikar Najmaldin is a visionary entrepreneur and founder building products that reshape industries. Creator of Connectly24 and FinWolf.',
  keywords: ['Jikar Najmaldin', 'Entrepreneur', 'Founder', 'Connectly24', 'FinWolf', 'Startup'],
  authors: [{ name: 'Jikar Najmaldin' }],
  openGraph: {
    title: 'Jikar Najmaldin — Entrepreneur & Founder',
    description: 'Visionary entrepreneur building products that reshape industries.',
    url: 'https://jikarnajm.com',
    siteName: 'Jikar Najmaldin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jikar Najmaldin — Entrepreneur & Founder',
    description: 'Visionary entrepreneur building products that reshape industries.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
