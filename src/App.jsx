import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch"
import Products from "./components/Products";

const App = () => {

  const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        limit: 10,
        maxPages:null
  });

  const productsInfo=useFetch({limit:pageInfo.limit,currentPage:pageInfo.currentPage});
 
  useEffect(()=>{
   console.log("ProductInfo =>",productsInfo)
   let maxPages = Math.ceil(productsInfo?.total/pageInfo.limit)
   setPageInfo((prev)=>({
    ...prev,maxPages:maxPages
   }))
  },[productsInfo])

  return (
    <div className='flex flex-col justify-between items-center'>
        <div className='p-4 bg-blue-200 max-h-[300px] overflow-auto'>
          <Products
           productsInfo={productsInfo}/>
       
        </div>

        <Pagination 
        setPageInfo={setPageInfo} 
        currentPage={pageInfo.currentPage}
        maxPages={pageInfo.maxPages}/>

       
     </div>
    
   
  )
}

export default App