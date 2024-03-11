const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiResult = await fetch(
    "http://pets-v2.dev-apis.com/breeds?animal=" + animal
  );

  if (!apiResult.ok) {
    throw new Error(`breeds/${animal} API request failed...`);
  }

  return apiResult.json();
};

export default fetchBreedList;
