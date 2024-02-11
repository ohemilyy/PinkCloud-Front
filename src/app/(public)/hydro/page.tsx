'use client';

import './styles.css';
import HashLink from '@/components/HashLink';
import { FaCloud, FaShoppingCart } from "react-icons/fa";
import Console from '@/components/Console/component';
import { Url } from "next/dist/shared/lib/router/router";
import { MdBrowserUpdated } from "react-icons/md";
import { InView } from "react-intersection-observer";
import { FaBoltLightning, FaDiscord, FaFileCode } from 'react-icons/fa6';
import { CgPerformance } from "react-icons/cg";
import { SlSupport } from "react-icons/sl";

export default function Hydro() {
  return (
    <section id="hydro" className="flex flex-col px-6 pt-44 pb-32 items-center gap-32">
      <div className="flex flex-col items-center gap-8">
        <span className="w-fit text-center max-w-[700px]">
          <h1 className="text-rainbow text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
            Hydro Anticheat
          </h1>
          <h3>
            The most reliable and trustworthy anti-cheat solution for safeguarding your server's integrity.
          </h3>
        </span>

        <span className="inline-flex justify-between gap-32">
          <span className="hero-p inline-flex flex-col justify-center items-start">
            <strong className="whitespace-nowrap">Try us now!</strong>

            <div className="flex justify-center items-center gap-6 mt-4">
              <Arrow />

              <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5">
                <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
                  <FaDiscord className="mt-0.5 h-5 w-5"/>
                  <h5>Want a demo?</h5>
                </div>
              </HashLink>
            </div>
          </span>

          <Console className="m-0">
            <div className="col-xxl-10 offset-xxl-1 stats-box">
              <div className="text-pink-gradient stats">
                <h1 className="text-pink-gradient stats">
                    Our Statistics
                </h1>
              </div>
              <p>
                Total Statistics, updated every 5 hours
              </p>
            </div>

            {/*<Image width={718} height={321} className="m-0" src="/img/hydro.png" alt={"Sparky"}/>*/}
          </Console>
        </span>
      </div>
        
      <div className="flex flex-col items-center gap-8 w-full max-w-[1410px]">
        <span className="w-fit text-center max-w-[700px]">
          <h1 className="text-pink-gradient text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
            Why Choose Hydro?
          </h1>
          <p>
            Discover Hydro, designed by server enthusiasts, catering exclusively to the Minecraft server owner community. With an acute understanding of the challenges confronting server administrators in the realm of anti-cheat solutions, we have engineered Hydro to have versatility, lightweight performance, and scalability, ensuring cheat detection protection for your network.
          </p>
        </span>

        <div className="grid auto-rows-fr gap-2 cards w-full mx-auto">
          <Card icon={<FaCloud />} title="Cloud Technology" href={""}>
            Our exclusive cloud-based technology is designed to synchronize, store, and analyze data, enhancing your overall user experience.
          </Card>
          <Card icon={<FaBoltLightning />} title="Efficiency" href={""}>
            Grant your moderators room to breathe. With confidence, we identify and expel cheaters from your network.
          </Card>
          <Card icon={<CgPerformance />} title="Performance" href={""}>
            Designed for peak performance and surpassing competitors, our Anti-Cheat solution operates with minimal resource consumption.
          </Card>
          <Card icon={<FaFileCode />} title="Configurability" href={""}>
            Exceptionally customizable, providing a sense of familiarity. Seamlessly tailor our detections to align with your server's requirements.
          </Card>
          <Card icon={<SlSupport />} title="Quick Support" href={""}>
            Our dedicated staff team is poised to swiftly address any inquiries and resolve production issues within minutes, ensuring seamless operation for your business.
          </Card>
          <Card icon={<MdBrowserUpdated />} title="Constant Updates" href={""}>
            No need to endure lengthy waits for bug fixes and feature implementations. Experience daily updates with our rapid push system, ensuring your platform remains cutting-edge and responsive.
          </Card>
        </div>
      </div>

      <div className="container-fluid py-4 py-xl-5">
        <div className='col-md-8 col-xl-6 col-xxl-5 text-center mx-auto mb-5'>
          <h2 className="text-pink-gradient text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
            Purchase
          </h2>
          <p>
            Buy once and receive <strong className='text-pink-gradient'>lifetime</strong> updates forever
          </p>
        </div>

        <div className='col-xxl-8 offset-xxl-2 smd'>
          <div className="w-full h-full flex flex-col items-start justify-start gap-7 p-8 bg-base-200 border-2 border-base-300 rounded-2xl transition-transform transform hover:scale-105 hover shadow-md target in-view">
            <h4 className="pt-5">Lifetime License</h4>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <ul className="pt-5 list-disc list-inside">
                <li>Cloud based features</li>
                <li>Hider System</li>
                <li>AI and Machine Learning checks</li>
              </ul>

              <ul className="pt-5 list-disc list-inside">
                <li>Advanced ghost client checks</li>
                <li>Advanced movement checks</li>
                <li>Advanced combat checks</li>
              </ul>

              <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5">
                <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
                  <FaShoppingCart className="mt-0.5 h-5 w-5"/>
                  <h5>Purchase a License</h5>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = (props: { icon: JSX.Element; title: string; children: any; href: Url }) => (
  <div className="relative card">
    <InView className="absolute top-0 left-0 h-full w-full" as="div" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1].classList.toggle('in-view', inView)}
    ></InView>

    <div className="w-full h-full flex flex-col items-start justify-start gap-7 p-8 bg-base-200 border-2 border-base-300 rounded-2xl transition-transform transform hover:scale-105 hover shadow-md target in-view">
      <h4 className="gap-3 flex flex-row justify-center items-center text-neutral">{props.icon} {props.title}</h4>
      <small>{props.children}</small>
    </div>
  </div>
);

const Arrow = ({ className }: { className?: string }) => (
  <div className={`flex min-w-fit w-fit ${className}`}>
    <svg className="mx-[-10.75px] my-[-27.41665px]" width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);