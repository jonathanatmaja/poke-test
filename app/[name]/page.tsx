"use client";

import { useGetPokemonDetail } from "@/features/pokemon/hooks/use-get-pokemon-detail";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PokemonDetailPage() {
  const { name } = useParams<{ name: string }>();
  const { onGetPokemonDetail, pokemon } = useGetPokemonDetail();

  useEffect(() => {
    onGetPokemonDetail({ name });
  }, [name]);

  console.log(pokemon);

  return <div>{name}</div>;
}
