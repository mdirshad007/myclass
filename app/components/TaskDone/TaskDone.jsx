import React from "react";
import { FaCheck } from "react-icons/fa6";
export default function TaskDone({ taskName }) {
  return (
      <li className="cursor-pointer flex justify-start items-center gap-2">
        <FaCheck className="text-green-700" />
        {taskName}
      </li>
  );
}
