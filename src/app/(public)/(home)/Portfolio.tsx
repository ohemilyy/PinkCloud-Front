import HashLink from "@/components/HashLink";
import Image from "next/image"

const Portfolio = () => (
  <section id="portfolio" className="flex flex-col items-center justify-center gap-7 text-center">
    <span className="flex flex-row items-center justify-center font-bold gap-2 mt-3"><h2>Previous</h2><h2 className="text-rainbow">Works</h2><h2>and</h2><h2 className="text-rainbow">References</h2></span>

    <Carousel
      items={[
        <Image key={0} alt="placeholder" src="/img/placeholder.png" width={800} height={600} className="w-full" />,
        <Image key={1} alt="placeholder" src="/img/placeholder.png" width={800} height={600} className="w-full" />,
        <Image key={2} alt="placeholder" src="/img/placeholder.png" width={800} height={600} className="w-full" />,
        <Image key={3} alt="placeholder" src="/img/placeholder.png" width={800} height={600} className="w-full" />,
      ]}
    />
  </section>
);
export default Portfolio;

const Carousel = (props: { uId?: string; items: JSX.Element[]; }) => {
  const uId = props.uId ?? "carousel";
  return <>
    <div className="hidden sm:block w-full h-full md:px-10 lg:px-20 xl:px-40">
      <div className="relative flex items-center justify-center sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] max-w-[1600px] h-fit m-auto overflow-hidden rounded-2xl">
          <div className="carousel w-full h-fit">
            {props.items.map((o, i) => {
              const id = `${uId}${i}`;
              return (
                <div key={`o${id}`} id={id} className="carousel-item relative flex flex-col w-full">
                  {o}
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <HashLink key={`o${id}-`} href={`/#${uId}${(props.items.length + i - 1) % props.items.length}`} className="btn btn-circle">❮</HashLink> 
                    <HashLink key={`o${id}+`} href={`/#${uId}${(props.items.length + i + 1) % props.items.length}`} className="btn btn-circle">❯</HashLink>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute flex justify-center py-2 gap-2 bottom-0">
            {props.items.map((o, i) => {
              const id = `${uId}${i}`;
              return <HashLink key={`b${id}`} href={`/#${id}`} className="btn h-8 px-4 min-h-8 px-4">{i+1}</HashLink>;
            })}
          </div>
      </div>
    </div>
  </>;
}
