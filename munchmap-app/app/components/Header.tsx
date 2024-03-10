"use client";
import { Grid, Button, Box, Group, GridCol, Burger, Drawer} from "@mantine/core";
import {
  HoverCard,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function HeaderMegaMenu({ children }: any) {
  return (
    <>
      <header className={classes.header}>
        <Grid
          h="100%"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0",
            padding: "0",
          }}
        >
          <Grid.Col span={1} style={{ display: "flex", alignItems: "center" }}>
            <div>MunchMap</div>
          </Grid.Col>
          <Grid.Col
            span={10}
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
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

export function HeaderNoGrid({ children }: any) {
  const links = [
    { link: "/", label: "Home" },
    { link: "/index", label: "Index" },
    { link: "/map", label: "Map" },
    { link: "/info", label: "Info" },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header
        className={classes.header}
        style={{
          width: "100%",
          justifyContent: "flex-start",
          display: "inline-flex",
        }}
      >
        <Group
          h="100%"
          style={{
            justifyContent: "flex-start",
            display: "inline-flex",
            width: "100px",
          }}
        >
          MunchMap
        </Group>
        <Group
          h="100%"
          style={{
            justifyContent: "space-between",
            display: "inline-flex",
            width: "calc(100% - 100px)",
          }}
          visibleFrom="sm"
        >
          <Group h="100%" style={{ display: "inline-flex" }} gap={5}>
            {items}
          </Group>
          <Button variant="default" style={{ display: "inline-flex" }}>
            Log in
          </Button>
        </Group>
        <Group h="100%" justify="flex-end" style={{
            display: "inline-flex",
            width: "calc(100% - 100px)",
          }}
          hiddenFrom="sm" >
          <Burger size="md" opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
        
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {items}
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
          </Group>
        </ScrollArea>
      </Drawer>
      <div>{children}</div>
    </>
  );
}
