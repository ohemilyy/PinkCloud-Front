'use client'; 
import React from "react";
import Image from "next/image";
import HashLink from "@/components/HashLink";
import { InView } from "react-intersection-observer";

const Portfolio = () => {
  const categories = [
    { title: "Infrastructure Management", images: ["/img/refinedev.png", "/img/scala.png", "/img/esta.png", "/img/placeholder.png"] },
    { title: "Software Development", images: ["/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png"] },
    { title: "Website Development", images: ["/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png"] },
  ];

  const items = categories.map((category, index) => (
    <Category key={index} title={category.title} images={category.images} />
  ));

  return (
    <section id="portfolio" className="flex flex-col items-center justify-center gap-7 text-center">
      <h2 className="font-bold mt-3">
        Previous <span className="text-rainbow">Works</span> and <span className="text-rainbow">References</span>
      </h2>

      <div className="hidden sm:flex relative items-center justify-center sm:w-full max-w-[900px] h-fit mx-auto overflow-hidden rounded-2xl">
        <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={true} fallbackInView={true}
          onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

        <div className="carousel w-full h-fit out-of-view">
          {items.map((item, index) =>
            <CarouselItem key={index} carouselId={"main"} index={index} n={items.length} isArrows={true} content={item} />
          )}
        </div>
      </div>
    </section>
  );
};

const Category = (props: { title: string; images: string[] }) => {
  const { title, images } = props;

  return (
    <>
      <h3 className="text-neutral mb-8"><b>{title}</b></h3>

      <Carousel
        uId={title.toLowerCase().split(' ').join('-')}
        isArrows={false}
        items={images.map((src, index) => {
          const srcSplit = src.split('/');
          const splittedName = srcSplit[srcSplit.length - 1].split('.');
          let fileName = splittedName.splice(splittedName.length - 1, 1).join('.');
          fileName = fileName[0].toUpperCase() + fileName.slice(1);
          return <Image key={index} alt={fileName} src={src} width={800} height={600} className="w-full" />;
        })}
      />
    </>
  );
};

const Carousel = (props: { uId?: string; items: JSX.Element[]; isArrows: boolean }) => {
  const uId = props.uId ?? "carousel";
  return (
    <div className="w-full h-full">
      <div className="relative flex items-center justify-center sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] max-w-[900px] h-full mx-auto overflow-hidden">
        <div className="carousel w-full h-fit flex items-center">
          {props.items.map((item, index) =>
            <CarouselItem key={index} carouselId={uId} index={index} n={props.items.length} isArrows={props.isArrows} content={item} />
          )}
        </div>

        {
          !props.isArrows ?
            <div className="absolute flex justify-center gap-2 bottom-0">
              {props.items.map((_, index) => {
                const id = `${uId}${index}`;
                return <HashLink key={index} href={`/#${id}`} className="btn h-8 px-4 min-h-8 px-4">{index + 1}</HashLink>
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
    <div id={id} className="carousel-item relative flex flex-col w-full mb-12">
      {content}
      {
        isArrows ? 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <HashLink href={`/#${carouselId}${(n + index - 1) % n}`} className="btn btn-circle">❮</HashLink> 
            <HashLink href={`/#${carouselId}${(n + index + 1) % n}`} className="btn btn-circle">❯</HashLink>
          </div> : <></>
      }
    </div>
  )
};

export default Portfolio;