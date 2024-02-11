import React from 'react';
import HeroSection from 'Components/home/HeroSection';
import FindVehicle from "Components/home/FindVehicle"
import PlanTrip from 'Components/home/PlanTrip';
import OurCollection from 'Components/home/OurCollection';
import RentByBrand from 'Components/home/RentByBrand';
import RentByBodyType from 'Components/home/RentByBodyType';
import HowItWorks from 'Components/home/HowItWorks';
import Services from 'Components/home/Services';
import Testimonial from 'Components/home/Testimonial';
import ScrollToTop from 'Components/shared/ScrollToTop';


export default function Home() {
    return (
        <>
            <ScrollToTop />
            <div className="home-page">
                <HeroSection />
                <FindVehicle />
                <PlanTrip />
                <OurCollection />
                <RentByBrand />
                <RentByBodyType />
                <HowItWorks />
                <Services />
                <Testimonial />
            </div>
        </>
    )
}
