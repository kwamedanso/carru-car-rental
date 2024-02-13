import React from 'react';
import { planTripLists } from 'Data/planTripLists';
import 'Components/home/styles/planTrip.css'
import SectionTitle from 'Components/shared/SectionTitle';

export default function PlanTrip() {
    return (
        <>
            <section id='plan-trip' className='padding-block-600'>
                <div className="section-margin ta-center">

                    <SectionTitle header={'Better Way to Find Your Perfect Cars'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores ducimus rem consequatur repellat voluptates'} />
                    <div className="plan__trip__grid">
                        {planTripLists.map(item => {
                            return <div key={item.title} className="list-item">
                                <span data-accent={item.accent}>{item.icon}</span>
                                <div className="list__item__content">
                                    <h2 className="fs-300 padding-block-100">{item.title}</h2>
                                    <p className="fs-200 fs-op line-ht-500 padd-">{item.content}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}