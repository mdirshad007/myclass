"use client";
import React, { useEffect, useState } from "react";
import TaskDone from "../TaskDone/TaskDone";
import TaskNotDone from "../TaskNotDone/TaskNotDone";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Link from "next/link";
import AddItemModel from "./AddItemModel";
import Alert from "./Alert";

export default function ToDoList() {
  const [list, setList] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const fetchList = async () => {
    let response = await fetch(
      `https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`
    );
    let data = await response.json();
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDeleteUserUpdate = (id, status) => {
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    setDeleteStatus(status);
    setTimeout(() => {
      setDeleteStatus(false);
    }, 3000);
  };
  const [modelState, setModelState] = useState(false);
  const handelAddTask = () => {
    setModelState(true);
  };
  const [resultStatus, setresultStatus] = useState(0);

  const handelAddDataStore = (data) => {
    setresultStatus(data);
    setTimeout(() => {
      setresultStatus(0);
    }, 3000);
  };
  useEffect(() => {
    fetchList();
  }, [resultStatus]);

  const [updateStatus, setUpdateStatus] = useState(0);

  const handelUpdateDataStore=(status)=>{
    setUpdateStatus(status)
    fetchList();
    setTimeout(() => {
      setUpdateStatus(0);
    }, 3000);
  }


  return (
    <div>
      {resultStatus == 1 ? (
        <Alert
          resultStatus={resultStatus}
          msg="New Record is added"
          className="text-green-600 bg-green-100"
        />
      ) : (
        ""
      )}
      {updateStatus == 1 ? (
        <Alert
          resultStatus={updateStatus}
          msg="Task is updated"
          className="text-gray-800 bg-yellow-100"
        />
      ) : (
        ""
      )}

      {deleteStatus && (
        <Alert
          resultStatus={1}
          msg="Record is deleted"
          className="text-red-600 bg-red-100"
        />
      )}

      <div className="flex justify-end">
        <button
          className="bg-blue-700 text-white px-4 py-3 rounded mb-3"
          onClick={handelAddTask}
        >
          Add Task
        </button>
      </div>

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
                <EditItem id={item.id} updateDataStore={handelUpdateDataStore}/>
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
      {modelState && (
        <AddItemModel
          closeModel={() => setModelState(false)}
          addDataStore={handelAddDataStore}
        />
      )}
    </div>
  );
}
