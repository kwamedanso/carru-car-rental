import React from 'react';
import { Link } from 'react-router-dom';
import background from 'Images/background.png';
import "Components/home/styles/heroSection.css"



export default function HeroSection() {

    return (
        <>
            <section id='home' className="hero__section padding-block-300">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero-content_text">
                            <h1 className="fs-primary-heading fw-black line-ht-100">Discover the world on wheels with our car rental service</h1>
                            <p className=' | fs-300 padding-block-600 line-ht-300 padding-right-max'>Choose a wide range of cars that fit your style and budget. Experience the freedom of the open road with our reliable and efficient rental service.</p>
                            <div className="hero__content__buttons">
                                <Link data-type='inverted' data-attr='block-button' className='button margin-rt-100' to='/vehicles'>See all cars</Link>
                            </div>
                        </div>
                        <div className="hero__bg flex-container">
                            <img className='hero__bg-img' src={background} alt="hero-backgroung" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
