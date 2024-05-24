import { ROUTER } from "../../../models/types";

export type RouterPath = (typeof ROUTER)[number]["path"];

export interface NavlinkProps {
  onClick?: (nav: RouterPath) => void;
}
