import React from 'react'
import {useState, useEffect} from 'react'
import DogPopUp from './DogPopUp';

function DogDisplay({image, index}){
    const [openPopup, setOpenPopup] = useState(false);


    return (<div key={index} className="w-full h-48 rounded overflow-hidden" onClick={()=>setOpenPopup(!openPopup)} >
    <DogPopUp selectedDog = {image} open={openPopup} />
    <img src={image} alt="dog" className="w-full h-full object-contain" />
  </div>)
}

export default DogDisplay;