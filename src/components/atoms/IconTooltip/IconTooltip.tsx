import * as React from "react";
import { IIconProps, initializeIcons } from "@fluentui/react";
import { TooltipHost, ITooltipHostStyles } from "@fluentui/react/lib/Tooltip";
import { IconButton } from "@fluentui/react/lib/Button";
import { useId } from "@fluentui/react-hooks";

// Initialize icons in case this example uses them
initializeIcons();

const calloutProps = { gapSpace: 0 };

// TooltipHost root styles
const hostStyles: Partial<ITooltipHostStyles> = {
  root: { display: "inline-block", zIndex: 9999 }, // Ensure high z-index for visibility
};

export interface IIconTooltipProps {
  iconName: string;
}

export const IconTooltip: React.FunctionComponent<IIconTooltipProps> = (
  props
) => {
  const { iconName } = props;
  const tooltipId = useId("tooltip");
  const icon: IIconProps = { iconName: iconName };

  return (
    <div>
      <TooltipHost
        content="Schedule an appointment with me"
        id={tooltipId}
        calloutProps={calloutProps}
        styles={hostStyles}
        setAriaDescribedBy={true} // Optional: You can set this to `true` if needed
      >
        <IconButton
          styles={{
            icon: { fontSize: "25px" }, // Customize the icon size here
          }}
          iconProps={icon}
          aria-label="Calendar"
        />
      </TooltipHost>
    </div>
  );
};
