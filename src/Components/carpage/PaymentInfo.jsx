import React from 'react'
import OverviewTitle from "Components/carpage/OverviewTitle"

export default function PaymentInfo() {
    return (
        <div className="payment-info margin-top">
            <OverviewTitle title={'Credit Card or Debit'} description={'Visa, Mastercar, American Express, Discover'} />

            <div className="payment-info-form">
                <div className="payment-info-icons"></div>
                <input type='text' name="cardName" id="cardName" placeholder='Name on card *' />
                <input type='text' name="cardNumber" id="cardNumber" placeholder='Card number *' />
                <input type="month" name="month" id="month" />
                <input type='text' name="cvv" id="cvv" placeholder='CVV code *' />
            </div>
        </div>
    )
}
