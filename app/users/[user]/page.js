import React from "react";
async function fetchData(id) {
  let responce = await fetch(`http://localhost:3000/api/dbuser/${id}`);
  responce = await responce.json();
  return responce;
}
export default async function page({ params }) {
  const singleUser = params.user;
  const userData = await fetchData(singleUser);
  console.log(userData);
  return (
    <div>
       {
            userData.map((item,id)=>(
                <div key={item.id} className='text-center'>
                    <div className='p-3 flex flex-col items-center gap-3'>
                    <img src={item.avatar} alt={item.first_name} className='w-28 h-28 object-cover rounded-full overflow-hidden'/>
                    <p className='font-bold'>{item.first_name} {item.last_name}</p>
                    <p>{item.email}</p>
                    </div>
                </div>
            )                
            )
        }
    </div>
  );
}
