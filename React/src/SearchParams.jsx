import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SearchForm from "./SearchForm";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";


const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <SearchForm
        animal={animal}
        breeds={breeds}
        setAnimal={setAnimal}
        requestParams={requestParams}
        setRequestParams={setRequestParams}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
