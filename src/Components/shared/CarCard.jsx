import React from 'react'
import { BsSpeedometer2, BsPeople } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi'
import { LuFuel } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import 'Components/shared/styles/carCard.css'



export default function CarCard(props) {
    return (
        <>
            <div className="car__card">
                <div className="car__car__content">
                    <Link className='' to={`/carpage/${props.id}`}>
                        <img className='car__card__image' src={props.imageUrl} alt={props.model} />
                    </Link>
                    <div className="car__card__bottom">
                        <div className="car__card__details">
                            <p className="fs-300 fs-op">
                                {props.model.length >= 20 ? props.model.substring(0, 20) + '...' : props.model}
                            </p>
                            <h2 className="fs-400">
                                ${props.cost}
                                <span className='fs-200 fs-op'>/day</span>
                            </h2>
                            <div className="info__columns">
                                <ul>
                                    <ListItem icon=<BsSpeedometer2 /> content={props.maximumMiles} />
                                    <ListItem icon=<GiGearStickPattern /> content={props.transmission} />
                                    <ListItem icon=<BsPeople /> content={props.persons} />
                                    <ListItem icon=<LuFuel /> content={props.fuelType} />
                                </ul>
                            </div>
                            <Link className='button car-card-button' to={`/carpage/${props.id}`}>Rent Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ListItem(props) {
    return (
        <>
            <li className='info__columns__item'>
                <div>
                    <span className='fs-op'>{props.icon}</span>
                    <span className='fs-300 fs-op'>{props.content}</span>
                </div>
            </li>
        </>
    )
}