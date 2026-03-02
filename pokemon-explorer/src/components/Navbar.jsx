import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;