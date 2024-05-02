import React from 'react'

async function fetchMyData(){
    let data= await fetch('https://review-reflection.vercel.app/store/feedback/brain-tech');
    data= await data.json();
    return data;
}

export default async function Page() {
  let storeData= await fetchMyData();
  console.log(storeData);
  return (
    <div className='max-w-6xl mx-auto mt-11'>
        <h1 className='text-4xl font-bold mb-7'>Featch Api from Server</h1>
        <p>Store Name: {storeData?.store_name}</p>
        <p>Store tag line: {storeData?.tag_line}</p>
        <p>Here is store questions:</p>
        {
            storeData?.questions.map((item,id)=>(
                <p key={item.id}>
                    {
                        item.question_text
                    }
                </p>
            ))
        }
    </div>
  )
}
