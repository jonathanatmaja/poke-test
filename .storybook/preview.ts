import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
