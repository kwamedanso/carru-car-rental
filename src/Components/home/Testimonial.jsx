import React from 'react';
import 'Components/home/styles/testimonial.css'
import SectionTitle from 'Components/shared/SectionTitle';

export default function Testimonial() {
    return (
        <>
            <section id="testimonial">
                <div className="testimonial__wrapper section-margin padding-block-600">
                    <SectionTitle header={'Trusted by Thousands of happy customers'} description={'Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and convirm your vehicle of choice online'} />
                </div>
            </section>
        </>
    )
}
