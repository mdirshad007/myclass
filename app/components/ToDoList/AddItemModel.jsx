import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function AddItemModel({ closeModel, addDataStore }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [result, setResult] = useState(0);

  const modelRef = useRef();

  const handleCloseModelByBg = (e) => {
    if (modelRef.current === e.target) {
      closeModel();
    }
  };

  const handelAddTask = async (e) => {
    e.preventDefault();
    let data = {
      title: title,
      link: link,
      status: taskStatus,
    };
    try {
      let response = await fetch(
        `https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      
      if (response.ok) {
        setResult(1);
        let data = await response.json();
        closeModel();
      } else {
        setResult(2);
      }
    } catch (error) {
      console.log("Error", error);
      setResult(2);
    }
  };
  useEffect(() => {
    addDataStore(result);
  }, [result]);
  return (
    <div
      ref={modelRef}
      onClick={handleCloseModelByBg}
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex justify-center items-center px-3 py-10"
    >
      <div className="max-w-3xl w-full bg-white rounded-lg">
        <div className="relative px-4 py-5 border-b border-gray-200">
          <button className="absolute top-2 right-2" onClick={closeModel}>
            <IoMdClose className="hover:text-red-700 text-gray-600 text-2xl" />
          </button>
          <div>
            {result == 2 ? (
              <p className="text-red-600 font-bold">Task is not add in list</p>
            ) : (
              ""
            )}
            <h2 className="text-2xl">Add New Task Details</h2>
          </div>
        </div>
        <div className="px-4 py-5">
          <form action="">
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Enter Task Title</label>
              <input
                type="text"
                value={title}
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="h-11 border border-gray-200 focus:outline-0 focus:border focus:border-green-600 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Enter Task Link</label>
              <input
                type="text"
                value={link}
                required
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                className="h-11 border border-gray-200 focus:outline-0 focus:border focus:border-green-600 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Task Status</label>
              <select
                value={taskStatus.toString()}
                onChange={(e) => setTaskStatus(e.target.value === "true")}
                className="border border-gray-200 focus:outline-none text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-3 h-11"
              >
                <option value="true">Task Done</option>
                <option value="false">Task Not Done</option>
              </select>
            </div>
            <div className="flex justify-start">
              <button
                className="bg-green-600 text-white px-6 py-3 rounded"
                onClick={handelAddTask}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
