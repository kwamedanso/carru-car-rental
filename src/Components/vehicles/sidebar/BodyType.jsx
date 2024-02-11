import React from 'react'
import FilterItem from "Components/vehicles/FilterItem"
import { bodyType } from "Components/vehicles/sidebar/filterData"

export default function BodyType() {
    return (
        <>
            <FilterItem title='Body Type' label={bodyType} filterKey='bodyType' />
        </>
    )
}
