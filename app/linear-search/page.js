"use client"
import React, { useState } from 'react'

export default function page() {
    const numbers=[1,2,3,54,65,66,7,232,]
    const [inputNumber,setInputNumber]=useState(null)
    const [result,setResult]=useState(false)
    const handelLinearSearch=()=>{
      setResult(false);
        numbers.map((items,id)=>{
            if(items==inputNumber){
                console.log("your result found");
             setResult(true)
             return
            }
         })
    }
  return (
    <div>
  <div className="max-w-6xl w-full mx-auto mt-10 p-5">
    <h1 className="text-5xl font-bold">Linear Search</h1>
    <hr className="my-6" />
    <div>
        Here is list of number &nbsp;
        {
            numbers.map((items,id)=>(
                <span>{items}, </span>
            ))
        }
        <input type="number" name="" id="" className='w-full h-[40px] border my-3 px-4 py-2' placeholder='Enter your number' onChange={(event)=>{setInputNumber(event.target.value)}} value={inputNumber}/>
        <button className='w-32 h-12 bg-green-700 text-white' onClick={handelLinearSearch}>Search</button>
        {
            result?<p className='text-green-600'>Your result match</p>:<p className='text-red-500'>Your not found</p>
        }
        
    </div>
  </div>
</div>
  )
}
