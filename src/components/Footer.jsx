import { Plane, MapPin, Mail, Phone } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            <Plane size={25} />
            TripEase
          </h2>
          <p>
            Discover beautiful destinations and make
            every journey unforgettable with TripEase.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <MapPin size={16} />
            India
          </p>
          <p>
            <Mail size={16} />
            hello@tripease.example
          </p>
          <p>
            <Phone size={16} />
            +91 98765 43210
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} TripEase.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;