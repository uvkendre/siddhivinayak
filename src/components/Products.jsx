import React, { useEffect, useMemo, useState } from "react";
// All icons removed - using emojis instead
import { loadAssetImages, mapImagesByKeyword } from "../utils/images";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "uniforms", name: "Uniforms", icon: "👔" },
    { id: "apparel", name: "Apparel", icon: "👕" },
    { id: "accessories", name: "Accessories", icon: "🎒" },
    { id: "stationery", name: "Stationery", icon: "📝" },
    { id: "gifts", name: "Gift Items", icon: "🎁" },
    { id: "tech", name: "Tech & Gadgets", icon: "📱" },
  ];

  const { category1, category2 } = useMemo(() => loadAssetImages(), []);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const products = [
    {
      id: 1,
      name: "Corporate Office Shirts",
      category: "uniforms",
      price: "₹299",
      originalPrice: "₹399",
      image:
        mapImagesByKeyword(category1, [
          "corporate",
          "office",
          "shirt",
          "blazer",
        ]) || category1[0]?.src,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      description:
        "Premium cotton corporate shirts with custom embroidery options",
    },
    {
      id: 2,
      name: "Industrial Safety Vests",
      category: "uniforms",
      price: "₹199",
      originalPrice: "₹249",
      image:
        mapImagesByKeyword(category1, [
          "safety",
          "vest",
          "industrial",
          "work",
        ]) || category1[1]?.src,
      rating: 4.6,
      reviews: 89,
      badge: "New",
      description: "High-visibility safety vests for industrial workers",
    },
    {
      id: 3,
      name: "Healthcare Scrubs",
      category: "uniforms",
      price: "₹349",
      originalPrice: "₹449",
      image:
        mapImagesByKeyword(category1, [
          "healthcare",
          "scrub",
          "doctor",
          "nurse",
        ]) || category1[2]?.src,
      rating: 4.9,
      reviews: 156,
      badge: "Popular",
      description: "Comfortable medical scrubs with multiple color options",
    },
    {
      id: 4,
      name: "Custom Branded T-Shirts",
      category: "apparel",
      price: "₹199",
      originalPrice: "₹299",
      image:
        mapImagesByKeyword(category1, ["tshirt", "tee", "polo", "apparel"]) ||
        category1[3]?.src,
      rating: 4.7,
      reviews: 203,
      badge: "Custom",
      description: "100% cotton t-shirts with custom printing and embroidery",
    },
    {
      id: 5,
      name: "Corporate Gift Hampers",
      category: "gifts",
      price: "₹1,299",
      originalPrice: "₹1,599",
      image:
        mapImagesByKeyword(category2, ["gift", "hamper", "premium"]) ||
        category2[0]?.src,
      rating: 4.8,
      reviews: 67,
      badge: "Premium",
      description: "Luxury corporate gift hampers with premium items",
    },
    {
      id: 6,
      name: "Custom Branded Bags",
      category: "accessories",
      price: "₹449",
      originalPrice: "₹599",
      image:
        mapImagesByKeyword(category2, ["bag", "backpack"]) || category2[1]?.src,
      rating: 4.5,
      reviews: 98,
      badge: "Eco-Friendly",
      description: "Durable branded bags for office and promotional use",
    },
    {
      id: 7,
      name: "Corporate Stationery Set",
      category: "stationery",
      price: "₹199",
      originalPrice: "₹299",
      image:
        mapImagesByKeyword(category2, ["stationery", "notebook", "pen"]) ||
        category2[2]?.src,
      rating: 4.6,
      reviews: 145,
      badge: "Complete Set",
      description: "Complete corporate stationery with custom branding",
    },
    {
      id: 8,
      name: "Custom Tech Accessories",
      category: "tech",
      price: "₹599",
      originalPrice: "₹799",
      image:
        mapImagesByKeyword(category2, ["tech", "gadget", "device"]) ||
        category2[3]?.src,
      rating: 4.4,
      reviews: 78,
      badge: "Tech",
      description: "Custom branded tech accessories and gadgets",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const allCategory1 = category1;
  const allCategory2 = category2;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
      {/* Hero Section - Netflix dark with red CTA */}
      <section className="py-20" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              style={{ color: "#fff" }}
            >
              Our Products
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              Discover our range across uniforms, apparel, packaging, gifting,
              and tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918080242558?text=Hi, I'm interested in your products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                <span className="text-lg">📱</span>
                Get Quote on WhatsApp
              </a>
              <a
                href="mailto:cdsiddhivinayak@gmail.com?subject=Product Inquiry"
                className="px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
                style={{ border: "1px solid #2a2a2a", color: "#fff" }}
              >
                <span className="text-lg">📧</span>
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
      {lightboxImage && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setLightboxImage(null)}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-w-[90vw] max-h-[85vh]">
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Close"
                className="absolute -top-10 right-0 px-3 py-1 rounded-md text-sm font-semibold"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                ✕ Close
              </button>
              <img
                src={lightboxImage}
                alt="Preview"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              />
              <div className="mt-3 text-center">
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-2 rounded-md text-sm font-semibold"
                  style={{ border: "1px solid #2a2a2a", color: "#fff" }}
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Controls */}
      <section
        className="py-8"
        style={{
          backgroundColor: "#000",
          borderTop: "1px solid #1f1f1f",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors`}
                  style={
                    selectedCategory === category.id
                      ? { backgroundColor: "#e50914", color: "#fff" }
                      : {
                          backgroundColor: "#141414",
                          color: "#fff",
                          border: "1px solid #2a2a2a",
                        }
                  }
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div
                className="flex rounded-lg p-1"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid #2a2a2a",
                }}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors`}
                  style={
                    viewMode === "grid"
                      ? { backgroundColor: "#e50914", color: "#fff" }
                      : { color: "#fff" }
                  }
                >
                  <span className="text-lg">⊞</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors`}
                  style={
                    viewMode === "list"
                      ? { backgroundColor: "#e50914", color: "#fff" }
                      : { color: "#fff" }
                  }
                >
                  <span className="text-lg">☰</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full gallery from category1 */}
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#fff" }}>
            Uniforms & Apparel (category1)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {allCategory1.map((img, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden border"
                style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
              >
                <div
                  className="w-full bg-black flex items-center justify-center cursor-zoom-in"
                  style={{ aspectRatio: "4 / 3", maxHeight: "11rem" }}
                  onClick={() => setLightboxImage(img.src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setLightboxImage(img.src);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-2 text-xs" style={{ color: "#ffffffb3" }}>
                  {img.name}
                </div>
              </div>
            ))}
          </div>

          {/* Full gallery from category2 */}
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#fff" }}>
            Branding & Gifting (category2)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {allCategory2.map((img, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden border"
                style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
              >
                <div
                  className="w-full bg-black flex items-center justify-center cursor-zoom-in"
                  style={{ aspectRatio: "4 / 3", maxHeight: "11rem" }}
                  onClick={() => setLightboxImage(img.src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setLightboxImage(img.src);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-2 text-xs" style={{ color: "#ffffffb3" }}>
                  {img.name}
                </div>
              </div>
            ))}
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl transition-all duration-300 group overflow-hidden border"
                  style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
                >
                  {/* Product Image */}
                  <div
                    className="relative overflow-hidden flex items-center justify-center cursor-zoom-in w-full"
                    style={{
                      aspectRatio: "4 / 3",
                      maxHeight: "14rem",
                      backgroundColor: "#000",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-300"
                      onClick={() => setLightboxImage(product.image)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setLightboxImage(product.image);
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#e50914", color: "#fff" }}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: "#00000080", color: "#fff" }}
                      ></button>
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: "#00000080", color: "#fff" }}
                      ></button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:opacity-100 transition-colors"
                      style={{ color: "#fff" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-sm mb-4 line-clamp-2"
                      style={{ color: "#ffffffb3" }}
                    >
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-400" : ""}`}
                            style={
                              i < Math.floor(product.rating)
                                ? {}
                                : { color: "#555" }
                            }
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#ffffffb3" }}
                      >
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "#fff" }}
                        >
                          {product.price}
                        </span>
                        <span
                          className="text-lg line-through"
                          style={{ color: "#777" }}
                        >
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/918080242558?text=Hi, I'm interested in ${product.name} - ${product.price}`,
                            "_blank",
                          )
                        }
                        className="flex-1 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: "#e50914", color: "#fff" }}
                      >
                        <span className="text-lg">🛒</span>
                        Get Quote
                      </button>
                      <button
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                        style={{ border: "2px solid #2a2a2a", color: "#fff" }}
                      >
                        <span className="text-lg">❤️</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl transition-all duration-300 p-6 border"
                  style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="w-full h-36 lg:h-28 bg-black rounded-lg flex items-center justify-center cursor-zoom-in">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="max-h-full w-auto object-contain"
                          onClick={() => setLightboxImage(product.image)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              setLightboxImage(product.image);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: "#fff" }}
                        >
                          {product.name}
                        </h3>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: "#e50914", color: "#fff" }}
                        >
                          {product.badge}
                        </span>
                      </div>
                      <p className="mb-4" style={{ color: "#ffffffb3" }}>
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-400" : ""}`}
                                  style={
                                    i < Math.floor(product.rating)
                                      ? {}
                                      : { color: "#555" }
                                  }
                                >
                                  ⭐
                                </span>
                              ))}
                            </div>
                            <span
                              className="text-sm font-medium"
                              style={{ color: "#ffffffb3" }}
                            >
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className="text-2xl font-bold"
                              style={{ color: "#fff" }}
                            >
                              {product.price}
                            </span>
                            <span
                              className="text-lg line-through"
                              style={{ color: "#777" }}
                            >
                              {product.originalPrice}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            window.open(
                              `https://wa.me/918080242558?text=Hi, I'm interested in ${product.name} - ${product.price}`,
                              "_blank",
                            )
                          }
                          className="py-3 px-6 rounded-lg font-semibold transition-colors flex items-center gap-2"
                          style={{ backgroundColor: "#e50914", color: "#fff" }}
                        >
                          <span className="text-lg">🛒</span>
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#fff" }}
          >
            Don’t see what you’re looking for?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "#ffffffbf" }}
          >
            We craft custom solutions across apparel, packaging and gifts. Tell
            us your need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918080242558?text=Hi, I need custom products for my business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "#e50914", color: "#fff" }}
            >
              Custom Quote
            </a>
            <a
              href="mailto:cdsiddhivinayak@gmail.com?subject=Custom Product Inquiry"
              className="px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              style={{ border: "1px solid #2a2a2a", color: "#fff" }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
