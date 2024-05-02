import Link from 'next/link';
import React from 'react'
async function userData(){
let response=await fetch('http://localhost:3000/api/dbuser');
response= await response.json();
return response;
}
export default async function page() {
    const data =await userData();
    console.log(data)
  return (
    <div className='flex w-[1200px] mx-auto justify-between mt-6'>
        {
            data.map((item,id)=>(
                <Link href={`/users/${item.id}`} key={item.id} >
                <div className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={item.avatar} alt={item.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{item.first_name} {item.last_name}</p>
                    <p>{item.email}</p>
                    </div>
                </div>
                </Link>
            )                
            )
        }
    </div>
  )
}
