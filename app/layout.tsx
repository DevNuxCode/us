import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UNDERSTUDIOS - Premium Music Production',
  description: 'Professional music studio offering beat production, mixing, mastering, and full video production services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className="scroll-smooth">
      
      <body className={cn(inter.className, "antialiased")}>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}