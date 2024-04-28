"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {
    // let randomNumber=Math.floor(Math.random() * 20) + 1;
    const [randomNumber, setRandomNumber]=useState(null);
    const [inputNumber,setInputNumber]=useState(0);
    const [result,setReslut]=useState('');


    useEffect(()=>{
        setRandomNumber(Math.floor(Math.random() * 20) + 1);
    },[])

    useEffect(()=>{
        console.log("random number is ",randomNumber);
    },[randomNumber])

    const onHandelCheckNumber=()=>{
        if(randomNumber>inputNumber){
            setReslut('Random number is greater then your number');
        }
        else if(randomNumber<inputNumber){
            setReslut('Random number is less then your number');
        }
        else{
            setReslut("Your number is equal to random number");
        }
    }
    const onChangeHandel=(event)=>{
        setInputNumber(event.target.value)
    }
  return (
    <div>
  <div className="max-w-6xl w-full mx-auto mt-10 p-5">
    <h1 className="text-5xl font-bold">Enter your number</h1>
    <hr className="my-6" />
    <input type="number" className='w-full h-[50px] border p-2' placeholder='Enter number' onChange={onChangeHandel} value={inputNumber} />
    <button className='p-5 bg-green-800 text-white mt-4' onClick={onHandelCheckNumber}>Submit</button>
    <p>{result}</p>
  </div>
</div>
  )
}
