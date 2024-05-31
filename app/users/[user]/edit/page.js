"use client"
import React, { useEffect, useState } from 'react'

export default function Page({params}) {
    const id=params.user;
    const [first_name,set_first_name]=useState("")
    const [last_name,set_last_name]=useState("")
    const [email,setEmail]=useState("")
    const [avatar,set_avatar]=useState("")
    const fetchData= async ()=>{
        let userData=await fetch(`http://localhost:3000/api/dbuser/${id}`)
        userData=await userData.json()
        set_first_name(userData.result.first_name)
        set_last_name(userData.result.last_name)
        setEmail(userData.result.email)
        set_avatar(userData.result.avatar)
    }
    useEffect(()=>{
        fetchData(id)
    },[])

    const handelUpdateUserData=()=>{
        let userNewData={
            "id":id,
        "email": email,
        "first_name": first_name,
        "last_name": last_name,
        "avatar": avatar
        }
        updateData(userNewData)
    }
    const updateData=async (data)=>{
        let result=await fetch(`http://localhost:3000/api/dbuser/${id}`,{
            method:"PUT",
            body:JSON.stringify(data)
        })
        result=await result.json()
        if(result.success){
            alert("Data is updated")
        }
        else{
            alert("Somthing error, Data is not updated")
        }
    }
  return (
    <section className='px-5 py-20'>
    <div className='max-w-[960px] mx-auto w-full'>
    <img src={avatar} alt={first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden mx-auto'/>
        <h1 className='text-5xl mb-5 font-bold text-center'>Edit {first_name} Details</h1>
        
            <div className='flex gap-5 mb-5'>
            <div className='w-full md:w-1/2'>
                <input type="text" value={first_name} onChange={(event)=>{set_first_name(event.target.value)}} name="first_name" id="first_name" placeholder='Enter First Name' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
            </div>
            <div className='w-full md:w-1/2'>
                <input type="text" value={last_name} onChange={(event)=>{set_last_name(event.target.value)}} name="last_name" id="last_name" placeholder='Enter Last Name' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
            </div>
            </div>
            <div className='mb-5'>
                <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} name="u_email" id="u_email" placeholder='Enter User Email' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
            </div>
            <div className='mb-5'>
                <input type="url" value={avatar} onChange={(event)=>{set_avatar(event.target.value)}} name="avatar" id="avatar" placeholder='Enter User Image URL' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
            </div>
            <button className='bg-green-700 text-white py-3 px-5 rounded-lg mx-auto' onClick={handelUpdateUserData}>
                Update User
            </button>
    
    </div>
</section>
  )
}
