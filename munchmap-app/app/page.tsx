import Image from "next/image";
import styles from "./page.module.css";
import { BigCard } from "@/components/Cards/BigCard";
import { Container, Divider, Space, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { MiniCard } from "@/components/Cards/MiniCard";

export default function Home() {
  return (
    <>
      <Container className={styles.container}>
        <Title className={styles.title}>Recommendation</Title>
        <BigCard />
        <Space h="md" />
        <Divider size="xl" />
        <Space h="md" />
        {/* <Carousel
          withIndicators
          height={200}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
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
        </Carousel> */}
      </Container>
    </>
  );
}
