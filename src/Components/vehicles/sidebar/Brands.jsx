import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { brands } from "Components/vehicles/sidebar/filterData"

export default function Brands() {
    return (
        <>
            <FilterItem title='Brands' label={brands} filterKey='brand' />
        </>
    )
}
