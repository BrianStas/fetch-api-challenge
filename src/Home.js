import React, { useEffect, useState } from 'react'
import { getBreedList } from './utils/api';
import ReactSelect from 'react-select';
import Gallery from './Gallery';

function Home() {
  
    const [breeds, setBreeds] = useState([]);
    const [selection, setSelection] = useState([]);

    useEffect(() => {getBreedList()
        .then(data => setBreeds(data))
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

    
  
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.fenzidogsportsacademy.com/images/easyblog_articles/345/b2ap3_large_Sporting-Dogs-Grid.jpeg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Pup Pics!</h1>
                    <p className="mb-5">Choose your breeds</p>
                    <ReactSelect 
                        options={breedOptions}
                        isMulti
                        name="breedSelections"
                        onChange={(choice) =>{console.log("new choice: ", choice); setSelection(choice)}}
                        />
                    <button className="btn btn-primary mt-5">View Pics!</button>
                    </div>
                </div>
            </div>
            {selection.length ? <Gallery choices={selection} /> : null}
        </div>
  )
}

export default Home