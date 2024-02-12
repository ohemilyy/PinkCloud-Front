'use client';
import Image from "next/image";
import { Directors } from "./Directors";
import { Regulars } from "./Regulars";
import { Management } from "./Management";
import {  FaDiscord, FaGithub } from "react-icons/fa6";
import { InView } from "react-intersection-observer";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export const TeamCard = (props: { img: string; name: string; discord: string; github: string; email: string; children: any; }) => (
  <div className="relative max-w-[435px]">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

    <div className="w-full h-full flex flex-col gap-2 items-start justify-start bg-base-200 border-2 border-base-300 p-8 target in-view">
      <div className="w-full flex items-start justify-start text-start gap-4">
        <div className="avatar">
          <div className="w-28 rounded">
            <Image
              width={160}
              height={160}
              alt={props.name}
              src={props.img} />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-start overflow-hidden">
          <h3 className="whitespace-nowrap">{props.name}</h3>
          <small className="inline-flex items-end gap-1.5"><FaDiscord className="h-4 w-4"/> {props.discord}</small>
          <Link className="mt-1" href={`https://github.com/` + props.github}><small className="inline-flex items-end gap-1.5"><FaGithub className="h-4 w-4"/> {props.github}</small></Link>
          <Link href={`mailto:` + props.email}><small className="inline-flex items-end gap-1.5"><IoIosMail className="h-4 w-4"/> {props.email}</small></Link>
        </div>
      </div>
      <small className="relative mt-6 positioned-divisor">{props.children}</small>
    </div>
  </div>
);

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full gap-y-8 pb-16">
            <h1 className="font-bold font-header text-4xl md:text-5xl text-pink-gradient pt-16 pb-8">Executives</h1>
            <section className="flex flex-col">
                <Directors />
            </section>
            <h1 className="font-bold font-header text-4xl md:text-5xl text-pink-gradient pt-16 pb-8">Management</h1>
            <section className="flex flex-col">
                <Management />
            </section>
        </main>
    );
};

export default Page;