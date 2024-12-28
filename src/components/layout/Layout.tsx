import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-jc7-white">
      <Navbar />
      <main className="flex-grow w-full pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
