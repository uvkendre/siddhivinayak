import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profiles from "./pages/Profiles";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Products from "./components/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Preload a few key images to improve LCP in production
    const links = [
      "/src/assets/category1/Corporate Office Uniforms.png",
      "/src/assets/category1/Hospitality Uniforms.png",
      "/src/assets/category2/Premium Gift Hamper Sets.png",
    ];
    links.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
        <Routes>
          <Route path="/" element={<Profiles />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
