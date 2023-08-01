import React, { useState, useContext, useEffect } from 'react'
import FilterContext from '../filterContext'

export default function CheckItem(props) {
    const [checked, setChecked] = useState(false);
    // const [newFilter, setNewFilter] = useState([]);


    const value = useContext(FilterContext);

    let { state: { allCars, activeButton, filteredCars, selectedBrands, newFilter }, actions: { setFilteredCars, setActiveButton, setSelectedBrands, setNewFilter } } = value;

    useEffect(() => {

        if (selectedBrands.length < 1) {
            setFilteredCars(allCars);
        } else {
            for (let i = 0; i < selectedBrands.length; i++) {
                let newFilt = allCars.filter((item) => item.brand === selectedBrands[i])
                setNewFilter((prevItems) => {
                    return [...prevItems, ...newFilt]
                })
            }
            setFilteredCars([...newFilter])
        }
    }, [selectedBrands])


    function handleFilter(event, label) {


        let isChecked = event.target.checked;

        if (isChecked === true) {
            const elementExist = selectedBrands.includes(label);
            if (elementExist) {
                setSelectedBrands((prevItems) => prevItems.filter((item) => item !== label))

            } else {
                setSelectedBrands(prevItems => [...prevItems, label])
            }
        } else {
            setSelectedBrands((prevItems) => prevItems.filter((item) => item !== label))
        }


        let newFilt = filteredCars.filter(item => item.brand === props.label)
        setFilteredCars(newFilt)
        // console.log(newFilt);
    }


    return (
        <div className='check-item'>
            <label className={`fs-200 ${checked ? 'fw-semi-bold' : 'fs-op'}`}>
                <input type="checkbox"
                    onChange={(event) => handleFilter(event, props.label)} />
                {' '}
                {props.label}
            </label>
        </div>
    )
}
