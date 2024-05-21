"use client"
import React, { useContext } from 'react'
import { userDetailContext } from '../api/context/context'

export default function Page() {
  const userData=useContext(userDetailContext)
  console.log(userData)
  return (
    <div className='flex w-full md:w-[1200px] mx-auto justify-between mt-6 flex-wrap'>
      Hello {userData?.userDetails?.name}, Your email is {userData?.userDetails?.email}
    </div>
  )
}
