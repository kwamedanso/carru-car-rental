import React from 'react';
import { bodyType } from 'Data/bodytype';
import 'Components/home/styles/rentBy.css'
import RentBySctionTitle from 'Components/home/RentBySectionTitle';


export default function RentByBodyType() {
    return (
        <>
            <section id='body-type'>
                <div className="section-margin rent-by-wrapper padding-block-600">
                    <RentBySctionTitle variant={"Body Type"} />

                    <div className="rent__by__grid">
                        {bodyType.map(item => <div key={item.title} className='body__card'>
                            <img className='body__card-image' src={item.imageUrl} alt={item.title} />
                            <p className='fs-300'>{item.title}</p>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}
