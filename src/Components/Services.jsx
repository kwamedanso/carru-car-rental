import React from 'react';
import { services } from '../Data/services';
import '../Styles/services.css'

export default function Services() {
    return (
        <>
            <section id="services">
                <div className="services-container container-dark">
                    <div className="services-section-title title-width">
                        <h2 className="fs-secondary-heading">Our Services & Benefits</h2>
                        <p className="fs-300 padding-block-300 line-ht-300">To make renting and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.</p>
                    </div>
                    <div className="service__list__grid">
                        {services.map(item => <ListItem key={item.title} icon={item.icon} title={item.title} content={item.content} />)}
                    </div>
                </div>
            </section>
        </>
    )
}


function ListItem(props) {
    return (
        <>
            <div className="service__list__item">
                <span>{props.icon}</span>
                <div className="list__item__content">
                    <h2 className="fs-300 padding-block-100">{props.title}</h2>
                    <p className="list__item__description fs-200 fs-op line-ht-300">{props.content}</p>
                </div>
            </div>
        </>
    )
}