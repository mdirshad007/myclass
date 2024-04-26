import React from 'react'

export default function notFound() {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <h1 className='text-7xl text-center mb-5 font-bold'>
            404 Error
        </h1>
        <p className='text-center'> Page is not found</p>
    </div>
  )
}
