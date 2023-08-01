import React from 'react';
import { howItWorks } from '../Data/howItWorks';
import mercedesMaybach from '../Images/Mercedes-Baybash.png'
import '../Styles/howItWorks.css'

export default function HowItWorks() {
    return (
        <>
            <div className="how-it-works-container">
                <div className="how-it-works-section__title title-width">
                    <h2 className="fs-secondary-heading |line-ht-1">How it works</h2>
                    <p className="fs-300 fs-op padding-block-300 line-ht-300">Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
                </div>
                <div className="how__it__works__content">
                    <div className="works-image">
                        <img className='how__it__works__img' src={mercedesMaybach} alt="mercedes" />
                    </div>
                    <div className="works_list-items">
                        {howItWorks.map(item => <ListItem key={item.title} title={item.title} content={item.content} icon={item.icon} accent={item.accent} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

function ListItem(props) {
    return (
        <>
            <div className="works-item">
                <div className="works_icon" data-accent={props.accent}><div>{props.icon}</div></div>
                <div className="works-content">
                    <h3 className="fs-400">{props.title}</h3>
                    <p className="fs-200 fs-op padding-block-1">{props.content}</p>
                </div>
            </div>
        </>
    )
}