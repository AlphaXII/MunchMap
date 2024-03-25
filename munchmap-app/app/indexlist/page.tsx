import styles from "./page.module.css";

import { BigCard } from "@/components/Cards/BigCard";
import Search from "@/components/Search/Search";
import { Container, Divider, Grid, Space, Title } from "@mantine/core";
// import { dummyDatabase } from "@/components/resource/dummyDatabase";
// import IndexResult from "@/components/IndexResult/IndexResult";

export default function Page() {
  return (
    <>
      <Container className={styles.container}>
        <Title className={styles.title} pt={20}>
          Philadelphia Restuarant Index
        </Title>
        <Search placeholder="Search"/>
        {/* <IndexResult>{dummyDatabase}</IndexResult> */}
      </Container>
    </>
  );
}
