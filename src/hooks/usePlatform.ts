import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const fetchPlatform = () =>
  apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res) => res.data);

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatform,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: {counts: platforms.length, results: platforms}
  });

export default usePlatform;
