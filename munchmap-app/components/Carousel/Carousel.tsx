import { Carousel, CarouselSlide } from "@mantine/carousel";
import { rem } from "@mantine/core";
import classes from "./Carousel.module.css";
import { MiniCard } from "@/components/Cards/MiniCard";


export function CardsCarousel() {

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "25%" }}
      slideGap={{ base: rem(4), sm: "xl" }}
      align="start"
      loop
      slidesToScroll={1}
      height="100%"
      classNames={classes}
    >
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
      <CarouselSlide>
        <MiniCard />
      </CarouselSlide>
    </Carousel>
  );
}
