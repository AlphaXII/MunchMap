import styles from "./page.module.css";

import { BigCard } from "@/components/Cards/BigCard";
import { Container, Divider, Space, Title } from "@mantine/core";
import { CardsCarousel } from "../components/Carousel/Carousel";
import { dummyDatabase } from "../components/resource/dummyDatabase";

export default function Home() {
  return (
    <>
      <Container className={styles.container}>
        <Title className={styles.title} pt={20}>
          Recommendation
        </Title>
        <BigCard />
        <Space h="md" />
        <Divider size="xl" />
        <Space h="md" />
        <CardsCarousel data={dummyDatabase}/>
      </Container>
    </>
  );
}
