import React from "react";
import AddToDo from "./components/AddToDo";
import ToDoView from "./components/ToDoView";

export default function Page() {
  return (
    <div>
      <AddToDo />
      <ToDoView />
    </div>
  );
}
