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
      `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${name}`,
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
      `${process.env.NEXT_PUBLIC_API_URL}/pokemon-species/${name}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    return res.data;
  },
});
