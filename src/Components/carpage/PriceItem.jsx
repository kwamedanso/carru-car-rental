import React from 'react'

export default function PriceItem({ label, price }) {
    return (
        <>
            <p className='fw-semi-bold'>{label}</p>
            <p className='fw-semi-bold'>${price.toFixed(1)}</p>
        </>
    )
}
