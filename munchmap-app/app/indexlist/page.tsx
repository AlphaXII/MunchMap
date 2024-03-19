import styles from "./page.module.css";

import { BigCard } from "@/components/Cards/BigCard";
import Search from "@/components/Search/Search";
import { Container, Divider, Space, Title } from "@mantine/core";

export default function Page() {
  return (
    <>
      <Container className={styles.container}>
        <Title className={styles.title} pt={20}>
          Philadelphia Restuarant Index
        </Title>
        <Search placeholder="Search"/>
      </Container>
    </>
  );
}
