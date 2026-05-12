import { getStorage } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PokemonCollectionType } from "../types";
import { pokemonCollectionSchema } from "./models";

const STORAGE_KEY = "pokemon_collections";

export const usePokemonCollection = (name?: string) => {
  const collectionForm = useForm<PokemonCollectionType>({
    defaultValues: { collectionType: 1, description: "", nickname: "", name },
    resolver: zodResolver(pokemonCollectionSchema),
  });

  const [pokemonCollections, setPokemonCollections] = useState<
    PokemonCollectionType[]
  >(() => {
    return getStorage(STORAGE_KEY) || [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonCollections));
    const existingData = pokemonCollections.find((d) => d.name === name);
    if (existingData) {
      collectionForm.reset(existingData);
    }
  }, [pokemonCollections]);

  const handleSubmitCollection = (params: PokemonCollectionType) => {
    const isAlreadyExist = pokemonCollections.find(
      (item) => item.name === params.name,
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
    collectionForm,
  };
};
