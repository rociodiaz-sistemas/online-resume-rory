import React from "react";
import { Stack, Text, IStackStyles, IStackTokens } from "@fluentui/react";
import ReactSVG from "../../../assets/react.svg";

interface ICardProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

const cardContainerStyles: IStackStyles = {
  root: {
    border: "1px solid #e1e1e1",
    // borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    backgroundColor: "white",
  },
};

const cardHeaderStyles: IStackStyles = {
  root: {
    marginBottom: "8px",
    alignItems: "center", // Align text with the SVG
  },
};

const cardTokens: IStackTokens = { childrenGap: 10 };

const Card: React.FC<ICardProps> = (props) => {
  const { title, subtitle, icon, description } = props;
  return (
    <Stack styles={cardContainerStyles} tokens={cardTokens}>
      {/* Header Section with SVG */}
      <Stack horizontal styles={cardHeaderStyles} tokens={{ childrenGap: 10 }}>
        {/* Include SVG */}
        <img
          src={icon ? icon : ReactSVG} // Replace with your SVG file's path
          alt="Card Icon"
          style={{ width: "60px", height: "60px" }} // Adjust dimensions as needed
        />
        <Stack>
          <Text variant="xLarge">{title}</Text>
          <Text variant="small">{subtitle}</Text>
        </Stack>
      </Stack>
      {/* Main Content */}
      <Text variant="medium">{description}</Text>
      {/* Footer Buttons */}
      {/* <Stack horizontal tokens={cardTokens} horizontalAlign="center">
        <ActionButton>Read more</ActionButton>
      </Stack> */}
    </Stack>
  );
};

export default Card;
