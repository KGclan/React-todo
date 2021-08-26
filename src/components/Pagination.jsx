import React, {useState} from "react"
import "../sass/components/_todoadd.sass"
import {getPagesArray} from "../utils/pages"
import "../sass/components/_pagination.sass"

function Pagination({page, changePage, totalPages}) {
  
  let pagesArray = getPagesArray(totalPages)
  const [paginationStart, setPaginationStart] = useState(0)
  const [paginationEnd, setPaginationEnd] = useState(3)

  const paginationPlus = () => {
    if(paginationEnd < pagesArray.length) {
      setPaginationStart(paginationStart + 3)
      setPaginationEnd(paginationEnd + 3)
    }
  }

  const paginationMinus = () => {
    if(paginationStart > 0) {
      setPaginationStart(paginationStart - 3)
      setPaginationEnd(paginationEnd - 3)
    }
  }

  return(
    <div className="pagination"> 
      <button className="pagination__control pagination__btn" onClick={paginationMinus}>&lArr;</button>
      { pagesArray.slice(paginationStart,paginationEnd).map( p =>
        <button 
          className="pagination__btn" 
          key={p} 
          onClick={() => changePage(p)}
        >
          {p}
        </button>
        )
      }
      <button className="pagination__control pagination__btn" onClick={paginationPlus}>&rArr;</button>
    </div>
    )
}

export default Pagination
