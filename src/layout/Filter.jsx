import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import '../layout/styles/filter.css'
import FilterItem from '../Components/FilterItem'
import { brands, persons, transmission, fuelType, bodyType, category } from '../Components/filter components/filterData'
import FilterContext from '../Components/filterContext'

export default function Filter({ openFilter, setOpenFilter }) {
    const value = useContext(FilterContext)

    let { state: { allCars }, actions: { setFilteredCars } } = value;

    function handleReset() {
        setFilteredCars(allCars)
    }

    // console.log(allCars);
    return (
        <>
            <div className={`filter ${openFilter ? 'filter-active' : 'filter-inactive'}`}>
                <div className="filter-nav">
                    <div className="filter-close" onClick={() => {
                        setOpenFilter(!openFilter)
                    }}><AiOutlineClose /></div>
                    <div><span className='filter-text fw-bold'>Filter</span></div>
                    <div className="reset-button fw-semi-bold" onClick={handleReset}>Reset</div>
                </div>
                <div className="filter-body">
                    <FilterItem title='Brand' content={brands} />
                    <hr />
                    <FilterItem title='Body Type' content={bodyType} />
                    <hr />
                    <FilterItem title='Category' content={category} />
                    <hr />
                    <FilterItem title='Transmission' content={transmission} />
                    <hr />
                    <FilterItem title='Fuel Type' content={fuelType} />
                    <hr />
                    <FilterItem title='Persons' content={persons} />

                </div>
            </div>
        </>
    )
}


