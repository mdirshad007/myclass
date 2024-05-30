"use client"
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditModel from "./EditModel";

export default function EditItem({id}) {
  const [modelState,setModelState]=useState(false)
  const handelEditDetail=()=>{
    setModelState(true)
  }
  // const handelModelStatus=(status)=>{
  //  if(status!=true){
  //   setModelState(false)
  //  }
  // }
  return (
    <div>
      <button onClick={handelEditDetail}>
        <FaEdit className="text-green-800 text-xl" />
      </button>
      {
        modelState && <EditModel id={id} closeModel={()=>setModelState(false)}/>
      }
      
    </div>
  );
}
