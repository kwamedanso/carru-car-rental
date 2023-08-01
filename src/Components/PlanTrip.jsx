import React from 'react';
import { planTripLists } from '../Data/planTripLists';
import '../Styles/planTrip.css'

export default function PlanTrip() {
    return (
        <>
            <section id='plan-trip'>
                <div className="plan-trip-container">
                    <div className="plan__trip__content | ta-center">
                        <div className="plan_section__title title-width">
                            <h2 className="fs-secondary-heading |line-ht-1">Better Way to Find Your Perfect Cars</h2>
                            <p className="fs-300 fs-op padding-block-300">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores ducimus rem consequatur repellat voluptates.
                            </p>
                        </div>
                        <div className="plan__trip__grid">
                            {planTripLists.map(item => {
                                return <ListItem key={item.title} icon={item.icon} title={item.title} content={item.content} accent={item.accent} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ListItem(props) {
    return (
        <>
            <div className="list-item">
                <span data-accent={props.accent}>{props.icon}</span>
                <div className="list__item__content">
                    <h2 className="fs-300 padding-block-100">{props.title}</h2>
                    <p className="fs-200 fs-op line-ht-500 padd-x">{props.content}</p>
                </div>
            </div>
        </>
    )
}