import './styles.css';
import MobileNavbar from '@/components/MobileNavbar/component';
import Sidebar from './(layout-components)/Sidebar';
import NavLinks from './(layout-components)/NavLinks';
import Topbar from './(layout-components)/Topbar';
import type { Metadata } from 'next';
import MobileNavbarContent from './(layout-components)/MobileNavbarContent';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: '',
}

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <MobileNavbar
      className="flex flex-col items-center text-center p-6 w-3/5 h-full backdrop-filter backdrop-blur-sm"
      content={<MobileNavbarContent />}
    />
    <div className="flex flex-col h-screen bg-full bg-img z-2">
      <div className="absolute h-full w-full bg-base-100 inset-0 nav-filter"></div>
      <Topbar />
      <div className="relative flex h-full overflow-hidden">
        <Sidebar
          content={<>
            <NavLinks />
            <ThemeToggle className="mx-auto hide" />
          </>}
          className="hidden md:flex"
        />
        <main className="relative flex flex-col w-full h-full overflow-y-auto overflow-x-hidden p-4 md:rounded-tl-xl">
          <div className="absolute h-full w-full bg-base-100 inset-0 content-filter"></div>
          {children}
        </main>
      </div>
    </div>
  </>;
}
