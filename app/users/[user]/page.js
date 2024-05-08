import { redirect } from "next/navigation";
import React from "react";
<<<<<<< HEAD

 async function fetchData(id) {
  const response = await fetch(`http://localhost:3000/api/dbuser/${id}`);
  const res = await response.json();
  return res.result;
=======
async function fetchData(id) {
  let responce = await fetch(`http://localhost:3000/api/dbuser/${id}`);
  responce = await responce.json();
  return responce.result
>>>>>>> 18eaa86f617a555f0a08414313e96c98f9c64747
}

export default async function page({ params }) {

  console.log("----------->",params)
  const singleUser = params?.user;

  const userData = await fetchData(singleUser);
<<<<<<< HEAD

  if(userData?.page===404){
=======
  console.log(userData);
  
  if(userData.page=="404"){
>>>>>>> 18eaa86f617a555f0a08414313e96c98f9c64747
    redirect("/not-found")
  }

  return (
    <div>
       {
                <div className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={userData?.avatar} alt={userData?.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{userData?.first_name} {userData?.last_name}</p>
                    <p>{userData?.email}</p>
                    </div>
                </div>
        }
    </div>
  );
}
