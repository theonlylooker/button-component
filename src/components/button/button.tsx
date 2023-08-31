import { FC } from "react";
interface Button {
  children: React.ReactNode;
  color?: string;
  size?: string;
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  StartIcon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  EndIcon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const styles = {
  button: "grid place-items-center rounded-lg cursor-pointer",
  disabled: "cursor-none pointer-events-none",
  color: {
    default: "text-defaultText bg-defaultBG",
    primary: "text-notDefaultText bg-primaryBG",
    secondary: "text-notDefaultText bg-secondaryBG",
    danger: "text-notDefaultText bg-dangerBG",
  },
  background: {
    default: "bg-defaultBG",
    primary: "bg-primaryBG",
    secondary: "bg-secondaryBG",
    danger: "bg-dangerBG",
    white: "bg-white",
  },
  text: {
    default: "text-defaultText",
    white: "text-white",
    primary: "text-primaryVariation",
    secondary: "text-secondaryBG",
    danger: "text-dangerBG",
    disabled: "text-disabledText",
  },
  size: {
    default: "w-20 h-9",
    sm: "w-[73px] h-8",
    lg: "w-24 h-11",
  },
  hover: {
    colorDefault: "hover:bg-defaultBGHover",
    colorPrimary: "hover:bg-primaryBGHover",
    colorSecondary: "hover:bg-secondaryBGHover",
    colorDanger: "hover:bg-dangerBGHover",
    bgDefault: "hover:bg-defaultBG hover:bg-opacity-10",
    bgPrimary: "hover:bg-primaryBG hover:bg-opacity-10",
    bgSecondary: "hover:bg-secondaryBG hover:bg-opacity-10",
    bgDanger: "hover:bg-dangerBG hover:bg-opacity-10",
  },
  outline: {
    default: "outline outline-defaultBG",
    primary: "outline outline-primaryVariation",
    secondary: "outline outline-secondaryBG",
    danger: "outline outline-dangerBG",
  },
  boxshadow: {
    default: "shadow-mydefault",
    none: "shadow-none",
  },
};
export const Button: FC<Button> = ({
  children,
  color,
  size,
  variant,
  disableShadow,
  disabled,
  StartIcon,
  EndIcon,
}) => {
  const buttonStyles = [
    styles.button,
    !variant &&
      (!color || color === "default") &&
      styles.background.default +
        " " +
        styles.text.default +
        " " +
        styles.hover.colorDefault +
        " " +
        styles.boxshadow.default,
    !variant &&
      color === "primary" &&
      styles.background.primary +
        " " +
        styles.text.white +
        " " +
        styles.hover.colorPrimary +
        " " +
        styles.boxshadow.default,
    !variant &&
      color === "secondary" &&
      styles.background.secondary +
        " " +
        styles.text.white +
        " " +
        styles.hover.colorSecondary +
        " " +
        styles.boxshadow.default,
    !variant &&
      color === "danger" &&
      styles.background.danger +
        " " +
        styles.text.white +
        " " +
        styles.hover.colorDanger +
        " " +
        styles.boxshadow.default,
    variant === "outline" &&
      (!color || color === "default") &&
      styles.background.white +
        " " +
        styles.outline.default +
        " " +
        styles.hover.bgDefault,
    variant === "outline" &&
      color === "primary" &&
      styles.background.white +
        " " +
        styles.outline.primary +
        " " +
        styles.text.primary +
        " " +
        styles.hover.bgPrimary,
    variant === "outline" &&
      color === "secondary" &&
      styles.background.white +
        " " +
        styles.outline.secondary +
        " " +
        styles.text.secondary +
        " " +
        styles.hover.bgSecondary,
    variant === "outline" &&
      color === "danger" &&
      styles.background.white +
        " " +
        styles.outline.danger +
        " " +
        styles.text.danger +
        " " +
        styles.hover.bgDanger,
    variant === "text" &&
      (!color || color === "default") &&
      styles.background.white +
        " " +
        styles.text.default +
        " " +
        styles.hover.bgDefault,
    variant === "text" &&
      color === "primary" &&
      styles.background.white +
        " " +
        styles.text.primary +
        " " +
        styles.hover.bgPrimary,
    variant === "text" &&
      color === "secondary" &&
      styles.background.white +
        " " +
        styles.text.secondary +
        " " +
        styles.hover.bgSecondary,
    variant === "text" &&
      color === "danger" &&
      styles.background.white +
        " " +
        styles.text.danger +
        " " +
        styles.hover.bgDanger,
    (size === "md" || !size) && styles.size.default,
    size === "sm" && styles.size.sm,
    size === "lg" && styles.size.lg,
    disableShadow && styles.boxshadow.none,
    disabled &&
      styles.boxshadow.none +
        " " +
        styles.text.disabled +
        " " +
        styles.disabled,
  ].filter(Boolean);

  return (
    <div className={buttonStyles.join(" ")}>
      <div className="flex items-center gap-2">
        {StartIcon && <StartIcon width={15} height={15} />}
        {children}
        {EndIcon && <EndIcon width={15} height={15} />}
      </div>
    </div>
  );
};
