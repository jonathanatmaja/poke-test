"use client";

import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { detailServices } from "../api";
import { PokemonDetailType, RequestDetailPokemonType } from "../types";

export const useGetPokemonDetail = () => {
  const [pokemon, setPokemon] = useState<PokemonDetailType>();
  const { getPokemonDetail } = detailServices();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPokemonDetail = useCallback(
    async (params: RequestDetailPokemonType) => {
      setIsLoading(true);

      try {
        const response = await getPokemonDetail(params);
        setPokemon(response);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch pokemons");
      } finally {
        setIsLoading(false);
      }
    },
    [getPokemonDetail],
  );

  return {
    onGetPokemonDetail: handleGetPokemonDetail,
    pokemon,
    isLoading,
  };
};
