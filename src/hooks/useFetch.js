import { useEffect, useState } from "react";
import axios from "axios";



export const useFetch=({limit,currentPage})=>{
    console.log("Limit =>",limit,", currentPage =>",currentPage)

    const URL = `https://dummyjson.com/products`;

    const [data,setData]= useState({
        productData:{},
        loading:false,
        error:"",
        total:0,
    });

     useEffect(()=>{
       if(!data?.productData[currentPage]){
          let skip= currentPage==1 ?0:currentPage*limit;
        let url= URL + `?limit=${limit}&skip=${skip}`
        fetchData(url,currentPage);
        
       }
    },[currentPage,limit])


    const fetchData=async(url,page)=>{
        try {
            setData((prev)=>({
                ...prev,
                loading:true
            }))

            let result =await axios(url);
            //console.log("Result =>",result?.data);
            
            
                 setData((prev) => ({
                    ...prev,
                    total:result?.data?.total,
                    productData: {
                    ...prev.productData,
                    [page]: result.data?.products,
                    
                    }
      }));
            
        } catch (error) {
            console.log("Error =>",error);
            setData((prev)=>({
                ...prev,
                error:error
            }))
        }finally{
            setData((prev)=>({
                ...prev,
                loading:false
            }))
            console.log("Finally =>",data)

        }
    }
    
   
    return data

}