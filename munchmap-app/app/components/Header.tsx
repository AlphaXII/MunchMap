"use client";
import { Grid, Button, Box, Group, GridCol, Container } from "@mantine/core";
import classes from "./Header.module.css";

export function HeaderMegaMenu({ children }: any) {
  return (
    <>
      <header className={classes.header}>
        <Grid h="100%" style={{ display: "flex", alignItems: "center" }}>
          <Grid.Col span={1} style={{ display: "flex", alignItems: "center" }}>
            <div>MunchMap</div>
          </Grid.Col>
          <Grid.Col span={10} style={{ display: "flex", alignItems: "center" }}>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="#" className={classes.link}>
                Index
              </a>
              <a href="#" className={classes.link}>
                Map
              </a>
              <a href="#" className={classes.link}>
                Info
              </a>
            </Group>
          </Grid.Col>
          <Grid.Col span={1} style={{ display: "flex", alignItems: "center" }}>
            <Button variant="default">Log in</Button>
          </Grid.Col>
        </Grid>
      </header>
      <div>{children}</div>
    </>
  );
}
