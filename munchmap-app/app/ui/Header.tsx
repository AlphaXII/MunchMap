"use client";
import { Group, Button, Box, useMantineTheme } from "@mantine/core";
import classes from "./css/styles.module.css";

export function HeaderMegaMenu() {
  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <div>MunchMap</div>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
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

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
