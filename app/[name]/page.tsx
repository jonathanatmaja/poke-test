"use client";

import { PokemonFavoriteForm } from "@/features/pokemon/components/pokemon-favorite-form";
import {
  PokemonStats,
  type PokemonStatsProps,
} from "@/features/pokemon/components/pokemon-stats";
import {
  PokemonTypes,
  type PokemonTypesProps,
} from "@/features/pokemon/components/pokemon-types";
import {
  PokemonVarieties,
  type PokemonVarietiesProps,
} from "@/features/pokemon/components/pokemon-varieties";
import { useGetPokemonDetail } from "@/features/pokemon/hooks/use-get-pokemon-detail";
import {
  detailWrapperSty,
  imageCardSty,
  infoCardSty,
  spriteCardSty,
  statCardSty,
} from "@/features/pokemon/styles";
import type { PokemonLoreType } from "@/features/pokemon/types";
import { getRandomPaleColor } from "@/features/pokemon/utils";
import { SmartSummary } from "@/lib/components/smart-summary";
import { DEFAULT_IMG_WIDTH_HEIGHT } from "@/lib/constants";
import { Box, Card, Chip, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function PokemonDetailPage() {
  const params = useParams<{ name?: string }>();
  const name = params.name ?? "";
  const {
    onGetPokemonDetail,
    pokemon,
    isLoading,
    onGetPokemonLore,
    pokemonLore,
  } = useGetPokemonDetail();

  useEffect(() => {
    if (!name) return;
    onGetPokemonDetail({ name });
    onGetPokemonLore({ name });
  }, [name, onGetPokemonDetail, onGetPokemonLore]);

  const lore = (pokemonLore ?? {}) as Partial<PokemonLoreType>;

  const spriteUrls = useMemo(() => {
    const sprites = pokemon?.sprites;
    if (!sprites) return [];
    const urls = Object.values(sprites).filter(
      (v): v is string => typeof v === "string" && v !== null,
    );
    return Array.from(new Set(urls));
  }, [pokemon?.sprites]);

  const description = useMemo(() => {
    const entries = lore.flavor_text_entries ?? [];
    const en = entries.find((e) => e.language?.name === "en");
    return String(en?.flavor_text ?? entries[0]?.flavor_text ?? "-");
  }, [lore.flavor_text_entries]);

  const stats: PokemonStatsProps[] = useMemo(() => {
    const s = pokemon?.stats ?? [];
    return s.map((d) => ({ name: d.stat.name, baseStat: d.base_stat }));
  }, [pokemon?.stats]);

  const types: PokemonTypesProps[] = useMemo(() => {
    const t = pokemon?.types ?? [];
    return t.map((d) => ({ name: d.type.name, color: getRandomPaleColor() }));
  }, [pokemon?.types]);

  const varieties: PokemonVarietiesProps[] = useMemo(() => {
    const v = lore.varieties ?? [];
    return v.map((d) => ({ name: d.pokemon.name }));
  }, [lore.varieties]);

  if (!name) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Missing pokemon name.</Typography>
      </Box>
    );
  }

  if (isLoading && !pokemon) {
    return (
      <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isLoading && !pokemon) {
    notFound();
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={detailWrapperSty}>
        <Card variant="outlined" elevation={0} sx={imageCardSty}>
          {spriteUrls.length ? (
            spriteUrls.map((url) => (
              <Box key={url}>
                <Image
                  src={url}
                  alt={`${pokemon?.name} sprite`}
                  width={DEFAULT_IMG_WIDTH_HEIGHT * 2}
                  height={DEFAULT_IMG_WIDTH_HEIGHT * 2}
                  style={{ transform: "scale(1.2)" }}
                  priority
                />
              </Box>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No sprites.
            </Typography>
          )}
        </Card>
        <Box sx={spriteCardSty}>
          <Card
            variant="outlined"
            elevation={0}
            sx={{ ...infoCardSty, flex: 1 }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="button"
                sx={{ fontSize: 36 }}
                data-testid="pokemon-name"
              >
                {pokemon?.name}
              </Typography>
              <Chip label={pokemon?.id} variant="outlined" size="small" />
            </Box>

            <PokemonTypes types={types} />
            <Typography variant="subtitle2" sx={{ color: "GrayText" }}>
              {description}
            </Typography>
          </Card>
          <Card variant="outlined" elevation={0} sx={statCardSty}>
            <Box sx={{ display: "flex", columnGap: 5, flex: 2 }}>
              <Box sx={{ flex: 1 }}>
                <PokemonStats stats={stats} />
                <PokemonVarieties varieties={varieties} />
              </Box>
              <Box sx={{ flex: 1 }}>
                {pokemon?.name && <PokemonFavoriteForm name={pokemon.name} />}
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <SmartSummary />
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
