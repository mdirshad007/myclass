"use client";
import React, { memo } from "react";

function ChildA() {
  console.log("Inside Child A");
  return <div>ChildA</div>;
}
export default memo(ChildA);
