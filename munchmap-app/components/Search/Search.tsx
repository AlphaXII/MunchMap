"use client";

import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { dummyDatabase } from "@/components/resource/dummyDatabase";
import IndexResult from "@/components/IndexResult/IndexResult";

export default function Search({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState("");

  function handleSearch(term: string) {
    console.log(term);
    setValue(term);
  }

  return (
    <>
      <Input
        placeholder="Search"
        value={value}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        rightSection={<IconSearch style={{display: value ? 'none' : undefined}}/>}
      />
      <IndexResult>{dummyDatabase}</IndexResult>
    </>
  );
}
