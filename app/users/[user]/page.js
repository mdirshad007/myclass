import { redirect } from "next/navigation";
import React from "react";
async function fetchData(id) {
  let responce = await fetch(`http://localhost:3000/api/dbuser/${id}`);
  responce = await responce.json();
  return responce.result
}
export default async function page({ params }) {
  const singleUser = params.user;
  const userData = await fetchData(singleUser);
  console.log(userData);
  
  if(userData.page=="404"){
    redirect("/not-found")
  }
  return (
    <div>
       {
                <div className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={userData.avatar} alt={userData.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{userData.first_name} {userData.last_name}</p>
                    <p>{userData.email}</p>
                    </div>
                </div>
        }
    </div>
  );
}
