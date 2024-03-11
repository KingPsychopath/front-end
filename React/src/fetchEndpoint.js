const fetchEndpoint = (endpoint, queryParam) => {
  return async ({ queryKey }) => {
    const param = queryKey[1];

    const apiResult = await fetch(
      `http://pets-v2.dev-apis.com/${endpoint}?${queryParam}=${param}`
    );

    if (!apiResult.ok) {
      throw new Error(`${endpoint}/${param} API request failed...`);
    }

    return apiResult.json();
  };
};

export const fetchBreedList = fetchEndpoint("breeds", "animal");
export const fetchPet = fetchEndpoint("pet", "id");
