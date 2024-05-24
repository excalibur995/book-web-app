import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import NavLink from "../presentation/nav-link";
import "./mobile-menu.scss";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="ham">
        <Menu onClick={toggleDrawer} />
        <Drawer className="drawer-custom" open={isOpen} onClose={toggleDrawer} direction="right" lockBackgroundScroll>
          <div aria-haspopup={isOpen} className="drawer-content">
            <NavLink onClick={() => toggleDrawer()} />
          </div>
          <XIcon className="x-button" onClick={toggleDrawer} size={32} />
        </Drawer>
      </div>
    </>
  );
}

export default MobileMenu;
