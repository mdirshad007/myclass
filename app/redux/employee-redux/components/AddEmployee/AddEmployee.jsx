"use client";
import React, {useState } from "react";


export default function AddEmployee() {
  const [employeeName, setEmployeeName] = useState("");
  // const dispatch = useDispatch();
  const handelEmployeeDispatch = () => {
    // dispatch(addProduct(productName));
    console.log(employeeName)
    setEmployeeName("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Add New Product</h2>
      <input
        type="text"
        value={employeeName}
        className="border border-gray-200 p-2 h-10 mt-5 mb-4 rounded-tl-md rounded-bl-md"
        placeholder="Enter Product Name"
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-5 py-2 rounded-tr-md rounded-br-md"
        onClick={handelEmployeeDispatch}
      >
        Add Employee
      </button>
    </div>
  );
}
