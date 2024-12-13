import * as React from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
  IPivotStyles,
} from "@fluentui/react";

// Style for labels
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

// Custom styles for the Pivot component
const pivotStyles: Partial<IPivotStyles> = {
  root: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    width: "fit-content",
  },
  link: {
    justifyContent: "flex-start", // Align tab text to the left
    paddingLeft: "10px", // Add padding for text alignment
    borderBottom: "none", // Remove default bottom indicator
    position: "relative", // Position for the custom left indicator
    selectors: {
      "::before": {
        content: '""', // Override the content of the default indicator
        display: "none", // Disable the indicator entirely
      },
    },
  },
  linkIsSelected: {
    borderLeft: "2px solid #0078d4", // Add a left indicator for selected item
    backgroundColor: "#f3f2f1", // Optional: Highlight selected item background
    paddingLeft: "6px", // Adjust padding to align text with the indicator
  },
};

export const VerticalPivot: React.FunctionComponent = () => {
  return (
    <Pivot styles={pivotStyles} aria-label="Vertical Pivot Example">
      <PivotItem
        headerText="My Files"
        headerButtonProps={{
          "data-order": 1,
          "data-title": "My Files Title",
        }}
      >
        <Label styles={labelStyles}>Pivot #1</Label>
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  );
};
