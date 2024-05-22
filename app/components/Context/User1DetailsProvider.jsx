"use client"
import React, { useState } from 'react'
import { userDetailsContext } from './Context'

export default function User1DetailsProvider({children}) {
    const [userDetails,setUserDetails]=useState({
        name:"Md Irshad",
        email:"md.irshad8447@gmail.com"
    })
  return (
    <userDetailsContext.Provider value={{userDetails,setUserDetails}}>
    {children}
    </userDetailsContext.Provider>
  )
}
