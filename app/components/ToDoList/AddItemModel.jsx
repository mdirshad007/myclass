import React from "react";
import { IoMdClose } from "react-icons/io";

export default function AddItemModel() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white text-gray-800 p-5 rounded-lg shadow-sm relative max-w-lg w-full">
        <button>
          <IoMdClose className="bg-black text-white p-1 text-2xl rounded-full absolute right-3 top-2" />
        </button>
        <h2 className="text-3xl font-bold mb-5">Add New Task</h2>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="title">Enter Task Title</label>
          <input
            type="text"
            name="title"
            id=""
            className="border border-gray-300 h-10 rounded py-2 px-3"
          />
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <button className="bg-green-700 text-white px-6 py-2 rounded-md">
          Post
        </button>
      </div>
    </div>
  );
}
