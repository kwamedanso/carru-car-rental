import React from 'react';
import { services } from 'Data/services';
import SectionTitle from 'Components/shared/SectionTitle';
import 'Components/home/styles/services.css'

export default function Services() {
    return (
        <>
            <section id="services">
                <div className="services-container section-margin ta-center">
                    <SectionTitle header={'Our Services & Benefits'} description={'To make renting and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms'} />

                    <div className="service__list__grid">
                        {services.map(item => <div key={item.title} className="service__list__item">
                            <span>{item.icon}</span>
                            <div className="list__item__content">
                                <h2 className="fs-300 padding-block-100">{item.title}</h2>
                                <p className="list__item__description fs-200 fs-op line-ht-300">{item.content}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}