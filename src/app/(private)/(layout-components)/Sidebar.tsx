const Sidebar = (props: { content: any; className: string; includeInput?: boolean; }) => {
  const includeInput = props.includeInput ?? true;
  return <>
    {includeInput ? <input id="sidebar" type="checkbox" className="drawer-toggle"/> : <></>}
    <nav className={`flex-none sidebar-collapsable h-full ${props.className || ''}`}>
      {props.content}
    </nav>
  </>;
}

export default Sidebar;

export const SidebarToggle = () =>
  <label htmlFor="sidebar" tabIndex={0} className="hidden md:inline-flex expand-btn btn btn-ghost btn-circle">
    <svg className="text-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 7l5 5l-5 5"></path>
      <path d="M13 7l5 5l-5 5"></path>
    </svg>
  </label>