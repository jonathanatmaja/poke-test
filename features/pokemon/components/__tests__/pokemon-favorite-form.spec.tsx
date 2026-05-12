import PokemonDetailPage from "@/app/[name]/page";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  useParams: () => ({ name: "bulbasaur" }),
}));

describe("Favorite Form", () => {
  it("Should show error message if nickname is not filled", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: { name: "Bulbasaur", id: 1 },
    });
    render(<PokemonDetailPage />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenNthCalledWith(
        1,
        `${process.env.NEXT_PUBLIC_API_URL}/pokemon/bulbasaur`,
        {
          headers: { Accept: "application/json" },
        },
      );
    });

    const collectionForm = await screen.findByTestId("collection-form");
    const pokemonName = await screen.findByTestId("pokemon-name");
    expect(pokemonName).toHaveTextContent("Bulbasaur");

    expect(collectionForm).toBeInTheDocument();

    const descriptionField = screen.getByTestId("input-description");
    const saveButton = screen.getByRole("button", { name: "Save" });

    userEvent.type(descriptionField, "Pokemon gue");
    userEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Nickname is required!")).toBeInTheDocument();
    });
  });
});
