import { MdLocationOn } from "react-icons/md"
import { AiFillCalendar } from 'react-icons/ai'
import { BsFillCarFrontFill } from 'react-icons/bs'

export const planTripLists = [
    {
        icon: <MdLocationOn />,
        title: 'Choose Location',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nam pariatur temporibus. Repellat.',
        accent: '1'
    },
    {
        icon: <AiFillCalendar />,
        title: 'Pick-up Date',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officiis deleniti nostrum iure.',
        accent: '2'
    },
    {
        icon: <BsFillCarFrontFill />,
        title: 'Book your car',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusantium tempora obcaecati unde.',
        accent: '3'
    }
]