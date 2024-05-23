"use client";
import React, { useState } from "react";

export default function DeleteUser({ userId, deleteUserState, index }) {
  const [deleteStatus, setDeleteStatus] = useState("");
  const handelDeleteUser = async () => {
    deleteUserState(index);
    // let result = await fetch(
    //   `https://664cd720ede9a2b55651d20a.mockapi.io/user/users/${userId}`,
    //   { method: "DELETE" }
    // );
    // result = await result.json();
    // if (result.id) {
    //   setDeleteStatus("deleted");
    //   console.log("User is deleted");
    // }
  };

  return <button onClick={handelDeleteUser}>Delete</button>;
}
