import type { Preview } from "@storybook/react";

import { initializeIcons } from "@fluentui/react";

initializeIcons();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
