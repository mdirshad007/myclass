"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { removeTodos } from "../../todoSlice";

export default function ToDoView() {
  const dispatch = useDispatch();
  const todoData = useSelector((data) => data.todoSlice.todo);
  console.log("Todo data", todoData);
  return (
    <div>
      <hr className="my-10" />
      <h2 className="text-xl font-semibold">All To Do Task</h2>
      <ul className="flex flex-wrap gap-3 mt-5 text-gray-600">
        {todoData.map((item) => (
          <li
            key={item.id}
            className="bg-slate-200 text-black px-3 py-1 rounded-full w-auto flex gap-2 justify-between"
          >
            {item.name}
            <button
              className="text-gray-500 hover:text-red-600 text-lg"
              onClick={() => dispatch(removeTodos(item.id))}
            >
              <IoIosClose />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
