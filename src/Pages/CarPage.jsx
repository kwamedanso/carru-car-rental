import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsShieldFillCheck, BsFillClockFill } from 'react-icons/bs'
import { MdPayment } from 'react-icons/md'
import MainOverview from "Components/carpage/MainOverview";
import PricingOverview from "Components/carpage/PricingOverview";
import FilterContext from 'filterContext'
import CompletedBooking from "Components/carpage/CompletedBooking"
import "Components/carpage/styles/carpage.css"
import ScrollToTop from 'Components/shared/ScrollToTop'

export default function CarPage() {
    const [isOpen, setIsOpen] = useState(false)

    const params = useParams();
    const value = useContext(FilterContext)
    let { state: { allCars } } = value;
    let currentCar = allCars.find((car) => car.id === Number(params.id))


    return (
        <>
            <ScrollToTop />
            <div className='carpage-banner flex justify-content gap-100'>
                <div><BsShieldFillCheck /> <span>SECURE TRANSACTIONS</span></div>
                <div><BsFillClockFill /> <span>24-HOUR SERVICE</span></div>
                <div><MdPayment /><span>TRUSTED PAYMENTS</span></div>
            </div>

            <div className='section-margin'>
                <div className="carpage fs-200 ">
                    <MainOverview currentCar={currentCar} />
                    <PricingOverview cost={currentCar.cost} />
                </div>

                <div className='complete-booking'>
                    <button className='complete-booking-button' onClick={() => setIsOpen(true)}>Complete Booking</button>
                </div>
            </div>
            <CompletedBooking isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}



