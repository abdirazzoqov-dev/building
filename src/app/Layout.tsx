import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar, Navbar, MobileMenuDrawer, Footer } from '@/features/layout';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

