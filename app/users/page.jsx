import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";
import DeleteUser from './DeleteUser/DeleteUser';
async function userData(){
let response=await fetch('http://localhost:3000/api/dbuser');
response= await response.json();
return response;
}
export default async function page() {
    const data =await userData();
  return (
    <div className='flex w-full md:max-w-[1200px] mx-auto justify-between mt-6 flex-wrap p-5'>
        {
            data.map((item,id)=>(
                <div className='text-center w-full md:w-1/3 flex justify-center items-center flex-col gap-2' key={id}>
                
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <Link href={`/users/${item.id}`} key={item.id} className='' >
                    <img src={item.avatar} alt={item.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden mx-auto'/>
                    <p className='font-bold'>{item.first_name} {item.last_name}</p>
                    <p>{item.email}</p>
                    </Link>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <Link href={`/users/${item.id}/edit`} className='flex items-center'><button>
                        <FaEdit className='text-blue-600 text-2xl' />
                        </button></Link>
                        <DeleteUser userId={item.id}/>
                    </div>
                
                </div>
                
            )                
            )
        }
    </div>
  )
}
