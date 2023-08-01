import React, { useEffect } from 'react'

export default function FiltersModels({ allCars, setFilteredCars, setactiveButton, activeButton }) {

    useEffect(() => {
        if (activeButton === 'All') {
            setFilteredCars(allCars);
            return;
        }
        const filtered = allCars.filter((item) => item.category.includes(activeButton));

        let matchedCars = [];
        for (let i = 0; i < filtered.length; i++) {
            if (i < 6) {
                matchedCars.push(filtered[i])
            } else break;
        }

        setFilteredCars(filtered)

    }, [activeButton])
    return (
        <>
            <div className="collection__tabs">
                <button className={`${activeButton === "All" ? "button margin-lt-100 active" : "button margin-lt-100"}`} data-type='inverted' onClick={() => setactiveButton('All')}
                >All</button>

                <button className={`${activeButton === "Luxury" ? "button margin-lt-100 active" : "button margin-lt-100"}`} data-type='inverted' onClick={() => setactiveButton('Luxury')}
                >Luxury</button>

                <button className={`${activeButton === "Family" ? "button margin-lt-100 active" : "button margin-lt-100"}`} data-type='inverted' onClick={() => setactiveButton('Family')}
                >Family</button>

                <button className={`${activeButton === "Sports" ? "button margin-lt-100 active" : "button margin-lt-100"}`} data-type='inverted' onClick={() => setactiveButton('Sports')}
                >Sports</button>

                <button className={`${activeButton === "Vintage" ? "button margin-lt-100 active" : "button margin-lt-100"}`} data-type='inverted' onClick={() => setactiveButton('Vintage')}
                >Vintage</button>
            </div>
        </>
    )
}
