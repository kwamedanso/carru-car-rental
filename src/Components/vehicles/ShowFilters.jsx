import React, { useState, useContext, useRef } from 'react'
import { FiFilter } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'
import "Components/vehicles/styles/showFilters.css"
import FilterContext from "filterContext"



export default function ShowFilters({ setOpenFilter }) {
    const [sortActive, setSortActive] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState('')

    const radioButtons = useRef([]);

    const value = useContext(FilterContext)
    let { state: { allCars, filteredCars }, actions: { setFilteredCars } } = value;

    let initialState = [];
    allCars.forEach((item => initialState.push(item)))

    function sortPrice(e) {
        let value = e.target.value
        setSelectedRadio(value)
        let sortedPrice = filteredCars.sort((a, b) => {
            if (value === 'low-to-high') {
                return a.cost - b.cost
            } else {
                return b.cost - a.cost
            }
        })
        setFilteredCars(([...sortedPrice]))
    }



    function clearAllRadios() {
        for (let i = 0; i < radioButtons.current.length; i++) {
            radioButtons.current[i].checked = false;
            setSelectedRadio('')
            let sortedPrices = filteredCars.sort((a, b) => {
                return a.id - b.id;
            })
            setFilteredCars([...sortedPrices]);
        }
    }

    return (
        <div className='show-filters'>
            <div className="filter-button-wrapper">
                <button className='filter-button' onClick={() => setOpenFilter(true)}><span>Filter</span><FiFilter /></button>
            </div>

            <div className="number-of-cars">
                <p className='fs-300'>Showing {filteredCars.length} {filteredCars.length > 1 ? 'cars' : 'car'}</p>
            </div>

            <div className="sort-button-wrapper">
                <button className='sort-button' onClick={() => setSortActive(!sortActive)}>
                    <span>Sort by</span>
                    <RxCaretSort />
                </button>
                <div className={`sort-content ${sortActive ? 'active' : ''}`} >

                    <div className='sort-by-radios'>
                        <div>
                            <input type="radio" name="sort-price" id="low-to-high" value={'low-to-high'} onChange={sortPrice} ref={(element) => { radioButtons.current[0] = element }} /><label htmlFor="low-to-high" > Price(low to high)</label>
                        </div>
                        <div>
                            <input type="radio" name="sort-price" id="high-to-low" value={'high-to-low'} onChange={sortPrice} ref={(element) => { radioButtons.current[1] = element }} /><label htmlFor="high-to-low"> Price(high to low)</label>
                        </div>
                        <button className='clear-selection-btn' onClick={clearAllRadios}>Clear selection</button>
                    </div>


                </div>
            </div>

        </div>
    )
}
