const DOG_API = "https://dog.ceo/api"

export async function getBreedList(){
    const response = await fetch(`${DOG_API}/breeds/list/all`);
    const data = await response.json();
    return data.message;
}

export async function getBreedImages(breed){
    const response = await fetch(`${DOG_API}/breed/${breed}/images`);
    const data = await response.json();
    return data.message;
}