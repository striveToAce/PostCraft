import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  userName?: string;
  isAuthPage?: boolean
}

const HeaderFooterLayout: React.FC<LayoutProps> = ({ children, isAuthPage }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthPage={Boolean(isAuthPage)} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;