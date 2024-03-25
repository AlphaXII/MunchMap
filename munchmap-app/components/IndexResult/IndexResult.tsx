"use client";

import { Grid, GridCol, Pagination } from "@mantine/core";
import { dataInterface } from "../resource/interfaces";
import { MiniCard } from "../Cards/MiniCard";
import { useState } from "react";
import classes from "./IndexResult.module.css";

function chunk<dataInterface>(dataArray: dataInterface[]): dataInterface[][] {
  if (!dataArray.length) {
    return [];
  }
  const head = dataArray.slice(0, 6);
  const tail = dataArray.slice(6);
  return [head, ...chunk(tail)];
}

export default function IndexResult({
  children,
}: {
  children: dataInterface[];
}) {
  const [activePage, setActivePage] = useState(1);
  const data = chunk(children);
  const items = data[activePage - 1].map((item) => (
    <GridCol key={item.storeName} span={4}>
      <MiniCard restaurantData={item} />
    </GridCol>
  ));
  return (
    <>
      <Grid classNames={{root: classes.groot}}>{items}</Grid>
      <Pagination
        classNames={{root: classes.proot, control: classes.pcontrol}}
        total={data.length}
        value={activePage}
        onChange={setActivePage}
      />
    </>
  );
}
