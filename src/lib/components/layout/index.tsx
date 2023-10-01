import type { ReactNode } from 'react';

import Navbar from '@/lib/components/Navbar';
import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen">
        <Navbar />
        <div className=" flex w-full flex-col pt-14">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
