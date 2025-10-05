import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#000", borderColor: "#1f1f1f" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight transition-colors"
              style={{ color: "#e50914" }}
            >
              SIDDHIVINAYAK
              <span className="block text-sm" style={{ color: "#ffffffbf" }}>
                ENTERPRISES
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                About
              </Link>
              <Link
                to="/clients"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                Clients
              </Link>
              <Link
                to="/services"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                Services
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: "#fff" }}
              >
                Contact
              </Link>
              <a
                href="https://wa.me/918080242558?text=Hi, I'm interested in your products and services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-sm font-bold transition-colors"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-2xl font-bold"
              style={{ color: "#fff" }}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t"
              style={{ backgroundColor: "#000", borderColor: "#1f1f1f" }}
            >
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/clients"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{ color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://wa.me/918080242558?text=Hi, I'm interested in your products and services"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-bold transition-colors"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
