import React from 'react'
import OptionalExtras from "Components/carpage/OptionalExtras";
import PaymentInfo from "Components/carpage/PaymentInfo";
import DriverInfo from "Components/carpage/DriverInfo"
import CarOverview from "Components/carpage/CarOverview"

export default function MainOverview({ currentCar }) {
    return (
        <div>
            <p className='fs-250 padding-block-100'><span className='fw-bold'>
                Almost done!</span> Enter your details and complete your booking.
            </p>

            <CarOverview currentCar={currentCar} />
            <OptionalExtras />
            <DriverInfo />
            <PaymentInfo />
        </div>
    )
}