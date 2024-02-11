import React, { useState, useContext, useEffect } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import "Components/vehicles/styles/searchbox.css"
import FilterContext from "filterContext"

export default function SearchBox(props) {
    const [search, setSearch] = useState('');

    const value = useContext(FilterContext)
    let { state: { allCars }, actions: { setFilteredCars } } = value;


    useEffect(() => {
        let newSearch = allCars.filter(car => car.brand.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || car.model.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        setFilteredCars([...newSearch])
    }, [search])


    function handleSearchInput(e) {
        setSearch(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault()
        }
    }

    return (
        <form className='search-wrapper' >
            <div className="search">
                <input className='search-input' type="text" placeholder='Search cars' spellCheck='false' value={search} onChange={handleSearchInput} onKeyDown={handleKeyDown} />

                <ImCancelCircle className={`cancel-button ${search.length < 1 && 'fs-op-0'}`} onClick={() => setSearch('')} />
            </div>
        </form>
    )
}
