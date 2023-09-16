import genre from "../data/genres";
import { useQuery } from "@tanstack/react-query";
// import apiClient from "../services/api-client";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genre, isLoading: false, error: null });
// const useGenres = () => useData<Genre>('/genres');

// const fetchGenres = () =>
//   apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: { count: genre.length, results: genre, next: (string | null) },
  });

export default useGenres;
