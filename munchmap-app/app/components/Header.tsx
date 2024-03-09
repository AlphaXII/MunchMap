"use client";
import { Grid, Button, Box, Group, GridCol, Container } from "@mantine/core";
import classes from "./Header.module.css";

export default function HeaderMegaMenu({ children }: any) {
  return (
    <>
      <header className={classes.header}>
        <Grid h="100%" style={{ display: "flex", alignItems: "center", margin:"0", padding:"0"}}>
          <Grid.Col span={1} style={{ display: "flex", alignItems: "center" }}>
            <div>MunchMap</div>
          </Grid.Col>
          <Grid.Col span={10} style={{ display: "flex", alignItems: "center", paddingTop:"0", paddingBottom:"0"}}>
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
    { link: '', label: 'Home' },
    { link: '', label: 'Index' },
    { link: '', label: 'Map' },
    { link: '', label: 'Info' },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={classes.header} style={{width:"100%", justifyContent:"flex-start", display:"inline-flex"}}>
        <Group h="100%" style={{justifyContent:"flex-start", display:"inline-flex", width:"100px"}}>
          MunchMap
        </Group>
        <Group h="100%" style={{justifyContent:"space-between", display:"inline-flex", width:"calc(100% - 100px)"}}>
          <Group h="100%" style={{display:"inline-flex"}} gap={5}>
            {items}
          </Group>
          <Button variant="default" style={{display:"inline-flex"}}>Log in</Button>
        </Group>
      </header>
      <div>{children}</div>
    </>
  )
}