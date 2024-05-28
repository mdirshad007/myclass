"use client";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteItem({ id, index, deleteUserState }) {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const handelDelete = async () => {
    let result = await fetch(
      `https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list/${id}`,
      { method: "DELETE" }
    );
    result = await result.json();
    if (result.id) {
      setDeleteStatus(true);
      deleteUserState(index, deleteStatus);
    }
  };
  return (
    <div>
      <button onClick={handelDelete}>
        <MdDelete className="text-red-600 text-xl" />
      </button>
    </div>
  );
}
