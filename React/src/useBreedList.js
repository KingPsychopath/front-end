import { useState, useEffect } from "react";

const localCache = {};
// Example of a custom hook that fetches the breed list for a given animal
// Basically a custom hook is a function that starts with the word "use" and uses other hooks
// This hook uses the useState and useEffect hooks
// It imitates the behavior of the useEffect hook, but it also caches the results of the fetch request
// to avoid making the same request multiple times
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
