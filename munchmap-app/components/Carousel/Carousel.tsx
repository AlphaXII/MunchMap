import { Carousel, CarouselSlide } from "@mantine/carousel";
import { rem } from "@mantine/core";
import classes from "./Carousel.module.css";
import { MiniCard } from "@/components/Cards/MiniCard";
import { dataInterface } from "../resource/interfaces";

export function CardsCarousel({data}: {data: dataInterface[]}) {
  const slides = data.map((item) => (
    <CarouselSlide key={item.storeName}>
      <MiniCard restaurantData={item}/>
    </CarouselSlide>
  ))
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
      {slides}
    </Carousel>
  );
}
