import React from 'react'

export default function SelectDate(props) {
    return (
        <>
            <div className="select__date select__item">
                <label className='fs-300 fs-op' htmlFor="pick-date">{props.label}</label>
                <div className="search__date">
                    <input type="date" name="date" id="date" placeholder='DD/MM/YYYY' />
                </div>
            </div>
        </>
    )
}
