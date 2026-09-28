import { Link } from "react-router-dom";

function Navbar() {
  // Navigation links allow users to access all portfolio pages
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MJ
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;