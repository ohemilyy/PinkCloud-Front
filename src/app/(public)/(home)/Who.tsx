'use client';
import { FaCloud, FaDiscord, FaGithub } from "react-icons/fa6";
import { InView } from "react-intersection-observer";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Who = () => (
  <section id="who" className="relative flex flex-col items-center justify-center gap-12 py-10 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="flex flex-col items-center justify-center text-center w-full h-fit gap-4 out-of-view in-view">
      <h2 className="font-bold mt-3">
        <span className="text-rainbow">Who</span> are we?
      </h2>

      <h5 className="max-w-[675px]">
          <span className="inline-flex items-end text-primary">
            PinkCl<FaCloud className="mx-0.5 mb-0.5 cloud-filter"/>ud
          </span> is a US-based development company dedicated to delivering innovative and tailored solutions for a variety of digital needs.
          Specializing in web development, software application development, and a range of other development services, we take pride in our commitment to excellence and client satisfaction.
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
        Hello everyone! My name is Elaina. I am a 21-year-old girl.<br />
        I love logics, math, sciences overall, and programming, hence why I chose Computer Science (C.S.) as a major. I also really like messing with a variety of interesting stuff, and I do programming for a living.<br />
        To be more specific, I am a Full Stack Engineer, specialized in C# and TypeScript, but also experienced in a diversity of other languages, such as C/C++, Kotlin, Python, Dart, etc.<br />
        I have been programming since I was 11, but recently (last 5~6 years) I have been more actively doing so. <br />
        Focused on collaborating with my team and clients to deliver top-notch software written in clean and efficient code. Passionate about building successful products and stunning websites.
      </Card>
      
      <Card img="/img/nathan.png"
            name="CHRO - Nathan W."
            discord="nopox"
            github="Nopock"
            email="nathan@pinkcloud.studio">
        Hey folks! I am Nathan, a 16-year-old Software Engineer and Infrastructure Manager hailing from California. My passion lies in the continuous pursuit of knowledge, particularly in exploring new frameworks and discovering innovative software solutions.<br />
        Over the past two years, I have honed my programming skills in Java and Kotlin, with a primary emphasis on backend development.<br />
        Specializing in frameworks such as Ktor and Spring Boot, I am dedicated to assisting clients in constructing robust backends and optimizing infrastructure. My commitment to excellence and enthusiasm for staying at the forefront of technological advancements drive me to contribute effectively to any project I undertake.
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