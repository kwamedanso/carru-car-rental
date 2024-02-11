import React from 'react'

export default function SectionTitle({ header, description }) {
    return (
        <div className='section-title'>
            <h2 className='fs-secondary-heading line-ht-1'>{header}</h2>
            <p className='fs-300 fs-op padding-block-300'>{description}</p>
        </div>
    )
}
