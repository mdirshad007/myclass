import React from 'react'

export default function ProductView() {
  return (
    <div>
        <h2 className='text-xl font-semibold'>All Products Record</h2>
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 text-gray-600'>
            <li>product</li>
            <li>product</li>
            <li>product</li>
            <li>product</li>
        </ul>
    </div>
  )
}
