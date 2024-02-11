import React from 'react'

export default function SelectLocation(props) {
    return (
        <>
            <div className="select__location select__item">
                <label className='fs-300 fs-op' htmlFor="pick-location">{props.label}</label>
                <div className="search__location">
                    <span className='padding-left-100'>{props.icon}</span>
                    <input type="text" name="" id="" placeholder={props.placeholder} />
                </div>
            </div>
        </>
    )
}
