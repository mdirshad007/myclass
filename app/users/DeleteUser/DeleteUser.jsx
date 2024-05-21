"use client"
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function DeleteUser({userId}) {
    
    const hadelDeleteUser=async ()=>{
       let result=await fetch(`http://localhost:3000/api/dbuser/${userId}`,{
        method:"DELETE"
       })
       result=await result.json()
       if(result.success){
        alert("User is deleted")
       }
    }

  return (
    <button key={userId}
      onClick={hadelDeleteUser}
    >
      <RiDeleteBin5Fill className="text-red-600 text-2xl" />
    </button>
  );
}
