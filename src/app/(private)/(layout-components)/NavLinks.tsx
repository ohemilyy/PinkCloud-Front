
import { IoIosHelpCircleOutline } from "react-icons/io"
import { CiSaveDown2, CiUser, CiDesktop, CiWifiOn, CiServer, CiSettings } from "react-icons/ci";
import Link from "next/link";

const NavLinks = () => <>
  <div className="flex-1 navbar-links whitespace-nowrap font-medium text-xl">
      <ul>
          <li>
              <Link href="/dashboard/backups" title="Backups" className="flex flex-row items-center hide gap-x-4">
                  <CiSaveDown2 /> Backups
              </Link>
          </li>
          <li>
              <Link href="/#" title="Network" className="flex flex-row items-center hide gap-x-4">
                  <CiWifiOn /> Network
              </Link>
          </li>
          <li>
              <Link href="/#" title="Metrics" className="flex flex-row items-center hide gap-x-4">
                  <CiServer /> Metrics
              </Link>
          </li>
          <li>
              <Link href="/dashboard/account" title="User Options" className="flex flex-row items-center hide gap-x-4">
                  <CiUser /> User Options
              </Link>
          </li>
          <li>
              <Link href="/#" title="Administrator" className="flex flex-row items-center hide gap-x-4">
                  <CiDesktop /> Administrator
              </Link>
          </li>
      </ul>
  </div>

  <div className="flex-none navbar-links flex flex-col justify-center">
      <div className="divider w-full h-px mb-0"></div>
      <ul className="py-1.5 font-medium">
          <li>
              <Link href="/#" title="Help" className="flex flex-row items-center hide gap-x-4">
                  <IoIosHelpCircleOutline /> Help
              </Link>
          </li>

          <li>
              <Link href="/#" title="Settings" className="flex flex-row items-center hide gap-x-4">
                  <CiSettings /> Settings
              </Link>
          </li>
      </ul>
  </div>
</>;

export default NavLinks;


// 'use client';
// import useHash from "@/hooks/useHash";
// import HashLink from "@/components/HashLink";
// import { usePathname } from "next/navigation";
// import { FaBlog, FaSatellite, FaSatelliteDish, FaUserAstronaut } from "react-icons/fa6";
// import { FaGlobeAmericas } from "react-icons/fa";

// const NavLinks = () => {
//   const currRoute = usePathname() + useHash();
//   const navLinks = [
//     { href: "/dashboard", text: "Dashboard", icon: <FaSatellite className="w-4 h-4" /> },
//     { href: "/blog", text: "Blog", icon: <FaBlog className="w-5 h-5" /> },
//     { href: "https://uptime.pinkcloud.studio", text: "Uptime", icon: <FaSatelliteDish className="w-5 h-5" /> },
//     { href: "/services", text: "Services", icon: <FaGlobeAmericas className="w-5 h-5" /> },
//     { href: "/crew", text: "Crew", icon: <FaUserAstronaut className="w-5 h-5" /> },
//   ];

//   return <>
//     {navLinks.map((navLink, i) => 
//       <NavLink key={i} currRoute={currRoute} href={navLink.href} text={navLink.text} icon={navLink.icon} />
//     )}
//   </>;
// };

// export default NavLinks;

// const NavLink = (props: { currRoute: string; href: string; text: string; icon: JSX.Element }) => {
//   const { currRoute, href, text, icon } = props;
//   return (
//     <HashLink href={href} className={"navlink" + (currRoute == href ? " active" : "")}>
//       {icon} <h6>{text}</h6>
//     </HashLink>
//   );
// }