"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContributerCard from "./contributerCard";

const ContributerCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const cardlist = [
    {
      id: "@devmoatassen1",

      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen2",

      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen3",

      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen4",
      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen5",

      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen6",

      contributions: 20,
      img: "/1.webp",
    },
    {
      id: "@devmoatassen7",

      contributions: 20,
      img: "/1.webp",
    },
  ];
  return (
    <div className="h-full py-10">
      <Carousel
        // draggable={false}
        responsive={responsive}
        // showDots={true}
        // infinite={true}
        partialVisible={true}
        ssr={true}
        itemClass="px-5"
      >
        {cardlist.map((item, index) => (
          <ContributerCard
            key={index}
            id={item.id}
            contributions={item.contributions}
            img={item.img}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ContributerCarousel;
