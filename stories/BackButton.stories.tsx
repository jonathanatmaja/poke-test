import { BackButton } from "@/lib/components/back-button";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof BackButton> = {
  title: "Components/BackButton",
  component: BackButton,
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};
