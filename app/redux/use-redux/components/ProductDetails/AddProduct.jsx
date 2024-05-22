import React from 'react'

export default function AddProduct() {
  return (
    <div>
        <h2 className='text-xl font-semibold'>Add New Product</h2>
        <input type="text" className='border border-gray-200 p-2 h-10 mt-5 mb-4 rounded-tl-md rounded-bl-md' placeholder='Enter Product Name' />
        <button className='bg-green-600 text-white px-5 py-2 rounded-tr-md rounded-br-md'>Add Product</button>
    </div>
  )
}
