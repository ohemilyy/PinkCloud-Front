const Sidebar = (props: { barClass?: string; barContent: any; className?: string; children: any; }) => <>
  <input id="sidebar" type="checkbox" className="drawer-toggle" />
  <nav className="drawer-side md:hidden z-[3]">
    <label htmlFor="sidebar" className="drawer-overlay"></label>
    <div className={`relative ${props.barClass}`}>
      <div className="absolute h-full w-full bg-base-100 inset-0 z-[-1] sidebar-filter"></div>
      {props.barContent}
    </div>
  </nav>
  
  <main className={props.className}>
    {props.children}
  </main>
</>;

export default Sidebar;