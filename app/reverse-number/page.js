"use client"
import { useEffect } from "react";

export default function page() {
  let num =7548;
  let reverseNumber=null;
  let remider=0;

  const reverseNum=(num)=>{
    while(num!==0){
        remider=remider*10+num%10;
        num=Math.floor(num/10)
    }
    return remider;
  }
  console.log("Orignal Number is",num)
  console.log("Reversed Number is",reverseNum(num))
  useEffect(()=>{
    if(num===remider){
        console.log("Both number are equal")
    }
    else{
        console.log("Both numbers are not equal")
    }
  },[])

return (
    <div>
        <p>your number is {num}</p>
        <p>Reverce number is {remider}</p>
        <p>Both number are {
            num!==remider?"not":""
            } Equal</p>
    </div>
  )
}
