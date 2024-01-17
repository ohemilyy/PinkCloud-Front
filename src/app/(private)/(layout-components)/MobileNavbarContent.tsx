import NavLinks from './NavLinks';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import React from 'react';

const MobileNavbarContent = () => <>
  <Logo href={'/'} />

  <div className="flex flex-col w-full h-full mt-8 gap-7">
    <NavLinks />
    <ThemeToggle className="mx-auto" />
  </div>  
</>;

export default MobileNavbarContent;