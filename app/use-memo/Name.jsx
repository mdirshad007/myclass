"use client";
import React, { useMemo } from "react";

export default function Name({ name }) {
  const Sname = useMemo(() => {
    console.log("Inside Name");
    return name;
  }, [name]);
  return (
    <>
      <p>Name: {Sname}</p>
    </>
  );
}
