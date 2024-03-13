'use client';
import useScrollSnap, { forceScrollTo } from "@/hooks/useScrollSnap";
import useKeyScroll from "@/hooks/useKeyScroll";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import VideoBg from "@/components/VideoBg/component"

const Hero = () => {
  const hero = useRef<HTMLElement | null>(null);
  useScrollSnap(hero);
  useKeyScroll(hero);

  const handleArrowClick = () => forceScrollTo(hero.current?.nextSibling as Element);
  return (
    <section ref={hero} id="hero" className="relative flex flex-col gap-8 items-center">
      <VideoBg width={1920} height={1080} aspectRatio="16:9"/>

      <span className="w-fit flex flex-col items-center justify-center my-auto font-bold scale-75 sm:scale-95 md:scale-110">
        <h2 className="whitespace-nowrap uppercase text-neutral text-center text-stroke">
          Expertise.<br />Innovation.<br />Client Focus.<br />Quality of Work.
        </h2>

        <h1 className="inline-flex flex-nowrap items-end logo-rainbow m-0 p-0">
          LunarLabs<div id="cloudMask" className="mx-0.5 mb-[0.3125rem]" />
        </h1> 
      </span>

      <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-end arrow">
        <IoIosArrowDown
          onClick={handleArrowClick}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-5 text-gray-300 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
