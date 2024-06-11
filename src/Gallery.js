import React, { useEffect, useState } from 'react'
import { getBreedImages } from './utils/api';
import DogPopUp from './DogPopUp';
import DogDisplay from './DogDisplay';


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
        setDisplayImages(getRandomImages(images, 16));
        setLoading(false);
      }
    }, [images])

    const getRandomImages = (images, num) => {
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    const reshuffleImages = () =>{
      setDisplayImages(getRandomImages(images, 16));
    }

  return ( loading ? <p>loading...</p> : <div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-full">
    {displayImages && displayImages.map((image, index) => <DogDisplay image={image} index={index} />)}
    </div>
    <div className="flex justify-center my-4">
      <button className="btn btn-primary max-w-md" onClick={reshuffleImages}>Reshuffle!</button>
    </div>
    </div>
  )
}

export default Gallery