import * as React from "react";
import { ContextualMenu, IContextualMenuProps } from "@fluentui/react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { FluentIconNames } from "../../../types";

export interface IMenuButtonProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  label: string;
  icon: FluentIconNames;
  menuProps: IContextualMenuProps;

  //   Item props example:
  //   items: [
  //     {
  //       key: "emailMessage",
  //       text: "Email message",
  //       iconProps: { iconName: "Mail" },
  //     },
  //     {
  //       key: "calendarEvent",
  //       text: "Calendar event",
  //       iconProps: { iconName: "Calendar" },
  //     },
  //   ],
}

export const MenuButton: React.FunctionComponent<IMenuButtonProps> = (
  props
) => {
  const { label, icon, menuProps } = props;
  const iconprops = { iconName: icon };

  return (
    <DefaultButton
      text={label}
      iconProps={iconprops}
      menuProps={menuProps}
      // Optional callback to customize menu rendering
      menuAs={_getMenu}
      // Optional callback to do other actions (besides opening the menu) on click
      onMenuClick={_onMenuClick}
      // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
      // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
      // persistMenu={true}
      allowDisabledFocus
    />
  );
};

function _getMenu(props: IContextualMenuProps): JSX.Element {
  // Customize contextual menu with menuAs
  return <ContextualMenu {...props} />;
}

function _onMenuClick(ev?: React.SyntheticEvent<any>) {
  console.log(ev);
}
