import Image from "next/image";
import styles from "./page.module.css";
import { BigCard } from "@/components/Cards/BigCard";
import { Container, Divider, Space,Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container className={styles.container}>
        <Title className={styles.title}>Recommendation</Title>
        <BigCard />
        <Space h="md"/>
        <Divider size="xl"/>
      </Container>
    </>
  );
}
