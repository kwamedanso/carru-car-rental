import React from 'react'
import OverviewTitle from "Components/carpage/OverviewTitle"

export default function DriverInfo() {
    return (
        <div className="driver-info margin-top">
            <OverviewTitle title='Driver Information' description="Must match Driver's License" />

            <div className="driver-info-form">
                <input type="text" name="fName" id="fName" placeholder='First name *' />
                <input type="text" name="lName" id="lName" placeholder='Last name *' />
                <input type='text' name="email" id="email" placeholder='Email address *' />
                <input type='number' name="age" id="age" placeholder='Drivers age *' />
                <input type='text' name="city" id="city" placeholder='City *' />
                <input type='text' name="street" id="street" placeholder='Street address *' />
                <input type='text' name="postcode" id="postcode" placeholder='Postal code *' />
                <input type='text' name="phone" id="phone" placeholder='Mobile phone number *' />
            </div>
        </div>
    )
}


