"use client";

import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { detailServices } from "../api";
import {
  PokemonDetailType,
  PokemonLoreType,
  RequestDetailPokemonType,
  RequestPokemonLoreType,
} from "../types";

export const useGetPokemonDetail = () => {
  const [pokemon, setPokemon] = useState<PokemonDetailType>();
  const [pokemonLore, setPokemonLore] = useState<PokemonLoreType>();
  const { getPokemonDetail, getPokemonLore } = useMemo(
    () => detailServices(),
    [],
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPokemonDetail = useCallback(
    async (params: RequestDetailPokemonType) => {
      setIsLoading(true);

      try {
        const response = await getPokemonDetail(params);
        // console.log(response);
        setPokemon(response);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch pokemon detail");
      } finally {
        setIsLoading(false);
      }
    },
    [getPokemonDetail],
  );

  const handleGetPokemonLore = useCallback(
    async (params: RequestPokemonLoreType) => {
      setIsLoading(true);

      try {
        const response = await getPokemonLore(params);
        console.log(response)
        setPokemonLore(response);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch pokemon lore");
      } finally {
        setIsLoading(false);
      }
    },
    [getPokemonLore],
  );

  return {
    onGetPokemonDetail: handleGetPokemonDetail,
    onGetPokemonLore: handleGetPokemonLore,
    pokemon,
    pokemonLore,
    isLoading,
  };
};
