import React from 'react';
import { howItWorks } from 'Data/howItWorks';
import mercedesMaybach from 'Images/Mercedes-Baybash.png'
import 'Components/home/styles/howItWorks.css'
import SectionTitle from 'Components/shared/SectionTitle';

export default function HowItWorks() {
    return (
        <>
            <section className='how-it-works-wrapper'>
                <div className="section-margin padding-block-600">

                    <SectionTitle header={'How it works'} description={'Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online'} />

                    <div className="how__it__works-content">
                        <div className="works-image">
                            <img className='how__it__works__img' src={mercedesMaybach} alt="mercedes" />
                        </div>
                        <div className='flex-container'>
                            <div className="works_list-items">
                                {howItWorks.map(item => <div key={item.title} className="works-item">
                                    <div className="works_icon" data-accent={item.accent}><div>{item.icon}</div></div>
                                    <div className="works-content">
                                        <h3 className="fs-400">{item.title}</h3>
                                        <p className="fs-200 fs-op padding-block-1">{item.content}</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}