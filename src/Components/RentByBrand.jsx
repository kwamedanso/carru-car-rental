import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../Data/cars';
import RentByCard from './RentByCard';
import { BsArrowRight } from 'react-icons/bs';
import '../Styles/rentByBrand.css'

export default function RentByBrand(props) {

    let matchedCars = [];
    for (let i = 0; i < 12; i++) {
        matchedCars.push(cars[i])
    }

    return (
        <>
            <section id='brands'>
                <div className="rent__by__brand__container">
                    <div className="rent__by__title flex-container">
                        <p className="fs-400 fw-bold">Rent by Brands</p>
                        <Link to='/vehicles' className='button flex-container' data-type='inverted' data-attr='block-button'><span className='padding-right-1'>View all</span> <BsArrowRight /></Link>
                    </div>
                    <div className="rent__by__grid">
                        {matchedCars.map((item) => <RentByCard key={item.brand} brand={item.brand} icon={item.icon} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
