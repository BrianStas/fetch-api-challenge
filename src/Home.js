import React, { useEffect, useRef, useState } from 'react'
import { getBreedList } from './utils/api';
import ReactSelect from 'react-select';
import Gallery from './Gallery';

function Home() {
  
    const [breeds, setBreeds] = useState([]);
    const [selection, setSelection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {getBreedList()
        .then(data => setBreeds(data));
        setLoading(false);
    console.log("breeds are: ", breeds)}
    ,[])

    const breedList = Object.entries(breeds).reduce((acc, [breed, subbreeds]) => {
        if (subbreeds.length) {
          for (const subbreed of subbreeds) {
            acc.push(`${breed} ${subbreed}`)
          }
        } else {
          acc.push(breed)
        }
        return acc
      }, [])

    const breedOptions = breedList.map(breed =>{
        return {
        value: breed,
        label: breed
        }
      })

    console.log("breedList is now: ", breedList)

    const clickHandler = () =>{
      setIsGalleryVisible(true);
      setTimeout(()=>{
        galleryRef.current.scrollIntoView({behavior: "smooth"});
      }, 200)
      
    }
    
  
    return ( loading ? <p>loading...</p> :
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.fenzidogsportsacademy.com/images/easyblog_articles/345/b2ap3_large_Sporting-Dogs-Grid.jpeg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-gray-200">Welcome to Pup Pics!</h1>
                    <p className="mb-5 text-gray-200 font-bold">Choose your breeds</p>
                    <ReactSelect 
                        options={breedOptions}
                        isMulti
                        name="breedSelections"
                        onChange={(choice) =>{console.log("new choice: ", choice); setSelection(choice)}}
                        />
                    <button className="btn btn-primary mt-5" onClick={clickHandler}>View Pics!</button>
                    </div>
                </div>
            </div>
            <div ref={galleryRef}>
              {isGalleryVisible ? <Gallery choices={selection} /> : null}
            </div>
        </div>
  )
}

export default Home