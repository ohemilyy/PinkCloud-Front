'use client';
import HashLink from '@/components/HashLink';
import './styles.css';
import {FaShoppingCart, FaArrowRight} from "react-icons/fa";
export default function Hydro() {
  return (
    <div>
      <h1 className="pt-24 text-rainbow text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
        Hydro Anticheat
      </h1>
      <p className="hero-p">
        The most reliable and trustworthy anti-cheat solution for safeguarding your server's integrity.
      </p>
      <span className="hero-p">
          <strong>Try us now</strong>
        <i className="fas fa-long-arrow-alt-right idk"></i>
        <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5 mt-7">
          <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
            <FaShoppingCart className="mt-0.5 h-5 w-5"/>
            <span>Purchase</span>
          </div>
        </HashLink>
      </span>
      <div className="pt-34 mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
      <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
      </div>
    </div>
  );
}