'use client';
import HashLink from '@/components/HashLink';
import './styles.css';
import {FaShoppingCart} from "react-icons/fa";
import Console from '@/components/Console/component';
import Image from 'next/image';

export default function Hydro() {
  return (
    <div className="flex flex-col p-6 pt-24">
      <h1 className="text-rainbow text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
        Hydro Anticheat
      </h1>
      <p className="hero-p">
        The most reliable and trustworthy anti-cheat solution for safeguarding your server's integrity.
      </p>

      <span className="hero-p inline-flex justify-between mt-4">
        <span className="inline-flex items-start h-fit items-center">
          <strong className="">Try us now</strong>
          <i className="fas fa-long-arrow-alt-right idk"></i>
          <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5">
            <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
              <FaShoppingCart className="mt-0.5 h-5 w-5"/>
              <span>Purchase</span>
            </div>
          </HashLink>
        </span>
        <Console className="m-0">
          <Image width={718} height={321} className="m-0" src="http://web.archive.org/web/20221031000320im_/https://sparky.ac/assets/img/sparky-ac.png" alt={"Sparky"}/>
        </Console>
      </span>
    </div>
  );
}