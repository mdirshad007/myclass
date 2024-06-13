"use client"
import React, { useEffect, useState } from 'react'

export default function SearchBox({searchRecord}) {
    const [searchValue,setSearchValue]=useState("")
    useEffect(()=>{
        searchRecord(searchValue)
    },[searchValue])
  return (
    <div>
        <input type="text" name="" id="" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search here...' className='border border-gray-300 w-80 rounded-full h-12 p-4 focus:border-green-600' />
    </div>
  )
}
