import * as Root from "@radix-ui/react-toast";
import { PropsWithChildren } from "react";
import { ToastProps } from "./models/types";
import "./toast.scss";

const Toast = (props: PropsWithChildren<ToastProps>) => {
  const { children, description, action, open, setOpen, title, actionAltText = "alt" } = props;

  return (
    <Root.Provider duration={2000} swipeDirection="right" label="Notification">
      {children}
      <Root.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Root.Title className="ToastTitle">{title}</Root.Title>
        <Root.Description className="ToastDescription" asChild>
          {description}
        </Root.Description>
        <Root.Action className="ToastAction" asChild altText={actionAltText}>
          {action}
        </Root.Action>
      </Root.Root>
      <Root.Viewport className="ToastViewport" />
    </Root.Provider>
  );
};

export default Toast;
