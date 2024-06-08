"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
// import { removeProduct } from "@/app/redux/slice";

export default function EmployeeView() {
  // const dispatch = useDispatch();
  // const productData = useSelector((data) => data.products);
  return (
    <div>
      <hr className="my-10" />
      <h2 className="text-xl font-semibold">All Employee Record</h2>
      <ul className="flex flex-wrap gap-3 mt-5 text-gray-600">
        {/* {productData.map((item) => (
          <li
            key={item.id}
            className="bg-slate-200 text-black px-3 py-1 rounded-full w-auto flex gap-2 justify-between"
          >
            {item.name}
            <button
              className="text-gray-500 hover:text-red-600 text-lg"
              onClick={() => dispatch(removeProduct(item.id))}
            >
              <IoIosClose />
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
