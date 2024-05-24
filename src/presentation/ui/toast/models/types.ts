import { Dispatch, SetStateAction } from "react";

export interface ToastProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  title?: React.ReactNode;
  actionAltText?: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
