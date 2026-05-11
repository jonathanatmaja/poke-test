import axios from "axios";
import { PokemonDetailType, RequestDetailPokemonType } from "../types";

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
});
