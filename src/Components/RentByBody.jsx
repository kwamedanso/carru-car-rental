import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { bodyType } from '../Data/bodytype';
import '../Styles/rentByBody.css'
import BodyCard from './BodyCard';

export default function RentByBody() {
    return (
        <>
            <section id='body-type'>
                <div className="rent__by__body__container">
                    <div className="rent__by__title flex-container">
                        <p className="fs-400 fw-bold">Rent by body type</p>
                        <Link to='/vehicles' className='button flex-container' data-type='inverted' data-attr='block-button'><span className='padding-right-1'>View all</span> <BsArrowRight /></Link>
                    </div>
                    <div className="rent__by__grid">
                        {bodyType.map(item => <BodyCard key={item.title} title={item.title} imgUrl={item.imageUrl} />)}
                    </div>
                </div>
            </section>
        </>
    )
}
