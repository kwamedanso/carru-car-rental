import React from 'react'
import ReactDOM from 'react-dom';
import './styles/complete-booking.css'


export default function CompletedBooking({ isOpen, onClose }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className='complete-booking-modal'>
                <h1>Modal</h1>
                <button onClick={onClose}>Close</button>
            </div>

            <div className='overlay'></div>
        </>,
        document.getElementById('portal')
    )
}
