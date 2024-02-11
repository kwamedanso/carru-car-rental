import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { category } from "Components/vehicles/sidebar/filterData"

export default function Model() {
    return (
        <>
            <FilterItem title='Category' label={category} filterKey='category' />
        </>
    )
}
