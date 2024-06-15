"use client";
import React, { useEffect, useState } from "react";
import TaskDone from "../TaskDone/TaskDone";
import TaskNotDone from "../TaskNotDone/TaskNotDone";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Link from "next/link";
import AddItemModel from "./AddItemModel";
import Alert from "./Alert";
import SearchBox from "../SearchBox/SearchBox";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [modelState, setModelState] = useState(false);
  const [resultStatus, setResultStatus] = useState(0);
  const [updateStatus, setUpdateStatus] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const fetchList = async () => {
    let response = await fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`);
    let data = await response.json();
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchList();
  }, [resultStatus, updateStatus, deleteStatus, searchItem]);

  const handleDeleteUserUpdate = (id, status) => {
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    setDeleteStatus(status);
    setTimeout(() => {
      setDeleteStatus(false);
    }, 3000);
  };

  const handleAddTask = () => {
    setModelState(true);
  };

  const handleAddDataStore = (data) => {
    setResultStatus(data);
    setTimeout(() => {
      setResultStatus(0);
    }, 3000);
  };

  const handleUpdateDataStore = (status) => {
    setUpdateStatus(status);
    setTimeout(() => {
      setUpdateStatus(0);
    }, 3000);
  };

  const handleSearchValue = (value) => {
    setSearchItem(value.toLowerCase());
  };

  const filteredList = list.filter((item) => item.title.toLowerCase().includes(searchItem));
  const totalRecords = filteredList.length;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const paginatedRecords = filteredList.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {resultStatus === 1 && (
        <Alert resultStatus={resultStatus} msg="New Record is added" className="text-green-600 bg-green-100" />
      )}
      {updateStatus === 1 && (
        <Alert resultStatus={updateStatus} msg="Task is updated" className="text-gray-800 bg-yellow-100" />
      )}
      {deleteStatus && (
        <Alert resultStatus={1} msg="Record is deleted" className="text-red-600 bg-red-100" />
      )}

      <div className="flex justify-between">
        <SearchBox searchRecord={handleSearchValue} />
        <button className="bg-blue-700 text-white px-4 py-3 rounded mb-3" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {paginatedRecords.map((item, index) => (
        <ul key={item.id} className="border-b border-gray-200 py-3 flex justify-between">
          <Link href={item.link}>
            {item.status === true ? (
              <TaskDone taskName={item.title} />
            ) : (
              <TaskNotDone taskName={item.title} />
            )}
          </Link>
          <div className="flex gap-2">
            <EditItem id={item.id} updateDataStore={handleUpdateDataStore} />
            <DeleteItem id={item.id} index={index} deleteUserState={handleDeleteUserUpdate} />
          </div>
        </ul>
      ))}

      <div className="mt-5 flex justify-center gap-5">
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <ul className="flex gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={currentPage === index + 1 ? "font-bold" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>

      {modelState && (
        <AddItemModel closeModel={() => setModelState(false)} addDataStore={handleAddDataStore} />
      )}
    </div>
  );
}
