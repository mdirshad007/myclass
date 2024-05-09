import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
async function userData(){
let response=await fetch('http://localhost:3000/api/dbuser');
response= await response.json();
return response;
}
export default async function page() {
    const data =await userData();
  return (
    <div className='flex w-full md:w-[1200px] mx-auto justify-between mt-6 flex-wrap'>
        {
            data.map((item,id)=>(
                <Link href={`/users/${item.id}`} key={item.id} className='w-full md:w-1/3' >
                <div className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={item.avatar} alt={item.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{item.first_name} {item.last_name}</p>
                    <p>{item.email}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <button>
                        <FaEdit className='text-blue-600 text-2xl' />
                        </button>
                        <button>
                        <RiDeleteBin5Fill className='text-red-600 text-2xl' />
                        </button>
                    </div>
                </div>
                </Link>
            )                
            )
        }
    </div>
  )
}
