import axios from "axios";
import {
  PokemonDetailType,
  PokemonLoreType,
  RequestDetailPokemonType,
  RequestPokemonLoreType,
} from "../types";

export const detailServices = () => ({
  getPokemonDetail: async (
    props: RequestDetailPokemonType,
  ): Promise<PokemonDetailType> => {
    const { name } = props;
    const res = await axios.get<PokemonDetailType>(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    return res.data;
  },
  getPokemonLore: async (
    props: RequestPokemonLoreType,
  ): Promise<PokemonLoreType> => {
    const { name } = props;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    return res.data;
  },
});
