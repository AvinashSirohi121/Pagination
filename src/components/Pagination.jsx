import { useState, useEffect } from "react"

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
    <div className="flex gap-3 justify-between items-center">
       
        <button 
        className="border-2 p-2 rounded-full font-bold cursor-pointer hover:bg-amber-200"
        disabled={currentPage==1}
        onClick={()=>handlePageChange("prev")}>{`<`}</button>
        <input 
        className=" bg-amber-400 w-[20px] decoration-0 text-black appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number" 
        value={currentPageNum} 
        onChange={(e)=>setCurrentPage(e.target.value)}
        onKeyDown={enterCurrentPage}/>
        <span>{maxPages}</span>
        <button 
        className="border-2 p-2 rounded-full font-bold cursor-pointer hover:bg-amber-200"
        disabled={currentPage==maxPages}
        onClick={()=>handlePageChange("next")}>{`>`}</button>
    </div>
  )
}

export default Pagination