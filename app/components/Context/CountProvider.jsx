"use client"
import React, { useState } from 'react'
import { countContext } from './Context'

export default function CountProvider({children}) {
    const [count,setCount]=useState(0)
  return (
    <countContext.Provider value={{count,setCount}}>
        {children}
    </countContext.Provider>
  )
}
