export type PokemonType = { name: string; url: string; sprite?: string };

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Omit<PokemonType, "sprite">[];
};

export type PokemonListRequest = {
  limit?: number;
  offset?: number;
  name?: string;
};

export type PokemonDetailResponse = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
};
