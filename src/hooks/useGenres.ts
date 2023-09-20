import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genre, isLoading: false, error: null });
// const useGenres = () => useData<Genre>('/genres');

// const fetchGenres = () =>
//   apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
