import { createTheme, getTheme } from "@fluentui/react";

// Access the default theme
const defaultTheme = getTheme();

// Create a custom theme using Fluent UI's default colors and Magenta Dark as the accent color
export const roryTheme = createTheme({
  palette: {
    // Primary accent color (Magenta Dark)
    themePrimary: defaultTheme.palette.magentaDark, // Magenta Dark as the primary accent color
    themeLighterAlt: defaultTheme.palette.magentaLight, // Lightest shade of Magenta for hover/focus states
    themeLighter: defaultTheme.palette.magentaLight, // Slightly lighter magenta for subtle accents
  },
});
