import React, { useContext } from 'react'
import FilterContext from 'filterContext';
import PriceItem from 'Components/carpage/PriceItem';

export default function PricingOverview({ cost }) {

    const value = useContext(FilterContext)
    let { state: { addedExtras } } = value;

    let totalExtras = addedExtras?.reduce((accu, current) => accu + current.cost, 0)


    const tax = 10.70;
    const totalCost = tax + cost + totalExtras;
    return (
        <div className='carpage__pricing margin-top'>
            <div className="carpage__pricing-title">
                <p>Keep up the good work!</p>
                <p className='fw-semi-bold'>You're on your way getting a great deal.</p>
            </div>
            <div className="carpage__pricing-body margin-top-50">
                <div>
                    <p className='fs-250 fw-bold'>Summary of Charges</p>
                </div>
                <hr />

                <div>
                    <div className='flex jc-space-between'>
                        <PriceItem label={'Price per day'} price={cost} />
                    </div>

                    {addedExtras?.map(item => <div key={item.id} className='added-extras flex jc-space-between margin-top-50'>
                        <PriceItem label={item.label} price={item.cost} />
                    </div>)}

                    <div className='flex jc-space-between margin-top-50'>
                        <PriceItem label={'Taxes and fees'} price={tax} />
                    </div>
                </div>
                <hr />

                <div>
                    <div className='flex jc-space-between clr-green'>
                        <p className='fw-bold fs-250'>Due Now</p>
                        <p className='fw-bold fs-250'>${totalCost.toFixed(2)}</p>
                    </div>
                    <div className='margin-top'>
                        <p className='clr-blue'>as low as $17/month</p>
                    </div>
                </div>
                <hr />

                <div className='flex jc-space-between'>
                    <PriceItem label={'Due at Pick-up'} price={0.0} />
                </div>
                <hr />

                <div className='flex jc-space-between fs-300'>
                    <p className='fw-bold'>Total Cost</p>
                    <p className='fw-bold'>${totalCost.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
