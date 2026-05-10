"use client";

import { PokemonCard } from "@/features/home/components/pokemon-card";
import { useGetPokemons } from "@/features/home/hooks/use-get-pokemons";
import { homeHeaderSty, pokemonGridSty, pokemonListSty } from "@/features/home/styles";
import { useDebounce } from "@/lib/hooks";
import Logo from "@/public/logo.png";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const { dataWithSprites: data, isLoading } = useGetPokemons({});
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const filtered = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return data ?? [];
    return (data ?? []).filter((p) => p.name.toLowerCase().includes(q));
  }, [data, debouncedSearch]);

  return (
    <Box>
      <Box
        sx={homeHeaderSty}
        id="header"
      >
        <Image
          src={Logo}
          alt="Logo"
          style={{
            width: 150,
            height: "auto",
          }}
        />
      </Box>
      <Box sx={pokemonListSty}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search Pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1, mb: "2rem" }}
        />
        {isLoading ? (
          <Typography sx={{ flex: 1 }}>Loading..</Typography>
        ) : (
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
            sx={pokemonGridSty}
          >
            {filtered.map((d) => (
              <Grid key={d.name} size={1}>
                <PokemonCard {...d} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
