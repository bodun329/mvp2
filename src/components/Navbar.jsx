import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/favorites" style={{ marginRight: "15px" }}>Favorites</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;