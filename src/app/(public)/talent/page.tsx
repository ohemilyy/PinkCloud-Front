'use client'
import React from "react";
import HashLink from "@/components/HashLink";
import { FaDiscord } from "react-icons/fa6";
import './styles.css';

export default function Careers() {
    return (
      <section id="careers" className="flex flex-col items-center justify-center gap-y-6 w-full h-full p-16 pt-32 relative">
        <div className="absolute top-0 left-0 ml-4 mt-4">
        </div>
        <div className="flex flex-col gap-y-2 max-w-[1180px]">
          <h1 className="text-rainbow text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mx-auto text-center mb-4">
            Jobs
          </h1>
          <p className="Subtitle text-center">
            Want to be a part of PinkCloud Studios? View our current openings
          </p>
          <div className="flex flex-col md:gap-y-4 mt-5">
            <div className="outer-container">
              <h3 className="Heading mt-12 mb-6">Our <span className="text-pink-gradient">Team</span></h3>
              <p className="Paragraph1">
                The PinkCloud Studio team has been pooling our expertise together for over a year, continuously striving to enhance every aspect of our operations. Our zeal lies in crafting solutions and bringing digital ideas to life. We believe that anyone with a strong motivation to be part of a cutting-edge web development company and a readiness to devote their skills to serving our clientele will find a welcoming environment in our team. All work is conducted remotely, with remuneration varying according to the role. As a member of our diligent crew of system administrators and web developers, you will get a chance to leave your distinct mark on our projects.
              </p>
              <h3 className="Heading mt-12 mb-6">General <span className="text-pink-gradient">Expectations</span></h3>
              <p className="mb-2 mt-1 Paragraph1">
                All applicants should meet the following requirements:
              </p>
              <ul className="mb-6 List list-disc list-inside">
                <li className="BulletPoint">Be able to speak and write English at a C1 fluency level</li>
                <li className="BulletPoint">Have a working microphone and ability to speak in call</li>
                <li className="BulletPoint">Be able to work during or adapt to US/UK working hours</li>
              </ul>
              <p className="mb-2 Paragraph1">
                All applicants should meet one or more of the follwing:
              </p>
              <ul className="List list-disc list-inside">
                <li className="BulletPoint">Possess strong knowledge of web development languages such as HTML, CSS,  JavaScript, and familiarity with frameworks like React or Angular</li>
                <li className="BulletPoint">Have experience with backend development using languages like Python, Java, or Kotlin, Rust, C++, and understanding of server management and deployment for complex applications</li>
                <li className="BulletPoint">Understand and execute integration of databases (like SQL, MongoDB)</li>
                <li className="BulletPoint">Able to implement and test software and systems to ensure strong functionality and optimization</li>
                <li className="BulletPoint">Experience with version control tools such as Git and understanding of Agile development methodologies</li>
              </ul>
              <h3 className="Heading mt-12 mb-8">Current <span className="text-pink-gradient">Offerings</span></h3>
              <Jobs
                job="Game Developer"
                className="mb-2"
                description={
                  <>
                    <li><h6>3+ years of experience with Java</h6></li>
                    <li><h6>2+ years of experience with Bukkit/Spigot API</h6></li>
                    <li><h6>Basic to advanced understanding of NMS and packets</h6></li>
                    <li><h6>Basic to advanced understanding of backend operations</h6></li>
                    <li><h6>Available for 20-40 hours per week</h6></li>
                  </>
                }
              />
              <Jobs
                job="Backend Developer"
                description={
                  <>
                    <li><h6>3+ years of experience with system administration</h6></li>
                    <li><h6>3+ years of experience developing large networks</h6></li>
                    <li><h6>Advanced understanding of general DevOps</h6></li>
                    <li><h6>Advanced understanding of dynamic server</h6></li>
                  </>
                }
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full h-fit gap-2 mt-4">
              <div className="cloud" />
              <span className="flex flex-row flex-wrap items-center justify-center gap-2 mt-3"><h2>Ready to join the team at</h2><h2 className="text-rainbow">PinkCloud?</h2></span>
              <p>Contact us on Discord, and let's see where destiny takes you.</p>
              <HashLink href={process.env.discordInvite ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5 mt-7">
                <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
                  <FaDiscord className="mt-0.5 h-5 w-5"/>
                  <span>Discord</span>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    );
}

const Jobs = (props: { job: string; description: React.ReactNode; className?: string }) => (
  <div className={`relative w-full ${props.className || ''}`}>
    <div className="collapse collapse-arrow bg-base-300 bg-opacity-65 rounded-lg in-view text-left">
      <input type="checkbox"/>
      <h5 className="collapse-title flex"><b className="my-auto">{props.job}</b></h5>
      <div className="collapse-content">
        <ul className="flex flex-col list-disc ml-4 gap-1">{props.description}</ul>
      </div>
    </div>
  </div>
);