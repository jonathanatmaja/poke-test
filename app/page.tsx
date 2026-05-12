"use client";

import { PokemonCard } from "@/features/home/components/pokemon-card";
import { usePokemonList } from "@/features/home/hooks/use-pokemon-list";
import { usePokemonSearch } from "@/features/home/hooks/use-search-pokemon";
import { pokemonGridSty, pokemonListSty } from "@/features/home/styles";
import { usePokemonCollection } from "@/features/pokemon/hooks/use-pokemon-collection";
import { InputSearch } from "@/lib/components/input-search";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/lib/constants";

import { Box, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

export default function Home() {
  const { pokemons, onGetPokemons, isLoading, onLoadMore, hasMore } =
    usePokemonList();
  const { filteredPokemons, onSearch, searchValue } =
    usePokemonSearch(pokemons);
  const router = useRouter();

  const { pokemonCollections } = usePokemonCollection();

  const [infiniteRef] = useInfiniteScroll({
    hasNextPage: hasMore,
    loading: isLoading,
    onLoadMore,
    disabled: !!searchValue,
  });

  useEffect(() => {
    onGetPokemons({
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_OFFSET,
    });
  }, [onGetPokemons]);

  return (
    <>
      <Box sx={pokemonListSty}>
        <InputSearch onSearch={(e) => onSearch(e.target.value)} fullWidth />
        <Typography sx={{ mb: "1rem", flexShrink: 0 }}>
          Showing {filteredPokemons.length} results
        </Typography>

        <Box sx={{ overflowY: "auto", flex: 1 }}>
          {!filteredPokemons.length && !isLoading ? (
            <Typography>No data!</Typography>
          ) : (
            <Grid
              container
              spacing={2}
              columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 8 }}
              sx={pokemonGridSty}
            >
              {filteredPokemons.map((d) => (
                <Grid key={d.name} size={1}>
                  <PokemonCard
                    {...d}
                    onClickCard={() => router.push(d.name)}
                    collectionType={
                      pokemonCollections.find(
                        (pokemon) => pokemon.name === d.name,
                      )?.collectionType
                    }
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <Box ref={infiniteRef} style={{ height: 1 }} />

          {isLoading && (
            <Typography sx={{ textAlign: "center", py: 2 }}>
              Loading...
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
