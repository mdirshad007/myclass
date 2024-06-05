"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const productData = useSelector((data) => data.products);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Products Record</h2>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 text-gray-600">
        {productData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
