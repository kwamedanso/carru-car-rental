import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import FilterContext from 'filterContext';

export default function CollectionTabs() {
    const [activeButton, setactiveButton] = useState('All')
    const value = useContext(FilterContext);

    const { state: { allCars, }, actions: { setFilteredCars } } = value;

    const activeTabs = ['All', 'Luxury', 'Family', 'Sports', 'Vintage']

    useEffect(() => {
        if (activeButton === 'All') {
            setFilteredCars(allCars.slice(0, 6))
        } else {
            setFilteredCars(() => {
                let newSlice = allCars.filter(item => item.category === activeButton)
                return newSlice.slice(0, 6)
            })
        }
    }, [activeButton, allCars, setFilteredCars])


    return (
        <>
            <div className="collection__tabs">
                {activeTabs.map(tab => {
                    return (
                        <button key={tab} className={`${activeButton === tab ? 'button margin-lt-100 active' : 'button margin-lt-100'}`} data-type='inverted' onClick={() => setactiveButton(tab)}>{tab}</button>
                    )
                })}
            </div>
        </>
    )
}
