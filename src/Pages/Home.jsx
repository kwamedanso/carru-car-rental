import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import FindVehicle from '../Components/FindVehicle';
import PlanTrip from '../Components/PlanTrip';
import OurCollection from '../layout/OurCollection';
import RentByBrand from '../Components/RentByBrand';
import HowItWorks from '../Components/HowItWorks';
import RentByBody from '../Components/RentByBody';
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
import FilterContext from '../Components/filterContext'
import { cars } from '../Data/cars';



export default function Home() {
    const [allCars] = useState(cars);
    const [filteredCars, setFilteredCars] = useState(cars);
    const [activeButton, setactiveButton] = useState('All');

    const value = { state: { allCars, filteredCars, activeButton }, actions: { setFilteredCars, setactiveButton } };
    return (
        <>
            <FilterContext.Provider value={value}>
                <HeroSection />
                <FindVehicle />
                <PlanTrip />
                <OurCollection />
                <RentByBrand />
                <RentByBody />
                <HowItWorks />
                <Services />
                <Testimonial />
            </FilterContext.Provider>
        </>
    )
}
