const Sidebar = (props: { barClass?: string; barContent: any; className?: string; children: any; }) => <>
  <input id="sidebar" type="checkbox" className="drawer-toggle" />
  <nav className="drawer-side md:hidden z-[3]">
    <label htmlFor="sidebar" className="drawer-overlay"></label>
    <div className={props.barClass}>
      {props.barContent}
    </div>
  </nav>
  
  <main className={props.className}>
    {props.children}
  </main>
</>;
export default Sidebar;