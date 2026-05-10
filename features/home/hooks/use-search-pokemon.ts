import { useDebounce } from "@/lib/hooks";
import { useMemo, useState } from "react";
import { PokemonType } from "../types";

export const usePokemonSearch = (pokemons: PokemonType[]) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const filteredPokemons = useMemo(() => {
    if (!debouncedSearch) return pokemons;
    return pokemons.filter((d) =>
      d.name.includes(debouncedSearch.trim().toLowerCase()),
    );
  }, [pokemons, debouncedSearch]);

  return {
    onSearch: setSearch,
    filteredPokemons,
    searchValue: debouncedSearch,
  };
};
