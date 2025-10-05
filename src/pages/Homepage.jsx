import React, { useMemo } from "react";
import { loadAssetImages, mapImagesByKeyword } from "../utils/images";

const Homepage = () => {
  const { category1, category2 } = useMemo(() => loadAssetImages(), []);
  const uniformsCarousel = [
    {
      label: "Corporate Uniforms",
      img:
        mapImagesByKeyword(category1, [
          "corporate",
          "office",
          "uniform",
          "blazer",
          "shirt",
        ]) || category1[0]?.src,
    },
    {
      label: "Industrial Workwear",
      img:
        mapImagesByKeyword(category1, [
          "industrial",
          "workwear",
          "safety",
          "vest",
        ]) || category1[1]?.src,
    },
    {
      label: "Healthcare Scrubs",
      img:
        mapImagesByKeyword(category1, [
          "healthcare",
          "scrubs",
          "nurse",
          "doctor",
        ]) || category1[2]?.src,
    },
    {
      label: "Hospitality Wear",
      img:
        mapImagesByKeyword(category1, ["hospitality", "chef", "service"]) ||
        category1[3]?.src,
    },
    {
      label: "Gift Hampers",
      img:
        mapImagesByKeyword(category2, ["gift", "hamper", "premium"]) ||
        category2[0]?.src,
    },
    {
      label: "Custom Packaging",
      img:
        mapImagesByKeyword(category2, ["packaging", "box", "package"]) ||
        category2[1]?.src,
    },
    {
      label: "Tech Accessories",
      img:
        mapImagesByKeyword(category2, ["tech", "gadget", "device"]) ||
        category2[2]?.src,
    },
    {
      label: "Stationery",
      img:
        mapImagesByKeyword(category2, ["stationery", "notebook", "pen"]) ||
        category2[3]?.src,
    },
  ];
  const continueBrowsing = [
    {
      label: "Office Shirts",
      img:
        mapImagesByKeyword(category1, ["shirt", "office", "corporate"]) ||
        category1[0]?.src,
    },
    {
      label: "Safety Vests",
      img:
        mapImagesByKeyword(category1, ["safety", "vest"]) || category1[1]?.src,
    },
    {
      label: "Scrubs",
      img:
        mapImagesByKeyword(category1, ["scrub", "healthcare"]) ||
        category1[2]?.src,
    },
    {
      label: "Branded Tees",
      img:
        mapImagesByKeyword(category1, ["tee", "tshirt", "polo"]) ||
        category1[3]?.src,
    },
    {
      label: "Gift Hampers",
      img:
        mapImagesByKeyword(category2, ["gift", "hamper"]) || category2[0]?.src,
    },
    {
      label: "Bags",
      img:
        mapImagesByKeyword(category2, ["bag", "backpack"]) || category2[1]?.src,
    },
    {
      label: "Stationery Set",
      img:
        mapImagesByKeyword(category2, ["stationery", "notebook", "pen"]) ||
        category2[2]?.src,
    },
    {
      label: "Tech Accessories",
      img:
        mapImagesByKeyword(category2, ["tech", "gadget"]) || category2[3]?.src,
    },
  ];
  const newThisWeek = [
    {
      label: "Eco Packaging",
      img:
        mapImagesByKeyword(category2, ["packaging", "eco"]) ||
        category2[1]?.src,
    },
    {
      label: "Premium Hampers",
      img:
        mapImagesByKeyword(category2, ["premium", "hamper", "gift"]) ||
        category2[0]?.src,
    },
    {
      label: "Custom Socks",
      img: mapImagesByKeyword(category2, ["sock"]) || category2[4]?.src,
    },
    {
      label: "Team Tracksuits",
      img:
        mapImagesByKeyword(category1, ["sports", "jersey", "tracksuit"]) ||
        category1[5]?.src,
    },
    {
      label: "Event Lanyards",
      img:
        mapImagesByKeyword(category2, ["office", "branding"]) ||
        category2[8]?.src,
    },
    {
      label: "Thermal Bottles",
      img:
        mapImagesByKeyword(category2, ["drinkware", "bottle"]) ||
        category2[6]?.src,
    },
  ];
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      {/* Netflix-like Hero with email capture */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#000" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(229,9,20,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(229,9,20,0.25), transparent 40%)",
          }}
        ></div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: "#ffffff" }}
            >
              Premium Apparel, Packaging & Corporate Gifting Solutions
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              Tailored for you. Low MOQ, premium quality, and dedicated support
              at every step.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["Premium • Customizable", "Low MOQ", "On-time Delivery"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "#141414",
                      border: "1px solid #2a2a2a",
                      color: "#ffffffb3",
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
            <div className="flex items-center gap-3 mb-8">
              <a
                href="/products"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <span className="text-lg">▶</span>
                Play
              </a>
              <button
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#333", color: "#fff" }}
              >
                <span className="text-lg">＋</span>
                My List
              </button>
              <a
                href="/services"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                Explore
              </a>
            </div>
            <div
              className="bg-[#141414] border rounded-xl p-4 sm:p-6"
              style={{ borderColor: "#2a2a2a" }}
            >
              <p
                className="text-sm sm:text-base mb-3"
                style={{ color: "#ffffffbf" }}
              >
                Ready to explore? Enter your email and we’ll reach out with
                options.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email =
                    e.currentTarget.querySelector("input")?.value || "";
                  window.location.href = `mailto:cdsiddhivinayak@gmail.com?subject=Inquiry&body=Email:%20${encodeURIComponent(email)}`;
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="flex-1 px-4 py-4 rounded-lg text-white"
                  style={{ backgroundColor: "#000", border: "1px solid #333" }}
                />
                <button
                  className="px-6 py-4 rounded-lg font-bold"
                  style={{ backgroundColor: "#e50914", color: "#fff" }}
                >
                  Get Started
                </button>
              </form>
              <div className="text-xs mt-3" style={{ color: "#ffffff80" }}>
                By proceeding, you agree to be contacted about services and
                products.
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {["MIT", "FM", "VA", "PC"].map((badge) => (
                <div
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #2a2a2a",
                    color: "#ffffffb3",
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reasons section (Netflix-style features) */}
      <section className="py-16" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Enjoy on your terms",
                desc: "Watch-like browsing: explore uniforms, packaging and gifting, anywhere.",
                icon: "📺",
              },
              {
                title: "Download catalogs",
                desc: "Save product ideas to review offline with your team.",
                icon: "⬇️",
              },
              {
                title: "Works everywhere",
                desc: "Phone, tablet, laptop — our catalogue adapts to you.",
                icon: "📱",
              },
              {
                title: "For teams",
                desc: "Create shortlists for different departments and events.",
                icon: "👥",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#fff" }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#ffffffb3" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now-style carousels */}
      <section className="py-10" style={{ backgroundColor: "#141414" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            Trending Now
          </h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {uniformsCarousel.map((item, idx) => (
              <a
                key={idx}
                href="/products"
                className="min-w-[170px] rounded-md overflow-hidden relative group"
                style={{ backgroundColor: "#141414" }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="w-[170px] h-[240px] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                <div
                  className="absolute inset-x-0 bottom-0 p-2 text-xs"
                  style={{
                    color: "#fff",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.7) 100%)",
                  }}
                >
                  {item.label}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#fff", color: "#000" }}
                  >
                    ▶
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Continue Browsing */}
      <section className="py-8" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            Continue Browsing
          </h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {continueBrowsing.map((item, idx) => (
              <a
                key={idx}
                href="/products"
                className="min-w-[170px] rounded-md overflow-hidden relative group"
                style={{ backgroundColor: "#141414" }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="w-[170px] h-[170px] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                <div
                  className="absolute inset-x-0 bottom-0 p-2 text-xs"
                  style={{
                    color: "#fff",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.7) 100%)",
                  }}
                >
                  {item.label}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#fff", color: "#000" }}
                  >
                    ▶
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* New this week */}
      <section className="py-8" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            New this week
          </h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {newThisWeek.map((item, idx) => (
              <a
                key={idx}
                href="/products"
                className="min-w-[170px] rounded-md overflow-hidden relative group"
                style={{ backgroundColor: "#141414" }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="w-[170px] h-[240px] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                <div
                  className="absolute inset-x-0 bottom-0 p-2 text-xs"
                  style={{
                    color: "#fff",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.7) 100%)",
                  }}
                >
                  {item.label}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#fff", color: "#000" }}
                  >
                    ▶
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Industry pills */}
      <section className="py-10" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            Explore by Industry
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Corporate",
              "Industrial",
              "Hospitality",
              "Healthcare",
              "Education",
              "Defence",
              "Sports",
              "Events",
            ].map((p) => (
              <a
                key={p}
                href="/services"
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid #2a2a2a",
                  color: "#ffffffb3",
                }}
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like section using your copy */}
      <section className="py-16" style={{ backgroundColor: "#000" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{ color: "#fff" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is Siddhivinayak Enterprises?",
                a: "A premium provider of apparel, packaging and corporate gifting solutions established in 2022 by Devika Rahul Phadke, focused on low MOQ, quality, and dedicated support.",
              },
              {
                q: "How do orders work?",
                a: "We support flexible, scalable production with expert consultation, premium materials and on-time delivery.",
              },
              {
                q: "Where do you serve?",
                a: "Based in India and serving clients across sectors including MIT, Forbes Marshall, Valmet, Ladoba, Phadke Cars, Premium Cars, and Paashh.",
              },
              {
                q: "How do I get started?",
                a: "Explore services or contact us via WhatsApp or email for a tailored quote.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="rounded-xl border"
                style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
              >
                <summary
                  className="cursor-pointer select-none p-4 text-lg font-semibold"
                  style={{ color: "#fff" }}
                >
                  {item.q}
                </summary>
                <div className="px-4 pb-4" style={{ color: "#ffffffb3" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/services"
              className="inline-block px-6 py-4 rounded-lg font-bold"
              style={{ backgroundColor: "#e50914", color: "#fff" }}
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
