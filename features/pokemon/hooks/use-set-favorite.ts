import { getStorage } from "@/lib/utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PokemonCollectionType } from "../types";

const STORAGE_KEY = "pokemon_collections";

export const useSetFavorite = () => {
  const [pokemonCollections, setPokemonCollections] = useState<
    PokemonCollectionType[]
  >(() => {
    return getStorage(STORAGE_KEY) || [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonCollections));
  }, [pokemonCollections]);

  const handleSubmitCollection = (params: PokemonCollectionType) => {
    const isAlreadyExist = pokemonCollections.find(
      (item) => item.nickname === params.nickname,
    );

    if (isAlreadyExist) {
      toast.error("Nickname already exists!");
      return;
    }

    setPokemonCollections((prev) => [...prev, params]);
    toast.success("Pokemon added!");
  };

  const handleRemoveCollection = (nickname: string) => {
    setPokemonCollections((prev) =>
      prev.filter((item) => item.nickname !== nickname),
    );
    toast.success("Pokemon removed!");
  };

  return {
    pokemonCollections,
    onSubmitCollection: handleSubmitCollection,
    onRemoveCollecion: handleRemoveCollection,
  };
};
