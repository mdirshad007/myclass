import React from "react";
import TaskDone from "../TaskDone/TaskDone";
import Link from "next/link";
import TaskNotDone from "../TaskNotDone/TaskNotDone";
import FatchData from "./components/FatchData";

export default function ToDoList() {
  const handelReceivedListData=(list)=>{
    console.log(list)
  }
  return (
    <ul>
      <FatchData receivedListData={handelReceivedListData}/>
      <Link href="/change-background">
        <TaskDone taskName="Use of useState" />
      </Link>

      <Link href="/test-context">
        <TaskDone taskName="Use of useContext" />{" "}
      </Link>
      <Link href="/use-reducer-hook">
        <TaskDone taskName="Use of useReducer" />{" "}
      </Link>
      <Link href="/use-memo">
        <TaskDone taskName="Use of useMemo" />{" "}
      </Link>
      <Link href="/use-callback">
        <TaskDone taskName="Use of useCallBack" />{" "}
      </Link>
      <Link href="/users">
        <TaskDone taskName="User fetch" />{" "}
      </Link>
      <Link href="/server-side-api-data">
        <TaskDone taskName="Server Side Data Fetch" />{" "}
      </Link>
      <Link href="/redux/use-redux">
        <TaskNotDone taskName="Redux tool kit" />{" "}
      </Link>
    </ul>
  );
}
