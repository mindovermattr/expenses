import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";

type TButtonProps =
  | {
      variant?: "contained" | "outlined" | "text";
      children?: React.ReactNode;
    } & ComponentPropsWithoutRef<"button">;

const Button = ({
  variant = "contained",
  className,
  children,
  ...props
}: TButtonProps) => {
  let variantStyles;

  switch (variant) {
    case "contained":
      variantStyles = styles["button--contained"];
      break;
    case "outlined":
      variantStyles = styles["button--outlined"];
      break;
    case "text":
      variantStyles = styles["button--text"];
      break;
    default:
      variantStyles = styles["button--contained"];
      break;
  }

  return (
    <button
      className={`${styles.button} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
