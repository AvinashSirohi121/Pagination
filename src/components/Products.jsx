import React from 'react'
import Product from './Product'


const Products = ({productsInfo,currentPage}) => {
console.log("Products =>",productsInfo?.productData[currentPage],", currentPage =>",currentPage)
    //console.log("ProductsInfo =>",productsInfo)
  return (
    <div className='w-full h-full m-auto'>
    
        {productsInfo.loading==true ? <div>Loading</div> :

        productsInfo.total ==0 ? 
        <div>No Products Found</div> :
        <div className='flex flex-wrap gap-8 px-[40px] py-[40px]'>
            {productsInfo?.productData[currentPage]?.map((p)=>(
                <div key={p?.id} className=''>
                    <Product  productData={p}/>
                </div>
            ))}

        </div> }
        {}
        <div>

        </div>

    </div>
  )
}

export default Products