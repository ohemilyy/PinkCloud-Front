'use client';
import { FaCloud, FaDiscord, FaGithub } from "react-icons/fa6";
import { InView } from "react-intersection-observer";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Who = () => (
  <section id="who" className="relative flex flex-col items-center justify-center gap-12 py-10 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="flex flex-col items-center justify-center text-center w-full h-fit gap-4 out-of-view in-view">
      <span className="flex flex-row items-center justify-center font-bold gap-2 mt-3"><h2 className="text-rainbow">Who</h2><h2>are we?</h2></span>
    
      <h5 className="flex flex-col items-center justify-center gap-1.5 max-w-[675px]">
        <span className="flex items-center justify-center gap-1.5 leading-none mb-[-5px]">
          <span className="flex items-center justify-center text-primary p-0">
            Pink
            <span className="flex items-center justify-center">
              Cl<FaCloud className="mx-0.5 mt-0.5 cloud-filter"/>ud
            </span>
          </span>
          <span className="whitespace-nowrap">is a US-based...</span>
        </span>
        <span>development company dedicated to delivering innovative and tailored solutions for a variety of digital needs. Specializing in web development, software application development, and a range of other development services, we take pride in our commitment to excellence and client satisfaction.</span>
      </h5>
    </div>

    <div className="flex flex-row flex-wrap justify-center gap-7">
      <Card img="/img/emily.png"
            name="CEO - Emily G."
            discord="ohemilyy"
            github="egirldevs"
            email="emily@pinkcloud.studio">
        Hey there, I'm Emily! A 22-year-old transfeminine individual with a deep passion for Astrophysics and Computer Science (C.S.).<br />
        Over the past seven years, I've immersed myself in the world of C.S., gaining a comprehensive understanding of Cybersecurity and Cyber Threat Intelligence. My journey includes both formal education and practical experience, and I'm currently majoring in Astrophysics and C.S.<br />
        As a neurodivergent individual, I bring a unique perspective to the tech realm, advocating for diversity and inclusivity. Eager to stay at the forefront of technology, I'm working towards Red Hat Enterprise Linux certification, aiming to make meaningful contributions to the dynamic field of C.S.
      </Card>

      <Card img="/img/elaina.png"
            name="COO - Elaina L."
            discord="nekolynn"
            github="oestradiol"
            email="elaina@pinkcloud.studio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Card>
      
      <Card img="/img/nathan.png"
            name="CHRO - Nathan W."
            discord="nopox"
            github="Nopock"
            email="nathan@pinkcloud.studio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Card>
    </div>
  </section>
);

const Card = (props: { img: string; name: string; discord: string; github: string; email: string; children: any; }) => (
  <div className="relative bg-base-200 border-2 border-base-300 py-6 px-8">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="flex flex-col max-w-[367px] gap-2 items-start justify-center target in-view">
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

        <div className="w-full h-full flex flex-col justify-start items-start">
          <h3>{props.name}</h3>
          <small className="flex items-center justify-center gap-1.5"><FaDiscord className="mt-1 h-4 w-4"/>{props.discord}</small>
          <Link href={`https://github.com/` + props.github}><small className="flex items-center justify-center gap-1.5"><FaGithub className="mt-1 h-4 w-4"/>{props.github}</small></Link>
          <Link href={`mailto:` + props.email}><small className="flex items-center justify-center gap-1.5"><IoIosMail className="mt-1 h-4 w-4"/>{props.email}</small></Link>
        </div>
      </div>
      <small className="relative mt-6 positioned-divisor">{props.children}</small>
    </div>
  </div>
);

export default Who;