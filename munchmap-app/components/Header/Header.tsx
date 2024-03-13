"use client";
import {
  Button,
  Group,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Logo from "../Logo/Logo";

export function Header({ children }: any) {
  const links = [
    { link: "/", label: "Home" },
    { link: "/indexlist", label: "Index" },
    { link: "/map", label: "Map" },
    { link: "/info", label: "Info" },
  ];

  const [opened, { toggle }] = useDisclosure(false);
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
      <header className={classes.header}>
        <Logo/>
        <Group h="100%" justify="space-between" visibleFrom="sm" className={classes.navContainer}>
          <Group h="100%" gap={5}>
            {items}
          </Group>
          <Button variant="default">Log in</Button>
        </Group>
        <Group h="100%" justify="flex-end" hiddenFrom="sm" className={classes.burger}>
          <Burger size="md" opened={opened} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer opened={opened} onClose={toggle} title="Navigation" hiddenFrom="sm" >
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
