import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "default",
      destructive: "destructive",
      outline: "outline",
      secondary: "secondary",
      ghost: "ghost",
      link: "link",
    },
    size: {
      default: "default",
      sm: "sm",
      lg: "lg",
      icon: "icon",
    },
    block: {
      true: "block",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
