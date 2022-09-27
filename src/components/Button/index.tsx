import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import styles from "./Button.module.scss";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  full?: boolean;
}

const Button: FC<IProps> = ({
  type = "button",
  className = "",
  size = "md",
  variant = "primary",
  full,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.container} ${styles[size]} ${styles[variant]} `.concat(
        className
      )}
      style={{ width: full ? "100%" : undefined }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
