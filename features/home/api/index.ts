import axios from "axios";
import { PokemonListRequest, PokemonListResponse } from "../types";

export const homeServices = () => ({
  getPokemon: async (
    props: PokemonListRequest,
  ): Promise<PokemonListResponse> => {
    const { limit, offset } = props;
    const res = await axios.get<PokemonListResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/pokemon`,
      { params: { limit, offset }, headers: { Accept: "application/json" } },
    );
    return res.data;
  },
});
