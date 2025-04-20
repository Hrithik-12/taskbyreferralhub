'use client';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f5f8fe]">
      <Header />
      <div className="flex">
        <Sidebar currentPath={pathname} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}