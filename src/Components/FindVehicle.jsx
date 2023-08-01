import React from 'react'
// import Button from './Button'
import SelectLocation from './SelectLocation'
import SelectDate from './SelectDate'
import { GrLocation } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs'
import '../Styles/findVehicle.css'

export default function FindVehicle() {
    return (
        <>
            <section id='find-Vehicle'>
                <div className="find__container">
                    <div className="find__vehicle__content">
                        <SelectLocation label='Pick-up Location' placeholder='Search a location' icon=<GrLocation /> />
                        <SelectDate label='Pick-up date' />
                        <SelectLocation label='Drop-off Location' placeholder='Search a location' icon=<GrLocation /> />
                        <SelectDate label='Drop-off date' />
                        <div className='btn__container'>
                            <button className='button button-wd'><span>Find a Vehicle</span> <span><BsArrowRight /></span></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
