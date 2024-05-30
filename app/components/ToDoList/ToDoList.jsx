"use client";
import React, { useEffect, useState } from "react";
import TaskDone from "../TaskDone/TaskDone";
import TaskNotDone from "../TaskNotDone/TaskNotDone";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Link from "next/link";
import AddItemModel from "./AddItemModel";

export default function ToDoList() {
  const [list, setList] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      let response = await fetch(
        `https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`
      );
      let data = await response.json();
      setList(data);
    };
    fetchList();
  }, []);

  const handleDeleteUserUpdate = (id, status) => {
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    console.log(newList);
    setDeleteStatus(status);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white px-4 py-3 rounded mb-3">
          Add Task
        </button>
      </div>
      {deleteStatus && (
        <p className="text-red-600 font-bold text-xl mb-5">
          Deleted Successfully
        </p>
      )}
      {list &&
        list.map((item, index) => (
          <ul
            key={item.id}
            className="border-b border-gray-200 py-3 flex justify-between"
          >
            <Link href={item.link}>
              {item.status === true ? (
                <TaskDone taskName={item.title} />
              ) : (
                <TaskNotDone taskName={item.title} />
              )}
            </Link>
            <div className="flex gap-2">
              <div>
                <EditItem id={item.id} />
              </div>
              <div>
                <DeleteItem
                  id={item.id}
                  index={index}
                  deleteUserState={handleDeleteUserUpdate}
                />
              </div>
            </div>
          </ul>
        ))}
      <AddItemModel />
    </div>
  );
}
