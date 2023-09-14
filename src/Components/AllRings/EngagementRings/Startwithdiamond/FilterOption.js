import React, { useState } from 'react';
import Mainbutton from './Mainbutton';
import ColorClarityCut from './ColorClarityCut';
import MoreFilters from './MoreFilters';

const ColorFilter = () => {
    const [selectFilter, setSelectFilter] = useState('shape');

    function handleFilter(value) {
        setSelectFilter(value);
    }

    let content = null;

    if (selectFilter === 'shape') {
        content = (
            <div>
                {<Mainbutton />}
            </div>
        );
    } else if (selectFilter === 'color') {
        content = (
            <div>
                {<ColorClarityCut />}
            </div>
        );
    } else if (selectFilter === 'morefilter') {
        content = (
            <div>
                {<MoreFilters />}
            </div>
        );
    }

    return (
        <>
            <button onClick={() => handleFilter('shape')}>Shape, Carat, Filter</button>
            <button onClick={() => handleFilter('color')}>Color, Clarity & Cut</button>
            <button onClick={() => handleFilter('morefilter')}>More Filter</button>
            
            {content}
        </>
    );
}

export default ColorFilter;


