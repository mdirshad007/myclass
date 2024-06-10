import React from "react";
import ToDoProvider from "../ToDoProvider";

export default function TodoLayout({ children }) {
  return (
    <div className="max-w-[960px] mx-auto py-8 w-full px-5">
      <div>
        <h1 className="text-2xl font-bold capitalize mb-5">
          You are under redux ToDo list
        </h1>
      </div>
      <hr className="mb-5" />
      <ToDoProvider>{children}</ToDoProvider>
    </div>
  );
}
