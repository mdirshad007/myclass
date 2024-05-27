"use client";
import React, { useMemo } from "react";

export default function Section({ section }) {
  const sSection = useMemo(() => {
    console.log("Inside Section");
    return section;
  }, [section]);
  return <p>Section:{sSection}</p>;
}
