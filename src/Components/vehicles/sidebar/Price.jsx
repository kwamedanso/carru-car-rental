import React, { useContext, useState } from 'react'
import FilterContext from "filterContext"

export default function Price() {
    const [rangeValue, setrangeValue] = useState(2000)
    const value = useContext(FilterContext)
    let { state: { allCars }, actions: { setFilteredCars } } = value;


    function handleChange(e) {
        setrangeValue(e.target.value)
        let newFilter = allCars.filter((car) => car.cost <= rangeValue)
        setFilteredCars([...newFilter])
    }


    return (
        <div>
            <p>{rangeValue}</p>
            <input style={{ width: '100%', color: 'black' }} min={0} max={1200} type="range" name="price" id="price" onChange={handleChange} value={rangeValue} />
        </div>
    )
}
