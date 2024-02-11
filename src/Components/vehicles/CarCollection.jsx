import React, { useContext } from 'react'
import FilterContext from 'filterContext'
import CarCard from 'Components/shared/CarCard';
import ShowFilters from "Components/vehicles/ShowFilters"
import SearchBox from "Components/vehicles/SearchBox"
import Pagination from "Components/vehicles/Pagination"
import "Components/vehicles/styles/carCollection.css"

export default function CarCollection({ openFilter, setOpenFilter }) {
    let value = useContext(FilterContext)

    const { state: { filteredCars, currentPage }, actions: { setCurrentPage } } = value;

    const postPerPage = 20;
    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;


    return (
        <>
            <div className={`car-collection ${openFilter && 'inactive'}`}>
                <SearchBox />
                <ShowFilters setOpenFilter={setOpenFilter} />

                {filteredCars.length === 0 ? <div className="no-cars">
                    <h1>No cars for current filter</h1>
                </div> : <div className='collection-grid'>
                    {filteredCars.slice(firstPost, lastPost).map((car) => {
                        return <CarCard key={car.id} {...car} />
                    })}
                </div>
                }

                {filteredCars.length >= 1 ? <Pagination postPerPage={postPerPage} totalPost={filteredCars.length} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : null}
            </div>
        </>
    )
}
