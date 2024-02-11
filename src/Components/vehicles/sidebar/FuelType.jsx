import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { fuelType } from "Components/vehicles/sidebar/filterData"

export default function FuelType() {
    return (
        <>
            <FilterItem title='Fuel Type' label={fuelType} filterKey='fuelType' />
        </>
    )
}
