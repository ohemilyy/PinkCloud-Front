import { TeamCard } from "./page";

export const Management = () => {
    return (
  <section id="who" className="relative flex flex-col items-center justify-center gap-12 py-10 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="flex flex-row flex-wrap justify-center gap-7">
    <TeamCard img="/img/blair.png"
            name="PM- Blair R."
            discord="imfanbases"
            github="imfanbases"
            email="blair@pinkcloud.studio">
        Hello everyone! My name is Blair. I am a 18-year-old
      </TeamCard>
      <TeamCard img="/img/aurora.png"
            name="PM- Aurora G."
            discord="alphiealph"
            github=""
            email="aurora@pinkcloud.studio">
        Hello there! I'm Aurora :D Here at Pinkcloud I manage () and (). Im mostly fascinated by hardware but I have a soft spot for Linux systems (both Servers and Desktops) and system administration. I'm currently studying cybersecurity and aim to become a fully fledged sysadmin! I will mostly be active in EU timezones.
(Feel free to reach out and ask any questions you may have, I will try my best to reply in a timely manner)
      </TeamCard>
    </div>
  </section>
    );
};