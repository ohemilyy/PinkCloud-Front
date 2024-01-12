'use client';
import { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import useShowOnScroll from "@/hooks/useShowOnScroll";

const Header = () => {
  const [headerRect, setHeaderRect] = useState<DOMRect>();
  const handleRect = useCallback((node: HTMLElement) => setHeaderRect(node?.getBoundingClientRect()), []);
  const isShow = useShowOnScroll(headerRect);

  return (
    <header ref={handleRect} className={"flex items-center justify-center w-full px-4 lg:px-24 bg-base-200 border-b-2 border-base-300" + (!isShow ? " header-up" : '')}>
      <div className={"flex items-center justify-between w-full max-w-[1337px]"}>
        <div className="flex flex-row items-center">
          <label htmlFor="sidebar" tabIndex={0} className="flex md:hidden expand-btn btn btn-ghost btn-circle mr-4">
            <FaBars />
          </label>

          <Logo className="mx-auto md:ml-0" href={'/'} />
        </div>

        <NavLinks />

        <ThemeToggle className="themeToggle" />
      </div>
    </header>
  );
};

export default Header;