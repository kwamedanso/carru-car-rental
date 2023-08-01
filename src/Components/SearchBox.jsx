import React from 'react';
import '../Styles/search.css'
import Sort from './Sort';
import FilterButton from './FilterButton';

export default function SearchBox(props) {
    return (
        <div className='searchbox'>
            <input type="text" className='search' placeholder='Search cars' spellCheck='false' />
            <div>
                <FilterButton openFilter={props.openFilter} setOpenFilter={props.setOpenFilter} />
                <Sort />
            </div>
        </div>
    )
}
