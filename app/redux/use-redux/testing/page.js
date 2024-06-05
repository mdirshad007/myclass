"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const productData = useSelector((data) => data.products);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Products Record</h2>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 text-gray-600">
        {productData.map((item) => (
          <li
            key={item.id}
            className="bg-slate-300 text-black px-3 py-1 rounded-full"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
