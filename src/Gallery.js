import React, { useEffect } from 'react'

function Gallery({choices}) {

    useEffect(()=>{
        console.log("gallery choices: ", choices)
    }, [choices]);

  return (
    <div>Gallery</div>
  )
}

export default Gallery