import { FC } from "react";
interface Button {
  children: React.ReactNode;
  color?: string;
  size?: string;
}

const styles = {
  button: "grid place-items-center rounded-lg",
  color: {
    default: "text-defaultText bg-defaultBG",
    primary: "text-notDefaultText bg-primaryBG",
    secondary: "text-notDefaultText bg-secondaryBG",
    danger: "text-notDefaultText bg-dangerBG",
  },
  size: {
    default: "w-20 h-9",
  },
  hover: {},
};
export const Button: FC<Button> = ({ children, color, size }) => {
  const buttonStyles = [
    styles.button,
    !color && styles.color.default,
    // color === "default" && styles.color.default,
    // color === "primary" && styles.color.primary,
    // color === "secondary" && styles.color.secondary,
    // color === "danger" && styles.color.danger,
    !size && styles.size.default,
  ].filter(Boolean);
  return <div className={buttonStyles.join(" ")}>{children}</div>;
};
