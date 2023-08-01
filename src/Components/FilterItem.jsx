import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import CheckItem from './filter components/CheckItem';


export default function FilterItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='filter-flex-container filter-item padding-block-1' onClick={() => setOpen(!open)}>
                <p className='fw-semi-bold'>{props.title}</p>
                <BsChevronDown className={`transition-400 ${open && 'rotate-180'}`} />
            </div>
            <div className={`filter-body-content ${open ? 'visible' : 'hidden'}`}>
                {props.content?.map((item, index) => <CheckItem key={index} label={item} />)}
            </div>
        </>
    )
}
