"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../todoSlice";

export default function AddToDo() {
  const [toDoTask, setToDoTask] = useState("");
  const dispatch = useDispatch();
  const handelToDoDispatch = () => {
    dispatch(addTodos(toDoTask));
    setToDoTask("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Add New Task</h2>
      <input
        type="text"
        value={toDoTask}
        className="border border-gray-200 p-2 h-10 mt-5 mb-4 rounded-tl-md rounded-bl-md"
        placeholder="Enter Task Name"
        onChange={(e) => setToDoTask(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-5 py-2 rounded-tr-md rounded-br-md"
        onClick={handelToDoDispatch}
      >
        Add In List
      </button>
    </div>
  );
}
