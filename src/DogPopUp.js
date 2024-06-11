import React, { useEffect, useState } from 'react'


function DogPopUp({selectedDog, open}) {

    if (!open) return null;
    console.log("popup open is ", open);
    console.log("selectedDog is ", selectedDog)

    return (
        <div className='overlay z-10'>
            <div className="popupContainer">
                <div className="content">                    
                    <div>
                        <img src={selectedDog} alt="dog" />
                    </div>
                </div>
            </div>
        </div>
  ) 
}

export default DogPopUp