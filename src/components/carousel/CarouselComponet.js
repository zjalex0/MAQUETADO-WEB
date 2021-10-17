import React from "react";
import { CardComponent } from "../card/CardComponent";
import Carousel from "react-grid-carousel";
import JsonCaousel from "../../data/Caousel.json";

export const CarouselComponet = () => {
  return (
    <>
      <Carousel
        cols={3}
        rows={1}
        gap={3}
        loop
        mobileBreakpoint={670}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3,
          },
          {
            breakpoint: 990,
            cols: 2,
          },
        ]}
      >
        {JsonCaousel.map((item) => (
          <Carousel.Item key={`item${item.id}`}>
            <CardComponent key={item.id} {...item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
