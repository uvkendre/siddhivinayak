import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-3xl font-extrabold mb-2"
                style={{ color: "#e50914" }}
              >
                SIDDHIVINAYAK
                <span className="block text-xl" style={{ color: "#ffffffbf" }}>
                  ENTERPRISES
                </span>
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#ffffffb3" }}
              >
                Your trusted partner for end-to-end branding and apparel
                solutions. We provide highly customized, low MOQ, and timely
                delivery for all your needs.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/918080242558"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid #2a2a2a",
                }}
              >
                <span className="text-white text-lg">📱</span>
              </a>
              <a
                href="mailto:cdsiddhivinayak@gmail.com"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid #2a2a2a",
                }}
              >
                <span className="text-white text-lg">📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold" style={{ color: "#fff" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors text-sm flex items-center gap-2 group"
                  style={{ color: "#ffffffb3" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold" style={{ color: "#fff" }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Corporate Uniforms
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Industrial Workwear
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Healthcare Uniforms
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Custom Packaging
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Gift Hampers
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Stationery
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                Tech Accessories
              </li>
              <li className="text-sm" style={{ color: "#ffffffb3" }}>
                And Much More...
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold" style={{ color: "#fff" }}>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1 flex-shrink-0">👤</span>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#ffffffb3" }}
                  >
                    DEVIKA PHADKE
                  </p>
                  <p className="text-xs" style={{ color: "#999" }}>
                    Contact Person
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1 flex-shrink-0">📧</span>
                <div>
                  <a
                    href="mailto:cdsiddhivinayak@gmail.com"
                    className="transition-colors text-sm"
                    style={{ color: "#ffffffb3" }}
                  >
                    cdsiddhivinayak@gmail.com
                  </a>
                  <div className="text-sm" style={{ color: "#ffffffb3" }}>
                    devikaphadke5@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1 flex-shrink-0">📱</span>
                <div>
                  <a
                    href="tel:+918080242558"
                    className="transition-colors text-sm"
                    style={{ color: "#ffffffb3" }}
                  >
                    +91 8080242558
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg mt-1 flex-shrink-0">⏰</span>
                <div>
                  <p className="text-sm" style={{ color: "#ffffffb3" }}>
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-xs" style={{ color: "#999" }}>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid #1f1f1f" }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm" style={{ color: "#ffffffb3" }}>
                © 2024 Siddhivinayak Enterprises. All rights reserved.
              </p>
              <p className="text-xs mt-1" style={{ color: "#999" }}>
                Crafting excellence in branding and apparel solutions
              </p>
            </div>
            <div className="flex space-x-8"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
