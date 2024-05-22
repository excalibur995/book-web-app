import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import * as React from "react";
import "./button.scss";
import { ButtonProps } from "./models/types";
import { buttonVariants } from "./models/variant";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
