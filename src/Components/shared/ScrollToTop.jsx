import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from 'Utility/Functions';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollToTop()
    }, [pathname])

    return null;
}
