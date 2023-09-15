import React from "react"
export default function Paginations({gotoNextPage,gotoPrevPage}){
    return(
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previos</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}