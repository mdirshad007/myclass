"use client"
import React, { useState } from 'react'
import { user } from '../api/util/db'

export default function Page() {
    const [id,setId]=useState("")
    const [first_name,set_first_name]=useState("")
    const [last_name,set_last_name]=useState("")
    const [email,setEmail]=useState("")
    const [avatar,set_avatar]=useState("")
    const userData = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar
    };
    const  addUser=async ()=>{
        let response=await fetch("http://localhost:3000/api/dbuser/",{
            method:"Post",
            body:JSON.stringify(userData)
        }
        );
        response= await response.json()
        console.log(response);
    }
  return (
    <section className='px-5 py-20'>
        <div className='max-w-[960px] mx-auto w-full'>
            <h1 className='text-5xl mb-5 font-bold'>Enter New User Details</h1>
          
                <div className='mb-5'>
                    <input type="number" value={id} onChange={(event)=>{setId(event.target.value)}} name="id" id="id" placeholder='Enter Unique Id' className='w-full h-14 mt-4 border focus-visible:border-green-500 focus:border-green-500 border-gray-200 p-2 rounded-md'/>
                </div>
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
                <button className='bg-green-700 text-white py-3 px-5 rounded-lg' onClick={addUser}>
                    Add User
                </button>
        
        </div>
    </section>
  )
}
