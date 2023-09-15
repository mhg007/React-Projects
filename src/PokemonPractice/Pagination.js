import React from "react";

const Paginations = ({gotoNextPage,gotoPrevPage}) => {
    return(
        <>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </>
    )
}
export default Paginations
// const App: React.FC = () => <Pagination defaultCurrent={6} total={500} />;
