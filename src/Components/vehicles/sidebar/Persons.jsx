import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { persons } from "Components/vehicles/sidebar/filterData"

export default function Persons() {
    return (
        <>
            <FilterItem title={'Persons'} label={persons} filterKey={'persons'} />
        </>
    )
}
