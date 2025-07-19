import '@/styles/globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';
import ContentLayout from '@/components/ContentLayout';

// src/app/layout.tsx
import { Tilt_Neon } from 'next/font/google';

const tiltNeon = Tilt_Neon({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'U.T.A',
  description: 'Next.js app with sidebar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={tiltNeon.className}>
        <SidebarProvider>
          <Sidebar />
          <ContentLayout>{children}</ContentLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
