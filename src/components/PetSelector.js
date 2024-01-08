import React from 'react';
import './PetSelector.css';

const PetSelector = ({ setType }) => {
    const handleSelectChange = ( event ) => {
        setType(event.target.value);
    };
    return (
        <select onChange={handleSelectChange} className='pet-selector'>
            <option value = "">All</option>
            <option value = "Dog">Dog</option>
            <option value = "Cat">Cat</option>
        </select>
    );
};
export default PetSelector;