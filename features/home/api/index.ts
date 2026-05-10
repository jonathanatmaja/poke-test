import axios from "axios";
import { PokemonListParams, PokemonListResponse } from "../types";

export const homeServices = () => ({
  getAll: async (props: PokemonListParams): Promise<PokemonListResponse> => {
    const res = await axios.get<PokemonListResponse>(
      "https://pokeapi.co/api/v2/pokemon",
      { params: props, headers: { Accept: "application/json" } },
    );

    return res.data;
  },
});
