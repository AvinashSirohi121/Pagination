import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch"
import Products from "./components/Products";
import Header from "./components/Header";

const App = () => {

  const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        limit: 10,
        maxPages:null
  });

  const productsInfo=useFetch({limit:pageInfo.limit,currentPage:pageInfo.currentPage});
 
  useEffect(()=>{
   //console.log("ProductInfo =>",productsInfo)
   let maxPages = Math.ceil(productsInfo?.total/pageInfo.limit)
   setPageInfo((prev)=>({
    ...prev,maxPages:maxPages
   }))
  },[productsInfo])

  return (
    <>
    <Header/>
     <div className='realtive w-10/12 m-auto'>
       
       <Products
        productsInfo={productsInfo}
           currentPage={pageInfo.currentPage}/>
       
      </div>
      <Pagination 
        setPageInfo={setPageInfo} 
        currentPage={pageInfo.currentPage}
        maxPages={pageInfo.maxPages}/>
    </>
   
    
   
  )
}

export default App