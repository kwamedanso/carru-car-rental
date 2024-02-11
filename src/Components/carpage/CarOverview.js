import React from 'react'
import { BsSpeedometer2, BsPeople, BsCheckAll } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi'
import { LuFuel } from 'react-icons/lu';


export default function CarOverview({ currentCar }) {
    return (
        <div className="user-selction fs-250">
            <div className="selected__car">
                <div className='selected__car-info'>
                    <div><img src={currentCar.imageUrl} alt="porshce" /></div>
                    <div>
                        <p className='fw-bold fs-300'>{currentCar.category} Car</p>
                        <p className='fs-op fw-semi-bold'>{currentCar.model}</p>
                        <div>
                            <ul>
                                <ListItem icon=<BsSpeedometer2 /> content={currentCar.maximumMiles} />
                                <ListItem icon=<GiGearStickPattern /> content={currentCar.transmission} />
                                <ListItem icon=<BsPeople /> content={currentCar.persons} />
                                <ListItem icon=<LuFuel /> content={currentCar.fuelType} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='selected__car-lists fs-200'>
                        <li><BsCheckAll /> Pay Now & Save</li>
                        <li><BsCheckAll /> Unlimited Milage</li>
                        <li><BsCheckAll /> Shuttle to Car</li>
                        <li><BsCheckAll /> Theft Protection with <span className='fw-semi-bold'>$0</span> excess</li>
                        <li><BsCheckAll /> Well-maintained cars</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="carpage__location-info margin-top">
                <div className='pick-up'>
                    <div className="pickup-dropoff">
                        <p className='fs-op fs-100'>PICK-UP</p>
                        <p className='fw-bold'>Mon, Sep 25, 2023</p>
                        <p className='fw-bold'>8:30 AM</p>
                        <p>Toronto Pearson Intl Airpot (YYZ)</p>
                        <p className='clr-blue'>Hours of Operation</p>
                    </div>
                    <div className="pickup-dropoff">
                        <p className='fs-op fs-100'>DROP-OFF</p>
                        <p className='fw-bold'>Mon, Sep 25, 2023</p>
                        <p className='fw-bold'>8:30 AM</p>
                        <p>Toronto Pearson Intl Airpot (YYZ)</p>
                        <p className='clr-blue'>Hours of Operation</p>
                    </div>
                </div>
                <div className='pickup-instructions margin-top'>
                    <p className='fw-bold '>Pick-up & Drop-off Instructions</p>
                    <p>Provided by Carru</p>
                    <p className='fs-200'>Lester B. Pearson International Airport UPON ARRIVAL PLEASE BOARD THE LINK TRAIN TO VISCOUNT STATION. THEN PROCEED DOWN THE STAIRS WHERE YOU WILL FIND...</p>
                </div>
            </div>
        </div>
    )
}


function ListItem(props) {
    return (
        <>
            <li className=''>
                <div>
                    <span className='fs-op'>{props.icon}</span>
                    <span className='fs-300 fs-op'>{props.content}</span>
                </div>
            </li>
        </>
    )
}