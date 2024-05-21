"use client"
import React, { useContext } from 'react'
import { countContext } from '../components/Context/Context'
import { userDetailsContext } from '../components/Context/Context'

export default function Page() {
    const userData=useContext(userDetailsContext)
  const countObj=useContext(countContext)
  console.log(userData.userDetails.name)
  return (
    <div className='max-w-[960px] mx-auto py-8'>
        <p className='text-center mt-5 font-bold'>Hello {userData.userDetails.name}</p>
        <p className='text-center mb-5'>{userData.userDetails.email}</p>
        <h1 className='text-4xl text-center font-semibold capitalize'>Here I will use Context</h1>
        <p className='text-center my-5'>Here I will design click count</p>
        <div className='flex justify-center gap-3 items-center'>
            <button className='text-6xl font-bold' onClick={()=>{countObj.setCount(++countObj.count)}}>+</button>
        <p>My count is: {countObj.count}</p>
        <button className='text-6xl font-bold'  onClick={()=>{countObj.setCount(--countObj.count)}}>-</button>
        </div>   
    </div>
  )
}
