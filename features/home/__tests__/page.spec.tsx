import Home from "@/app/page";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/lib/constants";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { generateMockPokemonList } from "../utils";

describe("Pokemon list", () => {
  it("Should render pokemon list at initial", async () => {
    (axios.get as jest.Mock).mockResolvedValue(
      generateMockPokemonList(DEFAULT_LIMIT),
    );
    render(<Home />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon",
        {
          params: { limit: DEFAULT_LIMIT, offset: DEFAULT_OFFSET },
          headers: { Accept: "application/json" },
        },
      );
    });

    const pokemonCards = await screen.findAllByTestId("pokemon-card-", {
      exact: false,
    });

    expect(pokemonCards).toHaveLength(DEFAULT_LIMIT);
  });
});
