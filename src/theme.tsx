import {
  createTheme,
  Customizations,
  getTheme,
  ISeparatorStyles,
} from "@fluentui/react";

// Access the default theme
const defaultTheme = getTheme();

// Define custom separator styles
const customSeparatorStyles: ISeparatorStyles = {
  root: {
    selectors: {
      "::before": {
        backgroundColor: defaultTheme.palette.neutralQuaternaryAlt, // Magenta Dark as the separator color
      },
    },
  },
  content: {},
};

// Apply global customizations for Separator styles
Customizations.applySettings({
  settings: {
    ISeparatorStyles: customSeparatorStyles, // Apply custom separator styles
  },
});

// Create a custom theme with Magenta Dark as the accent color
export const roryTheme = createTheme({
  palette: {
    themePrimary: defaultTheme.palette.magentaDark, // Magenta Dark as the primary accent color
  },
  components: {
    Separator: {
      styles: customSeparatorStyles, // Apply custom separator styles
    },
  },
});

// Apply the custom theme globally using Customizations
Customizations.applySettings({
  settings: {
    theme: roryTheme,
  },
});
