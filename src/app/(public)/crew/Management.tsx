import BioCard from "@/components/BioCard/component";

export const Management = () => {
  return (
    <div className="relative flex flex-row flex-wrap justify-center gap-7">
      <BioCard img="/img/blair.png"
               name="PM- Blair R."
               discord="imfanbases"
               github="imfanbases"
               email="blair@pinkcloud.studio">
        Hello everyone! My name is Blair. I am a 18-year-old
      </BioCard>

      <BioCard img="/img/aurora.png"
               name="PM- Aurora G."
               discord="alphiealph"
               github=""
               email="aurora@pinkcloud.studio">
        Hello there! I'm Aurora :D Here at PinkCloud I manage () and ().
        Im mostly fascinated by hardware but I have a soft spot for Linux systems (both Servers and Desktops) and system
        administration. I'm currently studying Cyber Security and aim to become a fully fledged SysAdmin!
        I will mostly be active in EU timezones. (Feel free to reach out and ask any questions you may have, I will try
        my best to reply in a timely manner)
      </BioCard>
    </div>
  );
};