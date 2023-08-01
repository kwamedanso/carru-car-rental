import React from 'react'

export default function BodyCard(props) {
    return (
        <>
            <div className="body__card">
                <img className='body__card-image' src={props.imgUrl} alt={props.title} />
                <p className='fs-300'>{props.title}</p>
            </div>
        </>
    )
}
