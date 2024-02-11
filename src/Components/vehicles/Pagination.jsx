import React, { useContext, useEffect } from 'react'
import "Components/vehicles/styles/pagination.css"
import FilterContext from "filterContext"
import { scrollToTop } from 'Utility/Functions'

export default function Pagination({ postPerPage, totalPost }) {
    const value = useContext(FilterContext)
    let { state: { currentPage }, actions: { setCurrentPage } } = value;
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    useEffect(() => {
        scrollToTop()
    }, [currentPage])


    function nextPage() {
        if (currentPage === pages.at(-1)) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage((page) => page + 1)
        }
    }

    function prevPage() {
        if (currentPage === pages.at(0)) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage((page) => page - 1)
        }
    }


    return (
        <div className='pagination'>

            <button className={`pagination-button ${currentPage === pages.at(0) ? 'inactive' : ''}`} onClick={prevPage}>{'<'}</button>

            {pages.map(page => <button key={page} className={`pagination-button ${currentPage === page ? 'active' : ''}`} onClick={() => setCurrentPage(page)}>{page}</button>)}

            <button className={`pagination-button ${currentPage === pages.at(-1) ? 'inactive' : ''}`} onClick={nextPage}>{'>'}</button>

        </div>
    )
}
