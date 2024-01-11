import React from "react";
import Image from "next/image";
import HashLink from "@/components/HashLink";

const Portfolio = () => {
  const categories = [
    { title: "Infrastructure Management", images: ["/img/refinedev.png", "/img/scala.png", "/img/esta.png", "/img/placeholder.png"] },
    { title: "Software Development", images: ["/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png"] },
    { title: "Website Development", images: ["/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png", "/img/placeholder.png"] },
  ];

  return (
    <section id="portfolio" className="flex flex-col items-center justify-center gap-7 text-center">
      <span className="flex flex-row items-center justify-center font-bold gap-2 mt-3">
        <h2>Previous</h2><h2 className="text-rainbow">Works</h2><h2>and</h2><h2 className="text-rainbow">References</h2>
      </span>

      {categories.map((category, index) => (
        <Category key={index} title={category.title} images={category.images} />
      ))}
    </section>
  );
};

const Category = (props: { title: string; images: string[] }) => {
  const { title, images } = props;

  return (
    <>
      <h2 className="font-bold mt-3">
        <span className="text-rainbow">{title}</span>
      </h2>
      <Carousel items={images.map((src, index) => <Image key={index} alt="placeholder" src={src} width={800} height={600} className="w-full" />)} />
    </>
  );
};

const Carousel = (props: { items: JSX.Element[] }) => {
  return (
    <div className="hidden sm:block w-full h-full md:px-10 lg:px-20 xl:px-40">
      <div className="relative flex items-center justify-center sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] max-w-[1600px] h-fit m-auto overflow-hidden rounded-2xl">
        <div className="carousel w-full h-fit">
          {props.items.map((item, index) => (
            <CarouselItem key={index} id={`carouselItem${index}`} content={item} />
          ))}
        </div>

        <div className="absolute flex justify-center py-2 gap-2 bottom-0">
          {props.items.map((_, index) => (
            <HashLink key={`b${index}`} href={`/#carouselItem${index}`} className="btn h-8 px-4 min-h-8 px-4">{index + 1}</HashLink>
          ))}
        </div>
      </div>
    </div>
  );
};

const CarouselItem = (props: { id: string; content: JSX.Element }) => (
  <div id={props.id} className="carousel-item relative flex flex-col w-full">
    {props.content}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div>
);

export default Portfolio;
