import "./styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="navbar__links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div className="navbar__button">
        <button type="button">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
