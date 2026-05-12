import { PokemonCard } from "@/features/home/components/pokemon-card";
import { COLLECTION_TYPES } from "@/lib/constants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PokemonCard> = {
  title: "Components/PokemonCard",
  component: PokemonCard,
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

const mockSprite =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

export const Default: Story = {
  args: {
    name: "Bulbasaur",
    sprite: mockSprite,
    url: "https://pokeapi.co/api/v2/pokemon/1",
  },
};

export const OwnedPokemon: Story = {
  args: {
    name: "Bulbasaur",
    sprite: mockSprite,
    url: "https://pokeapi.co/api/v2/pokemon/1",
    collectionType: COLLECTION_TYPES.OWNED,
  },
};

export const WishlistPokemon: Story = {
  args: {
    name: "Bulbasaur",
    sprite: mockSprite,
    url: "https://pokeapi.co/api/v2/pokemon/1",
    collectionType: COLLECTION_TYPES.WHISHLIST,
  },
};

export const TeamPokemon: Story = {
  args: {
    name: "Bulbasaur",
    sprite: mockSprite,
    url: "https://pokeapi.co/api/v2/pokemon/1",
    collectionType: COLLECTION_TYPES.TEAM,
  },
};