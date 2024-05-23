import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <h1>Book Web App </h1>
        </Link>
        <section>
          <Link to="/favourite">Favourite Books</Link>
          <Link to="/add-book">Add new Books</Link>
        </section>
      </nav>
    </header>
  );
}
