"use client";

import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { dummyDatabase } from "@/components/resource/dummyDatabase";
import IndexResult from "@/components/IndexResult/IndexResult";

export default function Result({ placeholder }: { placeholder: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = [...dummyDatabase].filter((item) => {
    return Object.values(item).some((value) => {
      return (
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  });

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  return (
    <>
      <Input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        rightSection={
          <IconSearch style={{ display: searchTerm ? "none" : undefined }} />
        }
      />
      <IndexResult>{filteredData}</IndexResult>
    </>
  );
}
