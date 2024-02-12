'use client';

import Image from "next/image";
import { InView } from "react-intersection-observer";
import HashLink from "@/components/HashLink";
import Link from "next/link";

const Portfolio = () => {
  const getImgFromSrc = (src: string) => {
    const srcSplit = src.split('/');
    const splittedName = srcSplit[srcSplit.length - 1].split('.');
    let fileName = splittedName.splice(splittedName.length - 1, 1).join('.');
    fileName = fileName[0].toUpperCase() + fileName.slice(1);
    return <Link href={"https://mccade.net"}>
      <Image alt={fileName} src={src} width={800} height={600} className="w-full rounded-lg" />
    </Link>;
  };

  const categories = [
    {
      title: "MCCade Games",
      items: [
        getImgFromSrc('/img/mccade-banner.png'),
        // <div className="w-full h-full">
        //   TEST
        // </div>
      ]
    },
  ];

  const items = categories.map((category, index) => (
    <Category key={index} title={category.title} items={category.items} />
  ));

  return (
    <section id="portfolio" className="hidden sm:flex flex-col items-center justify-center gap-7 text-center">
      <h2 className="font-bold mb-5">
        <span className="text-rainbow">Projects</span> and <span className="text-rainbow">References</span>
      </h2>

      <div className="flex relative items-center justify-center sm:w-full h-fit mx-auto rounded-2xl inner-carousel">
        <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={true} fallbackInView={true}
          onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

        <div className="carousel w-full h-fit out-of-view in-view">
          {items.map((item, index) =>
            <CarouselItem key={index} carouselId={"main"} index={index} n={items.length} isArrows={true} content={item} />
          )}
        </div>
      </div>
    </section>
  );
};

const Category = (props: { title: string; items: React.ReactNode[] }) => {
  const { title, items } = props;

  return (
    <>
      <h3 className="text-neutral mb-4"><b>{title}</b></h3>

      <Carousel
        uId={title.toLowerCase().split(' ').join('-')}
        isArrows={false}
        items={items.map((item, idx) =>
            <div key={idx} className="w-full h-full">{item}</div>
        )}
      />
    </>
  );
};

const Carousel = (props: { uId?: string; items: JSX.Element[]; isArrows: boolean }) => {
  const uId = props.uId ?? "carousel";
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] max-w-[900px] mx-auto">
        <div className="carousel w-full h-fit flex items-stretch">
          {props.items.map((item, index) =>
            <CarouselItem key={index} carouselId={uId} index={index} n={props.items.length} isArrows={props.isArrows} content={item} />
          )}
        </div>

        {
          !props.isArrows ?
            <div className="flex justify-center gap-2">
              {props.items.map((_, index) => {
                const id = `${uId}${index}`;
                return <HashLink key={index} href={`/#${id}`} className="btn h-8 min-h-8 py-5 flex content-center z-[1] my-[3px]">
                  <span>{index + 1}</span>
                </HashLink>
              })}
            </div> : <></>
        }
      </div>
    </div>
  );
};

const CarouselItem = (props: { carouselId: string; index: number; n: number; isArrows: boolean; content: JSX.Element }) => {
  const { carouselId, index, n, isArrows, content } = props;
  const id = `${carouselId}${index}`;
  return (
    <div id={id} className="carousel-item relative flex flex-col w-full">
      {content}
      {
        isArrows ? 
          <div className="flex justify-between left-5 right-5 w-full mt-[-48px] max-w-[1050px] mx-auto">
            <HashLink href={`/#${carouselId}${(n + index - 1) % n}`} className="btn btn-circle">❮</HashLink> 
            <HashLink href={`/#${carouselId}${(n + index + 1) % n}`} className="btn btn-circle">❯</HashLink>
          </div> : <></>
      }
    </div>
  )
};

export default Portfolio;