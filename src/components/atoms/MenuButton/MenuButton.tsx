import * as React from "react";
import { ContextualMenu, IContextualMenuProps } from "@fluentui/react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

export interface IMenuButtonProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  text: string;
  iconName: string;
  isPrimary?: boolean;
}

export const MenuButton: React.FunctionComponent<IMenuButtonProps> = (
  props
) => {
  const { text, iconName, isPrimary } = props;

  const icon = { iconName: iconName };

  const smsMessage = encodeURIComponent(
    "Hello, I am interested in your software development services."
  );

  const subject = encodeURIComponent("Let's connect");

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "skype",
        text: "Skype message",
        iconProps: { iconName: "SkypeLogo" },
        onClick: () => {
          window.open("skype:rochurosh38@hotmail.com?chat", "_blank");
        },
      },
      {
        key: "mail",
        text: "Email",
        iconProps: { iconName: "Mail" },
        onClick: () => {
          window.location.href = `mailto:email@example.com?subject=${subject}&body=${smsMessage}`;
        },
      },
      // {
      //   key: "argentinaSms",
      //   text: "SMS 🇦🇷",
      //   iconProps: { iconName: "CannedChat" },
      //   onClick: () => {
      //     window.location.href = `sms:+541125127060?body=${smsMessage}`;
      //   },
      // },
      // {
      //   key: "usSMS",
      //   text: "SMS 🇺🇸",
      //   iconProps: { iconName: "CannedChat" },
      //   onClick: () => {
      //     window.location.href = `sms:+14087570660?body=${smsMessage}`;
      //   },
      // },
    ],
  };

  return isPrimary ? (
    <PrimaryButton
      styles={{ root: { maxHeight: "35px" } }}
      text={text}
      iconProps={icon}
      menuProps={menuProps}
      menuAs={_getMenu}
      persistMenu={true}
    />
  ) : (
    <DefaultButton
      styles={{ root: { maxHeight: "35px" } }}
      text={text}
      iconProps={icon}
      menuProps={menuProps}
      menuAs={_getMenu}
      persistMenu={true}
    />
  );
};

function _getMenu(props: IContextualMenuProps): JSX.Element {
  // Customize contextual menu with menuAs
  return <ContextualMenu {...props} />;
}
