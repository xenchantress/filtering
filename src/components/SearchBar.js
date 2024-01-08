import React from 'react';
import './SearchBar.css';

const SearBar =({ setQuery }) => {
    const handleInputChange = ( event ) => {
        setQuery(event.target.value);
};

return (
    <input type="text" placeholder='Seach...' onChange={handleInputChange} className='search-bar'/>
);
};
export default SearBar;
