import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { transmission } from "Components/vehicles/sidebar/filterData"

export default function Transmission() {
    return (
        <>
            <FilterItem title='Transmission' label={transmission} filterKey='transmission' />
        </>
    )
}
