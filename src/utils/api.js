const DOG_API = "https://dog.ceo/api"

export async function getBreedList(){
    const response = await fetch(`${DOG_API}/breeds/list/all`);
    const data = await response.json();
    return data.message;
}

export async function getBreedImages(breed, subBreed){
    console.log("api input is: ", breed, subBreed)
    try{
        if(!subBreed){
            const response = await fetch(`${DOG_API}/breed/${breed}/images`);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data.message;
        }else{
            const response = await fetch(`${DOG_API}/breed/${breed}/${subBreed}/images`);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data.message;
        }
    } catch(error){
        console.error(error);
        return error;
    }
}