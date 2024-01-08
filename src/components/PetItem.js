import React, { useState } from 'react';
import ReactDom from "react-don";
import './PetItem.css';

 const PetItem =({ pet }) => {
  const [petImage, setPetImage] = useState(pet.image);

  const handleButtonClick = () => {
    setPetImage(pet.image2);
 };

 return(
  <div>
  <img src = "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Pet" className='pet-image'/>
<button onClick={handleButtonClick} className='change-image-btn'>Change Image</button>
  </div>
 );
 };

 export default PetItem;