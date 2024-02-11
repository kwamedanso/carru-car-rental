import React, { useContext, useEffect, useState } from 'react'
import extras from 'Data/extras'
import OverviewTitle from "Components/carpage/OverviewTitle"
import FilterContext from "filterContext"

export default function OptionalExtras() {
    const [options, setOptions] = useState(extras)
    const value = useContext(FilterContext);
    let { actions: { setAddedExtras } } = value;

    useEffect(() => {
        let newExtra = options.filter(item => item.isAdded === true)
        setAddedExtras([...newExtra])
    }, [options, setAddedExtras])


    function handleChange(e, extra) {
        let { name, checked } = e.target;
        setOptions(
            options.map(item => {
                if (item.label === name) {
                    return { ...item, isAdded: checked }
                } else {
                    return item;
                }
            })
        )
    }
    return (
        <div className='optional-extras margin-top'>
            <OverviewTitle title='Optioinal Extras' description={'Request cannot be guaranteed as they are subject to availability. Payment due at pick-up'} />
            <div className="extras-body">
                {options.map(item => <div key={item.id} className='extras-item flex jc-space-between '>
                    <div>
                        <input type="checkbox" name={item.label} id={item.label} checked={item.isAdded} onChange={(e) => handleChange(e, item)} />
                        {' '}<label htmlFor={item.label} className='fs-250'>{item.label}</label>
                    </div>
                    <p>
                        ${item.cost} per day
                    </p>
                </div>)}
            </div>
        </div>
    )
}
