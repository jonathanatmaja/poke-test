import { PokemonStats } from "@/features/pokemon/components/pokemon-stats";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof PokemonStats> = {
  title: "Components/PokemonStats",
  component: PokemonStats,
};

export default meta;
type Story = StoryObj<typeof PokemonStats>;

export const Default: Story = {
  args: {
    stats: [
      { name: "HP", baseStat: 50 },
      { name: "Basic Atk", baseStat: 30 },
      { name: "Magic Atk", baseStat: 50 },
      { name: "Phys Atk", baseStat: 150 },
      { name: "Defense", baseStat: 200 },
    ],
  },
};
