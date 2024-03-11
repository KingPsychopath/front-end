import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isError) {
    return <h1>Something went wrong!</h1>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (pet.images && pet.images.length) {
    hero = pet.images[0];
  }
  return (
    <div className="details">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <button>Adopt {pet.name}</button>
      <p>{pet.description}</p>

      <pre>
        <code>
          {JSON.stringify(
            {
              name: pet.name,
              animal: pet.animal,
              breed: pet.breed,
              id: pet.id,
            },
            null,
            4
          )}
        </code>
      </pre>
    </div>
  );
};

export default Details;
