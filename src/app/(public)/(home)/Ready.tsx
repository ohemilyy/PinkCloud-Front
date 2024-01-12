'use client';
import HashLink from "@/components/HashLink";
import { FaDiscord } from "react-icons/fa6";
import { InView } from "react-intersection-observer";

const Ready = () => (
  <section id="ready" className="relative py-32 min-h-fit">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={true} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="flex flex-col items-center justify-center text-center w-full h-fit gap-2 out-of-view in-view">
      <div className="cloud" />
      <span className="flex flex-row flex-wrap items-center justify-center gap-2 mt-3"><h2>Ready to fly on our</h2><h2 className="text-rainbow">PinkCloud?</h2></span>
      <p>Contact us on Discord, and let's see what wonders wait for you.</p>
      <HashLink href={process.env.discordInvite ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5 mt-7">
        <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
          <FaDiscord className="mt-0.5 h-5 w-5"/>
          <span>Discord</span>
        </div>
      </HashLink>
    </div>
  </section>
);

export default Ready;