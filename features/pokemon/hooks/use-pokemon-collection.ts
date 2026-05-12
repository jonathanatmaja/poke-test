import { getStorage } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PokemonCollectionType } from "../types";
import { pokemonCollectionSchema } from "./models";

const STORAGE_KEY = "pokemon_collections";

const DEFAULT_FORM_VALUES: PokemonCollectionType = {
  name: "",
  collectionType: 1,
  description: "",
  nickname: "",
};

export const usePokemonCollection = (name?: string) => {
  const hasInitialized = useRef(false);

  const [pokemonCollections, setPokemonCollections] = useState<
    PokemonCollectionType[]
  >(() => {
    if (typeof window === "undefined") return [];
    return getStorage(STORAGE_KEY) || [];
  });

  const existingData = pokemonCollections.find((item) => item.name === name);

  const collectionForm = useForm<PokemonCollectionType>({
    defaultValues: { ...DEFAULT_FORM_VALUES, name: name || "" },
    resolver: zodResolver(pokemonCollectionSchema),
  });

  const { reset } = collectionForm;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonCollections));
  }, [pokemonCollections]);

  useEffect(() => {
    if (!name || !existingData || hasInitialized.current) return;
    reset(existingData);
    hasInitialized.current = true;
  }, [name, existingData, reset]);

  const handleSubmitCollection = (params: PokemonCollectionType) => {
    const isDuplicateNickname = pokemonCollections.some(
      (item) => item.nickname === params.nickname && item.name !== params.name,
    );

    if (isDuplicateNickname) {
      toast.error("Nickname already exists!");
      return;
    }

    const isEditMode = pokemonCollections.some(
      (item) => item.name === params.name,
    );

    if (isEditMode) {
      setPokemonCollections((prev) =>
        prev.map((item) =>
          item.name === params.name ? { ...item, ...params } : item,
        ),
      );
      toast.success("Pokemon updated!");
      return;
    }

    setPokemonCollections((prev) => [...prev, params]);
    toast.success("Pokemon added!");
  };

  const handleRemoveCollection = (name: string) => {
    setPokemonCollections((prev) => prev.filter((item) => item.name !== name));
    reset({ ...DEFAULT_FORM_VALUES, name });
    hasInitialized.current = false;
    toast.success("Pokemon removed!");
  };

  return {
    pokemonCollections,
    collectionForm,
    isEditMode: !!existingData,
    onSubmitCollection: handleSubmitCollection,
    onRemoveCollection: handleRemoveCollection,
  };
};
