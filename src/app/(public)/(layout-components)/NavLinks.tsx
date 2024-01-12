'use client';
import useHash from "@/hooks/useHash";
import HashLink from "@/components/HashLink";
import { usePathname } from "next/navigation";
import { FaBlog, FaServer } from "react-icons/fa6";

const NavLinks = () => {
  const currRoute = usePathname() + useHash();
  const navLinks = [
    { route: "dashboard", text: "Dashboard", icon: <FaServer className="w-4 h-4" /> },
    { route: "blog", text: "Blog", icon: <FaBlog className="w-5 h-5" /> },
  ];

  return <>
    {navLinks.map((navLink, i) => 
      <NavLink key={i} currRoute={currRoute} route={navLink.route} text={navLink.text} icon={navLink.icon} />
    )}
  </>;
};

export default NavLinks;

const NavLink = (props: { currRoute: string; route: string; text: string; icon: JSX.Element }) => {
  const { currRoute, route, text, icon } = props;
  return (
    <HashLink href={`/${route}`} className={"navlink" + (currRoute == `/${route}` ? " active" : "")}>
      {icon} <h6>{text}</h6>
    </HashLink>
  );
}