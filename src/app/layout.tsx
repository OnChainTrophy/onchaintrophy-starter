import type { Metadata } from 'next';

import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'OnChain Trophy';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Celebrate the moment. Forever.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://onchaintrophy.com',
    title: 'OnChain Trophy',
    description: 'Celebrate the moment. Forever.',
    images: {
      url: '',
      alt: '',
    },
  },
  twitter: {
    creator: '@onchaintrophy',
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
