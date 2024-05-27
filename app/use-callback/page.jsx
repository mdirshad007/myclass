"use client";
import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

export default function Page() {
  const [count, setCount] = useState(0);
  const insideValue = useCallback(() => {
    return "hello world";
  }, []);
  return (
    <div className="max-w-[960px] mx-auto py-8 text-center">
      <ChildA insideValue={insideValue} />
      <h2 className="text-center">{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </button>
    </div>
  );
}
