import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Aryan Verma',
    default: "Aryan Verma's Portfolio",
  },
  description:
    'Portfolio of Aryan Verma, Software Engineer and Computer Science graduate from Michigan State University.',
  authors: [{ name: 'Aryan Verma' }],
  metadataBase: new URL('https://aryanverma30.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: "Aryan Verma's Portfolio",
    description:
      'Portfolio of Aryan Verma, Software Engineer and Computer Science graduate from Michigan State University.',
    siteName: 'Aryan Verma Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
