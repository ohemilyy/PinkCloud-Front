'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image"
import Dropdown from "./Dropdown";
import Link from "next/link";
import { MobileNavToggle } from "@/components/MobileNavbar/component";
import ShrinkableSearch from "@/components/ShrinkableSearch/component";
import { SidebarToggle } from "./Sidebar";
import Logo from "@/components/Logo";

const Topbar = () => {
  const [ pfp, setPfp ] = useState<string | null>(null);

  useEffect(() => {
      // if (status === "authenticated") {
      //     setPfp(null);
      // } else {
          setPfp(null);
      // };
  }, []);

  return <>
    <div className="navbar py-0 z-[1]">
      <div className="flex-1">
        <MobileNavToggle />
        <SidebarToggle />
        
        <Logo href={'/dashboard'} className="hidden sm:flex ml-4"/>
      </div>

      <div>
        <ShrinkableSearch />
        
        <Dropdown
          indicatorIcon={
            <div className="w-10 rounded-full flex justify-center items-center overflow-hidden">
              {
                pfp ?
                  <Image className = "rounded-xl w-16 object-cover" alt = "Avatar" src = { pfp } width = "600" height = "600" /> : <span className="p-1">❤</span>
              }
            </div>
          }
          className="mt-3 p-4 py-8 bg-base-100 rounded-box w-fit flex flex-col gap-y-2 whitespace-nowrap"
        >
          <Link className="font-bold hover:bg-gray-800 p-4 py-2 rounded-lg" href="/profile">Profile</Link>
          <form className="font-bold hover:bg-gray-800 p-4 py-2 rounded-lg" action="/api/auth/signout" method="post">
            <button className="w-full h-full" type="submit">Sign out</button>
          </form>
        </Dropdown>
      </div>
    </div>
  </>;
};

export default Topbar;