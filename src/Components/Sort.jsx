import React from 'react'
import { RxCaretSort } from 'react-icons/rx'
import '../Styles/sort.css'


export default function Sort() {
    return (
        <button className='sort'>
            <RxCaretSort />
            <span className='sort-label'>Sort</span>
        </button>
    )
}
