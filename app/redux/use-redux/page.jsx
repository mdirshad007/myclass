import React from "react";
import ProductView from "./components/ProductView/ProductView";
import AddProduct from "./components/ProductDetails/AddProduct";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Link href="/redux/use-redux/testing">
        <button>Test link</button>
      </Link>
      <AddProduct />
      <hr className="my-10" />
      <ProductView />
    </>
  );
}
