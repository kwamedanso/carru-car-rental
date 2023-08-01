import React, { useContext } from 'react';
import CarCard from '../Components/CarCard';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import CollectionTabs from '../Components/CollectionTabs';
import '../Styles/ourCollection.css';
import FilterContext from '../Components/filterContext';





export default function OurCollection() {
    const value = useContext(FilterContext)
    const { state: { filteredCars } } = value;

    return (
        <>
            <section id="collection">
                <div className="our-collection-container">
                    <div className="collection-section__title | title-width">
                        <h2 className="fs-secondary-heading padding-block-300">Our Impressive Collection of Cars</h2>
                        <p className="fs-300 line-ht-300 fs-op">
                            Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
                        </p>
                    </div>
                    <div className="collection__content">
                        <div className="collection_content_tabs padding-block-300">
                            <CollectionTabs />
                        </div>
                        <div className="cars__grid">
                            {filteredCars.map((item) => {
                                return <CarCard key={item.model} imageUrl={item.imageUrl} model={item.model} cost={item.cost} maximumMiles={item.maximumMiles} transmission={item.transmission} persons={item.persons} fuelType={item.fuelType} />
                            })}
                        </div>
                    </div>
                    <div className='btn__container'>
                        <Link to='/vehicles' className='button flex-container'><span className='padding-right-1'>See all cars</span> <BsArrowRight /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
