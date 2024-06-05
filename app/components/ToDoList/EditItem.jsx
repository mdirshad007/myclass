"use client"
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditModel from "./EditModel";

export default function EditItem({id,updateDataStore}) {
  const [modelState,setModelState]=useState(false)
  const handelEditDetail=()=>{
    setModelState(true)
  }
  const handelUpdateModelSatus=(status)=>{
    updateDataStore(status)
  }
  return (
    <div>
      <button onClick={handelEditDetail}>
        <FaEdit className="text-green-800 text-xl" />
      </button>
      {
        modelState && <EditModel updateModelStatus={handelUpdateModelSatus} id={id} closeModel={()=>setModelState(false)}/>
      }
      
    </div>
  );
}
