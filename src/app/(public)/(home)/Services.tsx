'use client';
import { Url } from "next/dist/shared/lib/router/router";
import { FaInfinity, FaTerminal, FaDiscord } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { InView } from "react-intersection-observer";
import { SiNextdotjs } from "react-icons/si";
import { LuFileTerminal } from "react-icons/lu";
import HashLink from "@/components/HashLink";

const Services = () => (
  <section id="services" className="relative flex flex-col items-center justify-center text-center gap-2 py-10 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="w-full flex flex-col items-center gap-3 pb-10 px-4">
      <span className="flex flex-row items-center justify-center font-bold gap-2">
        <h2>Our</h2>
        <h2 className="text-rainbow">Services</h2>
      </span>
      <h5>Here's a summary of what we provide you with.</h5>
      <HashLink href="/services" className="see-link font-bold gap-1.5 mt-auto">
        <h6>( All Services )</h6>
      </HashLink>
    </div>
    
    
    <div className="grid auto-rows-fr gap-1 cards w-full max-w-screen-lg mx-auto">
      <Card icon={<FaInfinity />} title="Freelances" href={""}>
      PinkCloud Studio offers a diverse range of freelance services, specializing in web development, software application development, and various other types of development. Our team is dedicated to providing innovative solutions tailored to meet the unique needs of each client.
      </Card>
      <Card icon={<DiDocker />} title="Application Development" href={""}>
      PinkCloud Studio specializes in crafting cutting-edge applications tailored to meet your specific needs. Whether you're looking for mobile apps, desktop applications, or custom software solutions, our team is committed to delivering excellence.
      </Card>
      <Card icon={<SiNextdotjs />} title="Full-Stack Web Development" href={""}>
      PinkCloud Studio excels in both frontend and backend web development, ensuring a seamless and powerful online presence for your projects. Our team leverages the latest technologies, including Next.js, to deliver modern and efficient web solutions.      </Card>
      <Card icon={<FaDiscord />} title="Discord Development" href={""}>
      PinkCloud Studio specializes in Discord development, creating customized solutions to enhance your server's functionality and user experience. Whether it's bots, integrations, or other Discord-related projects, our team is dedicated to bringing your ideas to life.      </Card>
      <Card icon={<FaTerminal />} title="Infrastructure Management" href={""}>
      PinkCloud Studio excels in comprehensive infrastructure management, including expert system administration services. We specialize in optimizing the performance, security, and scalability of your systems.
      </Card>
      <Card icon={<LuFileTerminal />} title="Infrastructure Development & Consultancy" href={""}>
      PinkCloud Studio excels in infrastructure development and consultancy, providing robust solutions to meet your technical needs. From setting up scalable server architectures to offering expert advice, we ensure a solid foundation for your projects.
      </Card>
    </div>
  </section>
);

const Card = (props: { icon: JSX.Element; title: string; children: any; href: Url }) => (
  <div className="card relative p-8 bg-base-200 border-2 border-base-300 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-md">
    <InView className="absolute top-0 left-0 h-full w-full" as="div" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1].classList.toggle('in-view', inView)}
    ></InView>
    
    <div className="target w-full h-full flex flex-col items-start justify-start gap-7 in-view">
      <h4 className="gap-3 flex flex-row justify-center items-center text-neutral">{props.icon} {props.title}</h4>
      <small>{props.children}</small>
    </div>
  </div>
);

export default Services;