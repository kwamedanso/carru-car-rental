import React, { useContext } from 'react'
import FilterContext from '../Components/filterContext'
import CarCard from '../Components/CarCard';
import '../Styles/carCollection.css'

export default function CarCollection() {
    let value = useContext(FilterContext)

    const { state: { allCars, activeButton, filteredCars }, actions: { setFilteredCars, setactiveButton } } = value;
    return (
        <div className='collection-grid'>
            {filteredCars.map((car) => {
                return <CarCard key={car.model} imageUrl={car.imageUrl} model={car.model} cost={car.cost} maximumMiles={car.maximumMiles} transmission={car.transmission} persons={car.persons} fuelType={car.fuelType} />
            })}
        </div>
    )
}
