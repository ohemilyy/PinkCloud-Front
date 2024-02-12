'use client';

import './styles.css';
import {InView} from "react-intersection-observer";
import Image from "next/image";
import {FaDiscord, FaGithub} from "react-icons/fa6";
import Link from "next/link";
import {IoIosMail} from "react-icons/io";

const BioCard = (props: { img: string; name: string; discord: string; github?: string; email: string; children: any; }) => (
  <div className="relative max-w-[435px]">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
            onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

    <div className="w-full h-full flex flex-col gap-2 items-start justify-start bg-base-200 border-2 border-base-300 p-8 out-of-view in-view">
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
          {!!props.github ?
            <Link className="mt-1" href={`https://github.com/` + props.github}><small className="inline-flex items-end gap-1.5">
              <FaGithub className="h-4 w-4"/> {props.github}</small>
            </Link> : <></>
          }
          <Link href={`mailto:` + props.email}><small className="inline-flex items-end gap-1.5"><IoIosMail className="h-4 w-4"/> {props.email}</small></Link>
        </div>
      </div>
      <small className="relative mt-6 positioned-divisor">{props.children}</small>
    </div>
  </div>
);
export default BioCard