"use client"
import React, { useState } from 'react'
import { userDetailContext } from '@/app/api/context/context'

export default function UserDetailsProvider({children}) {
  const [userDetails,setUserDetails]=useState({
    name:"Irshad",
    email:"irshad@searchmyexpert.com",
  })
  return (
    <userDetailContext.Provider value={{userDetails,setUserDetails}}>
    {children}
    </userDetailContext.Provider>
  )
}
