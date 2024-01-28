'use client';
import { useCallback, useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import useShowOnScroll from "@/hooks/useShowOnScroll";
import { MobileNavToggle } from "@/components/MobileNavbar/component";

const Header = () => {
  const [headerRect, setHeaderRect] = useState<DOMRect>();
  const handleRect = useCallback((node: HTMLElement) => setHeaderRect(node?.getBoundingClientRect()), []);
  const isShow = useShowOnScroll(headerRect);

  return (
    <header ref={handleRect} className={"flex items-center justify-center w-full px-4 lg:px-24 bg-base-200 border-b-2 border-base-300" + (!isShow ? " header-up" : '')}>
      <div className={"flex items-center justify-between w-full max-w-[1337px]"}>
        <div className="flex flex-row items-center">
          <MobileNavToggle />

          <Logo className="ml-4 md:ml-0" href={'/'} />
        </div>

        <NavLinks />

        <ThemeToggle className="themeToggle" />
      </div>
    </header>
  );
};

export default Header;