import React from "react";
import TaskDone from "../TaskDone/TaskDone";
import Link from "next/link";
import TaskNotDone from "../TaskNotDone/TaskNotDone";

const fetchList=async ()=>{
  let list=await fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`)
  list=await list.json()
  return list
 }
 
export default async function ToDoList() {
  const listData=await fetchList();
  return (
    <ul>
      {
        listData.map((item,index)=>(
          <li key={item.id} className="border-b border-gray-200 py-3 flex justify-between">
          <Link href={item.link}>
            {item.status==true?<TaskDone taskName={item.title} />:<TaskNotDone taskName={item.title} />}
      </Link>
      <div className="flex gap-2">
        <div>Edit</div>
        <div>Delete</div>
      </div>
      </li>
        ))
      }
      

      {/* <Link href="/test-context">
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
      </Link> */}
    </ul>
  );
}
