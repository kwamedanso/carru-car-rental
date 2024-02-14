import React, { useState, useContext, useEffect, useRef } from 'react'
import FilterContext from "filterContext";
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr'
import { scrollToTop } from 'Utility/Functions';
import "Components/vehicles/styles/filterBy.css"


export default function FilterItem({ title, filterKey, label, contents }) {
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState([])

    let checkboxContainer = useRef([]);

    const value = useContext(FilterContext);

    let { state: { allCars, resetButton }, actions: { setFilteredCars, setCurrentPage } } = value;


    useEffect(() => {
        for (let i = 0; i < checkboxContainer.current.length; i++) {
            checkboxContainer.current[i].checked = false;
        }
        setSelected([])
    }, [resetButton])



    useEffect(() => {
        setCurrentPage(1)
        let pushContainer = [];
        if (selected.length === 0) {
            setFilteredCars(allCars)
        } else {
            for (let i = 0; i < selected.length; i++) {
                let newFilter = allCars.filter((car) => car[filterKey] === selected[i])
                pushContainer.push(...newFilter)
            }
            setFilteredCars([...pushContainer])
        }
        scrollToTop()
    }, [selected, allCars, filterKey, setCurrentPage, setFilteredCars])


    function handleFilter(event, filterLabel) {
        const { checked } = event.target;

        if (checked) {
            const elementExist = selected.includes(filterLabel);
            if (elementExist) {
                setSelected((prevItems) => prevItems.filter((item) => item !== filterLabel))
            } else {
                setSelected(prevItems => [...prevItems, filterLabel])
            }
        } else {
            setSelected((prevItems) => prevItems.filter((item) => item !== filterLabel))
        }
    }



    function openFilter(e) {
        e.stopPropagation();
        setIsActive(!isActive)
    }

    return (
        <>
            <div className='filter-item'>
                <div className={`filter-item-header ${isActive ? 'active' : ''}`} onClick={openFilter}>
                    <p className='fw-semi-bold'>{title}</p>
                    <div className="cross-sign">
                        {isActive ? <GrFormSubtract /> : <AiOutlinePlus />}
                    </div>
                </div>

                <div className={`filter-item-body ${isActive && 'active'}`}>
                    {label.map((filterLabel, index) => <div key={filterLabel}>
                        <label htmlFor={filterLabel}>
                            <input type="checkbox" name={filterKey} id={filterLabel} onChange={(e) => handleFilter(e, filterLabel)} ref={(element) => checkboxContainer.current[index] = element} />{" "}
                            {filterLabel}
                        </label>
                    </div>)}

                </div>
            </div>
            <hr />
        </>
    )
}
