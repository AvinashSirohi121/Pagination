import { useState, useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Pagination = ({setPageInfo,currentPage,maxPages}) => {
    const [currentPageNum,setCurrentPageNum] = useState(currentPage)

useEffect(() => {
    setCurrentPageNum(currentPage);
  }, [currentPage]);

  const setCurrentPage = (page) => {
    const num = Number(page);
    if (!isNaN(num)) {
      setCurrentPageNum(num);
    }
  };

  const enterCurrentPage = (e) => {
    if (e.key === "Enter") {
      const page = Number(currentPageNum);
      if (!isNaN(page) && page > 0 && page <= maxPages) {
        setPageInfo((prev) => ({ ...prev, currentPage: page }));
      }
    }
  };
    const handlePageChange = (action) => {
              if (action === "prev") {
                  setPageInfo((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage - 1
                  }))
              } else if (action === "next") {
                  setPageInfo((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage + 1
                  }))
              }
          }

  return (
    <div className=" w-full h-full bg-gray-200">
       
       <div className="float-right  gap-2 flex items-center text-xl">
        <button 
        className={`font-bold cursor-pointer hover:text-gray-600 ${currentPage==1 ? "text-gray-400":"text-gray-900"}`}
        disabled={currentPage==1}
        onClick={()=>handlePageChange("prev")}><FaAngleLeft className="text-2xl"/></button>
        <input 
        className=" bg-gray-300 border-gray-600 border-2 w-[25px] p-1 decoration-0 text-black appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number" 
        value={currentPageNum} 
        onChange={(e)=>setCurrentPage(e.target.value)}
        onKeyDown={enterCurrentPage}/>
        <span>{`/`}{maxPages}</span>
        <button 
        className=" font-bold cursor-pointer hover:text-gray-600"
        disabled={currentPage==maxPages}
        onClick={()=>handlePageChange("next")}><FaAngleRight  className="text-2xl"/></button>
        </div>
    </div>
  )
}

export default Pagination