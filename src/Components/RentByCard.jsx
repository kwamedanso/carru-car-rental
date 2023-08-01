import React from 'react';
import '../Styles/rentByCard.css'

export default function RentByCard(props) {
    return (
        <>
            <div className="rent__by__card">
                <span className="rent__by_icon">{props.icon}</span>
                <p className="fs-300">{props.brand}</p>
            </div>
        </>
    )
}
