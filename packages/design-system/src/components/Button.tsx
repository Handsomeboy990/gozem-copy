import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ variant = "primary", className, ...rest }: ButtonProps) {
  const classes = ["gz-button", `gz-button--${variant}`, className].filter(Boolean).join(" ");
  return <button className={classes} {...rest} />;
}
