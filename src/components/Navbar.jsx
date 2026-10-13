import { Plane, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <Plane size={22} />
          </span>
          <span>Trip<span className="brand-highlight">Ease</span></span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#destinations" className="nav-button">
          Explore Now
        </a>

        <a
          href="#destinations"
          className="mobile-menu"
          aria-label="Go to destinations"
        >
          <Menu size={25} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;