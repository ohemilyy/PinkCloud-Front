'use client';
import useHash from "@/hooks/useHash";
import HashLink from "@/components/HashLink";
import { usePathname } from "next/navigation";
import { FaBlog, FaServer } from "react-icons/fa6";

const NavLinks = () => {
  const currRoute = usePathname() + useHash();
  const getLink = (route: string, text: string, icon: JSX.Element) =>
    <HashLink href={`/${route}`} className={"navlink" + (currRoute == `/${route}` ? " active" : "")}>
      {icon} <h6>{text}</h6>
    </HashLink>

  return <>
    {getLink('dashboard', "Dashboard", <FaServer className="w-4 h-4" />)}
    {getLink('blog', "Blog", <FaBlog className="w-5 h-5" />)}
  </>;
};

export default NavLinks;