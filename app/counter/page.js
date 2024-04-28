"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [value,setValue]=useState(0);

    const setHandelAdd=()=>{
        setValue(value+1);
        // checkEvenOdd(value);
    }
    const setHandelMin=()=>{
        if(value!=0){
            setValue(value-1)
            // checkEvenOdd(value);
        }
    }

    const checkEvenOdd=(newValue)=>{
        if(newValue%2==0){
            console.log("This is an even number", newValue);
        }
        else{
            console.log("This is an Odd number", newValue);
        }
    }
    useEffect(()=>{
        checkEvenOdd(value);
    },[value])

  return (
    <div>
        <button onClick={setHandelAdd}>+</button>
        <p>{value}</p>
        <button onClick={setHandelMin}>-</button>
    </div>
  )
}
