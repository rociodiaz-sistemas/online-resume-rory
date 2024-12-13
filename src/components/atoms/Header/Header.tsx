import { ITextStyles, Separator, Stack, Text, useTheme } from "@fluentui/react";
import { MenuButton } from "../MenuButton/MenuButton";
import { IconTooltip } from "../IconTooltip/IconTooltip";

export const Header = () => {
  const theme = useTheme();

  return (
    <Stack
      styles={{
        root: {
          height: "100%", // Full viewport height
          width: "100%", // Full width of the viewport
          display: "column", // Flexbox layout
          padding: "50px", // Padding for the content
          direction: "row",
        },
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <Stack>
          <Text
            styles={{
              root: {
                fontSize: "40px",
                fontWeight: "bold",
              },
            }}
            variant="xLarge"
          >
            Rocio Diaz
          </Text>
          <Text variant="large">
            I'm a front-end developer specializing in React and TypeScript.
          </Text>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "flex-end",
          }}
        >
          <MenuButton text="CV" iconName="Download" />
          <MenuButton isPrimary={true} text="Contact" iconName="Mail" />
          <IconTooltip iconName="Calendar" />
        </Stack>
      </div>
      <Separator />
    </Stack>
  );
};
