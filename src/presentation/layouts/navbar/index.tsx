import { Link } from "react-router-dom";
import MobileMenu from "./components/mobile-menu";
import NavLink from "./components/presentation/nav-link";
import "./navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <h1>Book Web App </h1>
        </Link>
        <section>
          <NavLink />
        </section>
        <MobileMenu />
      </nav>
    </header>
  );
}
