"use client";

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/lib/constants";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { homeServices } from "../api";
import type { PokemonListRequest, PokemonType } from "../types";
import { getSpriteUrl } from "../utils";

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const { getPokemon } = useMemo(() => homeServices(), []);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [hasMore, setHasMore] = useState(true);

  const handleGetPokemons = useCallback(
    async (params: PokemonListRequest) => {
      setIsLoading(true);

      try {
        const response = await getPokemon(params);
        const sanitizedResponse: PokemonType[] = (response?.results || []).map(
          (d, index) => ({
            ...d,
            sprite: getSpriteUrl((params.offset ?? 0) + index + 1),
          }),
        );
        setPokemons((prev) =>
          params.offset === DEFAULT_OFFSET
            ? sanitizedResponse
            : [...prev, ...sanitizedResponse],
        );
        setHasMore(!!response?.next);
      } catch (error) {
        setHasMore(false);
        console.error(error);
        toast.error("Failed to fetch pokemons");
      } finally {
        setIsLoading(false);
      }
    },
    [getPokemon],
  );

  const loadMore = useCallback(() => {
    const nextOffset = offset + DEFAULT_LIMIT;
    setOffset(nextOffset);
    handleGetPokemons({ limit: DEFAULT_LIMIT, offset: nextOffset });
  }, [offset, handleGetPokemons]);

  return {
    onGetPokemons: handleGetPokemons,
    pokemons,
    isLoading,
    onLoadMore: loadMore,
    hasMore,
  };
};
