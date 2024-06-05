"use client";
import { addProduct } from "@/app/redux/slice";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const dispatch = useDispatch();
  const handelProductDispatch = () => {
    dispatch(addProduct(productName));
    setProductName("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Add New Product</h2>
      <input
        type="text"
        value={productName}
        className="border border-gray-200 p-2 h-10 mt-5 mb-4 rounded-tl-md rounded-bl-md"
        placeholder="Enter Product Name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-5 py-2 rounded-tr-md rounded-br-md"
        onClick={handelProductDispatch}
      >
        Add Product
      </button>
    </div>
  );
}
