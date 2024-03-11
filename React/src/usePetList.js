import { useQuery } from "@tanstack/react-query";
import { fetchPet } from "./fetchEndpoint";

const usePetList = (id) => {
  const results = useQuery(["pet", id], fetchPet);
  return [results?.data?.id || [], results.status];
};

export default usePetList;
