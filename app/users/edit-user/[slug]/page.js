"use client"
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const singleUser = params.slug;
  console.log(singleUser)

  const fetchData=async ()=>{
    let responce = await fetch(`http://localhost:3000/api/dbuser/${singleUser}`);
    responce =await responce.json();
    return responce.result
  }

  useEffect(()=>{
    const userData = fetchData();
    console.log(userData.id)
  },[])

  const [id,setId]=useState(null)
//   const [first_name,set_first_name]=useState(userData.first_name)
//   const [last_name,set_last_name]=useState(userData.last_name)
//   const [email,setEmail]=useState(userData.email)
//   const [avatar,set_avatar]=useState(userData.avatar)
  
//   if(userData.page=="404"){
//     redirect("/not-found")
//   }
  return (
    <div>
{/* 
                <div className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={userData.avatar} alt={userData.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{userData.first_name} {userData.last_name}</p>
                    <p>{userData.email}</p>
                    </div>
                </div> */}
        
    </div>
  );
}
