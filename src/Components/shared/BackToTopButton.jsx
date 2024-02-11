import React, { useEffect, useState } from 'react'
import { scrollToTop } from 'Utility/Functions';
import { IoMdArrowRoundUp } from 'react-icons/io'
import "Components/shared/styles/backtotopbutton.css"

export default function BackToTopButton() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })

    }, [])


    return (
        <>

            {backToTop && <button className='back-to-top-button' onClick={scrollToTop}><IoMdArrowRoundUp /></button>}
        </>
    )
}
