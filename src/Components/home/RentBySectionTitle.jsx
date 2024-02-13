import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';


export default function RentBySctionTitle({ variant }) {
    return (
        <div className="rent__by__title flex jc-space-between">
            <p className="fs-400 fw-semi-bold">Rent by {variant}</p>
            <Link to='/vehicles' className='button flex-container' data-type='inverted' data-attr='block-button'><span className='padding-right-1'>View all</span> <BsArrowRight /></Link>
        </div>
    )
}
