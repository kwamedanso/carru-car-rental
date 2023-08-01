import { BsChevronDown } from 'react-icons/bs'
import { SlArrowUp } from 'react-icons/sl'

let iconDown = <BsChevronDown />
let iconUp = <SlArrowUp />

export const filterData = [
    {
        title: 'Body Type',
        icons: [iconDown, iconUp],
        isOpen: true
    },
    {
        title: 'Make',
        icons: [iconDown, iconUp],
        isOpen: false
    },
    {
        title: 'Model',
        icons: [iconDown, iconUp],
        isOpen: false
    },
    {
        title: 'Transmission',
        icons: [iconDown, iconUp],
        isOpen: true
    },
    {
        title: 'Seats',
        icons: [iconDown, iconUp],
        isOpen: false
    },
    {
        title: 'Fuel Type',
        icons: [iconDown, iconUp],
        isOpen: false
    },
    {
        title: 'Price',
        icons: [iconDown, iconUp],
        isOpen: false
    },
]