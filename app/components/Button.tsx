import type { ComponentProps } from "react";
import { Button as AriaButton } from "react-aria-components";
import twMerge from "~/lib/tw-merge";

type Props = Omit<ComponentProps<typeof AriaButton>, "className"> & {
  className?: string;
  variant?: "outline" | "fill" | "none";
};

const VARIANTS = {
  none: "",
  fill: "bg-lavender text-base",
  outline: "border-2 border-solid border-lavender text-lavender",
} as const;

function Button(props: Props) {
  const { className = "", variant = "fill", ...other } = props;

  const variantStyle = VARIANTS[variant];
  const styles = twMerge(
    "rounded-md transition",
    "hover:brightness-110 pressed:brightness-90",
    variantStyle,
    className
  );

  return <AriaButton className={styles} {...other} />;
}

export default Button;
