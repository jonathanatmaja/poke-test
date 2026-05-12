import { InputSearch } from "@/lib/components/input-search";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof InputSearch> = {
  title: "Components/InputSearch",
  component: InputSearch,
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Default: Story = {};
