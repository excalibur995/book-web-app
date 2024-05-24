import { Link } from "react-router-dom";
import { ROUTER } from "../../models/types";
import { NavlinkProps } from "./models/types";

function NavLink({ onClick }: NavlinkProps) {
  return (
    <>
      {ROUTER.map((route) => (
        <Link onClick={() => onClick?.(route.path)} key={route.path} to={route.path}>
          {route.label}
        </Link>
      ))}
    </>
  );
}

export default NavLink;
