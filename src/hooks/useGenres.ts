import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: { count: genres.length, results: genres }
});

export default useGenres;