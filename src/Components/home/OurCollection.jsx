import React, { useContext } from 'react';
import CarCard from 'Components/shared/CarCard';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import CollectionTabs from 'Components/home/CollectionTabs';
import FilterContext from 'filterContext';
import SectionTitle from 'Components/shared/SectionTitle';
import 'Components/home/styles/ourCollection.css';





export default function OurCollection() {
    const value = useContext(FilterContext)
    const { state: { filteredCars } } = value;

    return (
        <>
            <section id="collection">
                <div className="collection-content section-margin">
                    <SectionTitle header={'Our Impressive Collection of Cars'} description={'Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience'} />

                    <div className="collection_content_tabs padding-block-300">
                        <CollectionTabs />
                    </div>


                    <div className="cars__grid-collection">
                        {filteredCars.map((item) => {
                            return <CarCard key={item.model} {...item} />
                        })}
                    </div>

                    <div className='btn__container'>
                        <Link to='/vehicles' className='button flex-container'><span className='padding-right-'>See all cars</span> <BsArrowRight /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
