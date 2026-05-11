"use client";

import { PokemonDetail } from "@/features/pokemon/components/pokemon-detail";
import { useGetPokemonDetail } from "@/features/pokemon/hooks/use-get-pokemon-detail";
import { PokemonLoreType } from "@/features/pokemon/types";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PokemonDetailPage() {
  const { name } = useParams<{ name: string }>();
  const {
    onGetPokemonDetail,
    pokemon,
    isLoading,
    onGetPokemonLore,
    pokemonLore,
  } = useGetPokemonDetail();

  useEffect(() => {
    onGetPokemonDetail({ name });
    onGetPokemonLore({ name });
  }, [name, onGetPokemonDetail, onGetPokemonLore]);

  if (isLoading || !pokemon) return null;
  return (
    <Box sx={{ padding: "2rem" }}>
      <PokemonDetail
        detail={pokemon}
        lore={pokemonLore as Partial<PokemonLoreType>}
      />
    </Box>
  );
}
