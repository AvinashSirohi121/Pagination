import React from 'react'

const Product = ({productData}) => {
  return (
    <div className='w-[350px] p-2 bg-gray-100 rounded-xl shadow-gray-200'>
        <h2 className='text-2xl flex justify-center'>{productData?.title}</h2>
        <img src={productData?.images[0]} 
        loading='lazy'
         className='h-[300px] flex justify-center'/>
        
    </div>
  )
}

export default Product