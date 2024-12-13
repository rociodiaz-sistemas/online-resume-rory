import type { Preview } from "@storybook/react";
import { roryTheme } from "../src/theme";

import { initializeIcons, ThemeProvider } from "@fluentui/react";
import React from "react";

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
  decorators: [
    (Story) => (
      <ThemeProvider theme={roryTheme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
