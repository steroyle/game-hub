import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient
      .getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          search_exact: true,
          page: pageParam,
        }
      }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}

export default useGames;