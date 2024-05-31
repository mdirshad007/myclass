import Link from 'next/link'
import React from 'react'
async function fetchData(){
    let data=await fetch('http://localhost:3000/api/dbuser')
    data= await data.json()
    return data
}
export default async function Page() {
    const userData=await fetchData()
    console.log(userData)
  return (
    <div className='flex w-full md:w-[1200px] mx-auto justify-between mt-6 flex-wrap'>
    {
        userData.map((item,id)=>(
            <div className='w-full md:w-1/3 text-center' key={id}>
                <div className='p-3 flex flex-col items-center gap-3'>
                <img src={item.avatar} alt={item.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                <p className='font-bold'>{item.first_name} {item.last_name}</p>
                <p>{item.email}</p>
                
                <div className='flex gap-2 justify-center'>
                    <Link href={`/users/edit-user/${item.id}`}><button className='bg-blue-800 text-white text-center px-5 py-2 rounded-lg'>Edit</button></Link>
                    <Link href={`/users/delete-user/${item.id}`}><button className='bg-red-700 text-white text-center px-5 py-2 rounded-lg'>Delete</button></Link>
                </div>
                </div>
            </div>
        )                
        )
    }
</div>
  )
}
