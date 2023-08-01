import React, { useState } from 'react'
import { VscFilter } from 'react-icons/vsc'
import '../Styles/sort.css'


export default function FilterButton(props) {
    const [open, setOpen] = useState(false)

    function handleClick() {
        console.log('clicked');
        props.setOpenFilter(!props.openFilter)
    }
    return (
        <button className={`sort filter-button ${props.openFilter && 'filter-active'}`}
            onClick={handleClick}>
            <VscFilter />
            <span className='sort-label'>Filter</span>
        </button>
    )
}