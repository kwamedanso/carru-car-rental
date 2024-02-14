import React, { useContext } from 'react'
import FuelType from "Components/vehicles/sidebar/FuelType"
import Brands from 'Components/vehicles/sidebar/Brands'
import Persons from 'Components/vehicles/sidebar/Persons'
import Transmission from 'Components/vehicles/sidebar/Transmission'
import BodyType from 'Components/vehicles/sidebar/BodyType'
import Category from 'Components/vehicles/sidebar/Category'
import FilterContext from "filterContext"
import "Components/vehicles/sidebar/styles/sidebar.css"



export default function Sidebar({ openFilter, setOpenFilter }) {

    const value = useContext(FilterContext)
    let { state: { allCars }, actions: { setFilteredCars, setResetButton } } = value;

    function resetAll() {
        setFilteredCars(allCars)
        setResetButton(prev => !prev)
    }

    return (
        <div className={`sidebar ${openFilter && 'active'}`}>
            <div className="sidebar-header">
                <p className='fs-300 fw-bold'>Filter</p>
                <button className='reset-button' onClick={resetAll}>Reset all</button>
            </div>

            <div className="sidebar-body">
                <Brands />
                <Persons />
                <Transmission />
                <FuelType />
                <BodyType />
                <Category />
            </div>

            <button className='close-button' onClick={() => setOpenFilter(false)}>Close</button>
        </div>
    )
}
