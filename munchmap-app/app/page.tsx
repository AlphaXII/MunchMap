import Image from "next/image";
import styles from "./page.module.css";
import { BigCard } from "@/components/Cards/BigCard";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container className={styles.container}>
        <BigCard />
      </Container>
    </>
  );
}
