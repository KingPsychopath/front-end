const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiResult = await fetch("http://pets-v2.dev-apis.com/pets?id=" + id);

  if (!apiResult.ok) {
    throw new Error(`details/${id} API request failed...`);
  }

  return apiResult.json();
};

export default fetchPet;
