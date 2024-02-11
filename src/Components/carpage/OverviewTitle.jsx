import React from 'react'

export default function OverviewTitle({ title, description }) {
    return (
        <div>
            <p className='fs-300 fw-bold'>{title}</p>
            <p className='fs-200'>{description}</p>
        </div>
    )
}
