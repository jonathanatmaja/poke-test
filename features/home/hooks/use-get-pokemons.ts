"use client";

import { useQuery } from "@tanstack/react-query";
import { homeServices } from "../api";
import type { PokemonListParams } from "../types";
import { getSpriteUrl } from "../utils";

export const useGetPokemons = (params: Partial<PokemonListParams>) => {
  const { getAll } = homeServices();
  const { limit = 15, offset = 0 } = params;

  const { data, ...queryData } = useQuery({
    queryKey: ["pokemons", { limit, offset }],
    queryFn: () => getAll({ limit, offset }),
    staleTime: 1000 * 60 * 2,
  });

  const dataWithSprites = data?.results?.map((d, index) => ({
    ...d,
    sprite: getSpriteUrl(offset + index + 1),
  }));

  return { ...queryData, dataWithSprites };
};
