import './styles.css';
import Footer from './(layout-components)/Footer';
import Header from './(layout-components)/Header';
import Sidebar from './(layout-components)/Sidebar';
import SidebarContent from './(layout-components)/SidebarContent';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar
      barClass="flex flex-col items-center text-center p-6 w-3/5 h-full backdrop-filter backdrop-blur-sm backdrop-brightness-[.67]"
      barContent={<SidebarContent />}
      className="flex flex-col items-center justify-between w-full h-full overflow-y-auto overflow-x-hidden relative bg-base-100"
    >
      <Header />
      {children}
      <Footer />
    </Sidebar>
  );
}