import {
  Stack,
  Text,
  Link,
  Separator,
  ThemeProvider,
  DefaultButton,
  PrimaryButton,
} from "@fluentui/react";
import { roryTheme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={roryTheme}>
      <Stack
        styles={{
          root: {
            height: "100%", // Full viewport height
            width: "100%", // Full width of the viewport
            display: "flex", // Flexbox layout
            justifyContent: "flex-start", // Align content to the top of the page
            alignItems: "flex-start", // Align content to the left
            margin: 0, // Remove any default margin
            padding: "30px", // Padding for the content
            boxSizing: "border-box", // Include padding and borders in element size
          },
        }}
      ></Stack>
    </ThemeProvider>
  );
};

export default App;
