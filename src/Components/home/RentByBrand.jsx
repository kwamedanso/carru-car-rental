import React from 'react';
import { cars } from 'Data/cars';
import RentBySctionTitle from 'Components/home/RentBySectionTitle';
import 'Components/home/styles/rentBy.css'

export default function RentByBrand(props) {

    let newMatch = cars.slice(0, 12);

    return (
        <>
            <section id='brands'>
                <div className="section-margin rent-by-wrapper padding-block-600">
                    <RentBySctionTitle variant={"Brand"} />
                    <div className="rent__by__grid">
                        {newMatch.map((item) => <div key={item.brand} className="rent__by__card">
                            <span className="rent__by_icon">{item.icon}</span>
                            <p className="fs-300">{item.brand}</p>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
