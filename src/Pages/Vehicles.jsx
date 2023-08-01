import React, { useState } from 'react'
import Filter from '../layout/Filter'
import CarCollection from '../layout/CarCollection'
import SearchBox from '../Components/SearchBox'
import '../Styles/vehicles.css'

export default function Vehicles() {
    const [openFilter, setOpenFilter] = useState(false)

    return (
        <>
            <div className="vehicles">
                <SearchBox openFilter={openFilter} setOpenFilter={setOpenFilter} />
                <div className="vehicle-layout">
                    <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
                    <CarCollection />
                </div>

            </div>
        </>
    )
}
