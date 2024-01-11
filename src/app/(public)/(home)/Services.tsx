'use client';
import HashLink from "@/components/HashLink";
import { Url } from "next/dist/shared/lib/router/router";
import { FaInfinity } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { InView } from "react-intersection-observer";

const Services = () => (
  <section id="services" className="relative flex flex-col items-center justify-center text-center gap-2 py-10 px-4 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="target w-full h-full flex flex-col items-center gap-3 pb-10 out-of-view in-view">
      <span className="flex flex-row items-center justify-center font-bold gap-2"><h2>Our</h2><h2 className="text-rainbow">Services</h2></span>
      <h5>Here's a summary of what we provide you with.</h5>
      <HashLink href={""} className="see-link font-bold gap-1.5 mt-auto">
        <h6>( All Services )</h6>
      </HashLink>
    </div>
    
    <div className="relative w-full h-full grid auto-rows-fr gap-1 cards">
      <Card icon={<FaInfinity></FaInfinity>} title="Freelances" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Application Development" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Frontend and Backend Web Development" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Discord Development" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="System Admin" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Infrastructure Development & Consultancy" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
      </Card>
    </div>
  </section>
);
export default Services;

const Card = (props: { icon: JSX.Element; title: string; children: any; href: Url }) => (
  <div className="card relative">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="target w-full h-full flex flex-col items-start justify-start p-8 gap-7 bg-base-200 border-2 border-base-300 rounded-2xl in-view">
      <h4 className="gap-3 flex flex-row justify-center items-center text-neutral">{props.icon} {props.title}</h4>
      <small>{props.children}</small>
      <HashLink href={props.href} className="flex flex-row items-center justify-center mt-auto gap-1.5">
        <b>Read more</b>
        <IoIosArrowForward />
      </HashLink>
    </div>
  </div>
);