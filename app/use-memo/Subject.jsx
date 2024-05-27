"use client";
import React, { useMemo } from "react";

export default function Subject({ subject }) {
  const sSubject = useMemo(() => {
    console.log("Inside Subject");
    return subject;
  }, [subject]);
  return <p>Subject:{sSubject}</p>;
}
