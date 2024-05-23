import React from 'react'
import ProductView from './components/ProductView/ProductView'
import AddProduct from './components/ProductDetails/AddProduct'

export default function page() {
  return (
    <>
    <AddProduct/>
    <hr className='my-10'/>
    <ProductView/>
    </>
  )
}
