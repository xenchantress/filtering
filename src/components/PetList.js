import React, { useState } from 'react';
import PetItem from './PetItem';
import SearchBar from './SearBar';
import PetSelector from './PetSelector';

const PetList = ({ pets }) => {
    const [ query, setQuery] = useState('');
    const [ type, setType] = useState('');

    const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(query.toLocaleLowerCase()) && pet.type.includes(type));
    return (
        <div className='pets-list-container'>
            <SearchBar setQuery = { setQuery } />
            <PetSelector setType = { setType } />
            <div className='pets-list-container'>
            {filteredPets.map((pet, index) => (
                <PetItem key = { index } pet = { pet } />
            ))}
        </div>
        </div>
    );
};
export default PetList;