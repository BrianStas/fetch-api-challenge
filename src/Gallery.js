import React, { useEffect, useState } from 'react'
import { getBreedImages } from './utils/api';


function Gallery({choices}) {

  const initialImages = [];
  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [loading, setLoading]= useState(true);

    useEffect(()=>{
      setImages(initialImages);
      const subBreedChoices = 
      choices.map(breed => {
        if(breed.value.indexOf(' ') === -1){
          return {
            breed:breed.value
          }}
          else{
            return {
              breed: breed.value.split(' ')[0],
              subBreed: breed.value.split(' ')[1]
            }
          }
        })
      const getImages= async(breed, subBreed)=>{
        const result = await getBreedImages(breed, subBreed)
        if(images.length){
          setImages([...images, ...result]);}
        else{
          setImages([...result]);
        }
        console.log("line 45 images are now: ", images)
      }
      subBreedChoices.forEach(choice=>{ getImages(choice.breed, choice.subBreed)        
      })
    }, [choices]);

    useEffect(()=>{
      if(images.length>0){
        setDisplayImages(getRandomImages(images, 20));
        setLoading(false);
      }
    }, [images])

    const getRandomImages = (images, num) => {
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

  return ( loading ? <p>loading...</p> : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-full">
    {displayImages && displayImages.map((image, index) => <div key={index} className="w-full h-48 rounded overflow-hidden">
      <img src={image} alt="dog" className="w-full h-full object-contain" /></div>)}
    </div>
  )
}

export default Gallery