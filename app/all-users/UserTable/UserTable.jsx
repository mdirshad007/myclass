"use client";
import React, { useEffect, useState } from "react";
import DeleteUser from "../DeleteUser/DeleteUser";

export default function UserTable({ userData }) {
  const [usersDetail, setUsersDetails] = useState(userData);
  const deleteUserUpdate = (id) => {
    const newA = [...usersDetail];
    newA.splice(id, 1);
    setUsersDetails(newA);
    console.log(newA);
  };
  return (
    <table className="w-full table-auto">
      <thead className="bg-gray-200 h-14">
        <tr className="text-left">
          <th className="px-4">Name</th>
          <th className="px-4">Email</th>
          <th className="px-4">City</th>
          <th className="px-4">Edit</th>
          <th className="px-4">Delete</th>
        </tr>
      </thead>
      <tbody>
        {usersDetail.map((item, key) => (
          <tr className="text-left h-16 border-b border-gray-200" key={item.id}>
            <td className="px-4">{item.name}</td>
            <td className="px-4">{item.email}</td>
            <td className="px-4">{item.city}</td>
            <td className="px-4">Edit</td>
            <td className="px-4">
              <DeleteUser
                userId={item.id}
                index={key}
                deleteUserState={deleteUserUpdate}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
