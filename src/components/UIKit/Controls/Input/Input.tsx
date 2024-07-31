import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.scss";

type TInputProps = ComponentPropsWithoutRef<"input">;

const Input = ({ className, ...props }: TInputProps) => {
  return (
    <input
      className={` ${styles.input} ${className ? className : ""}`}
      {...props}
    />
  );
};

export default Input;
