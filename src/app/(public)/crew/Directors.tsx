import { TeamCard } from "./page";


export const Directors = () => {
    return (
  <section id="who" className="relative flex flex-col items-center justify-center py-10 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="flex flex-row flex-wrap justify-center gap-7">
    <TeamCard img="/img/elaina.png"
            name="COO - Elaina L."
            discord="nekolynn"
            github="oestradiol"
            email="elaina@pinkcloud.studio">
        Hello everyone! My name is Elaina. I am a 21-year-old girl.<br />
        I love logics, math, sciences overall, and programming, hence why I chose Computer Science (C.S.) as a major. I also really like messing with a variety of interesting stuff, and I do programming for a living.<br />
        To be more specific, I am a Full Stack Engineer, specialized in C# and TypeScript, but also experienced in a diversity of other languages, such as C/C++, Kotlin, Python, Dart, etc.<br />
        I have been programming since I was 11, but recently (last 5~6 years) I have been more actively doing so. <br />
        Focused on collaborating with my team and clients to deliver top-notch software written in clean and efficient code. Passionate about building successful products and stunning websites.
      </TeamCard>

      <TeamCard img="/img/emilyg.png"
            name="CEO - Emily G."
            discord="ohemilyy"
            github="ohemilyy"
            email="emily@pinkcloud.studio">
        Hey there, I'm Emily! A 22-year-old transfeminine individual with a deep passion for Astrophysics and Computer Science (C.S.).<br />
        Over the past seven years, I've immersed myself in the world of C.S., gaining a comprehensive understanding of Cybersecurity and Cyber Threat Intelligence. My journey includes both formal education and practical experience, and I'm currently majoring in Astrophysics and C.S.<br />
        As a neurodivergent individual, I bring a unique perspective to the tech realm, advocating for diversity and inclusivity. Eager to stay at the forefront of technology, I'm working towards Red Hat Enterprise Linux certification, aiming to make meaningful contributions to the dynamic field of C.S.
      </TeamCard>
      
      <TeamCard img="/img/emilyb.png"
            name="CTO - Emily B."
            discord="logemi"
            github="atomoxetine"
            email="emilyb@pinkcloud.studio">
        Hi! My name is Emily and I'm a 19-year-old transgender girl from Brazil.<br />
        I enjoy problem solving and I used to participate in Competitive Programming competitions a few years back, in which I was awarded a few prizes.<br />
        Because of that, I naturally am very proficient at arriving at good solutions for intricate problems. <br />
        Currently, I am focused on expanding my tech stack and acquiring experience in many different fields.
      </TeamCard>
    </div>
  </section>
    );
};