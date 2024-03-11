import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import useBreedList from "./useBreedList";

const SearchParams = () => {
    const [pets, setPets] = useState([]);
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <SearchForm
                location={location}
                animal={animal}
                breed={breed}
                breeds={breeds}
                setLocation={setLocation}
                setAnimal={setAnimal}
                setBreed={setBreed}
                requestPets={requestPets}
            />
            <Results pets={pets} />
        </div>
    );
};


export default SearchParams;
