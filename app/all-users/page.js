import Link from "next/link";
import React from "react";

const fetchData=async ()=>{
   let data=await fetch('https://664cd720ede9a2b55651d20a.mockapi.io/user/users')
   data=await data.json()
   return data
}
export default async function Page() {
    const userData=await fetchData()
  return (
    <div className="flex w-full md:max-w-[1200px] mx-auto justify-between mt-6 flex-wrap px-5 py-14">
      <div className="flex justify-end w-full">
        <Link href="/all-users/add-new-user">
      <button className="px-4 py-3 bg-green-600 rounded-full text-white mb-10 hover:bg-green-900 transition-all">Add New Record</button>
      </Link>
      </div>
      
      <table className="w-full table-auto">
        <thead className="bg-gray-200 h-14">
          <tr className="text-left">
            <th className="px-4">Name</th>
            <th className="px-4">Email</th>
            <th className="px-4">City</th>
            <th className="px-4">Edit</th>
            <th className="px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
            {
                userData.map((item,key)=>(
                    <tr className="text-left h-16 border-b border-gray-200" key={item.id}>
                    <td className="px-4">{item.name}</td>
                    <td className="px-4">{item.email}</td>
                    <td className="px-4">{item.city}</td>
                    <td className="px-4">Edit</td>
                    <td className="px-4">Delete</td>
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}
