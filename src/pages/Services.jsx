import React, { useMemo } from "react";
import { loadAssetImages, mapImagesByKeyword } from "../utils/images";

const Services = () => {
  const serviceCategories = [
    {
      title: "CORPORATE AND OFFICE UNIFORMS",
      icon: "💼",
      description: "Professional attire for corporate environments",
      features: ["Custom tailoring", "Premium fabrics", "Brand embroidery"],
    },
    {
      title: "INDUSTRIAL AND WORKWARE UNIFORMS",
      icon: "🛡️",
      description: "Durable workwear for industrial settings",
      features: ["Safety compliance", "Durable materials", "Comfort fit"],
    },
    {
      title: "HOSPITALITY & SERVICE INDUSTRY UNIFORMS",
      icon: "☕",
      description: "Elegant uniforms for hospitality sector",
      features: ["Elegant designs", "Easy maintenance", "Brand consistency"],
    },
    {
      title: "HEALTHCARE UNIFORMS",
      icon: "❤️",
      description: "Medical-grade uniforms and scrubs",
      features: ["Medical grade", "Comfortable fit", "Easy cleaning"],
    },
    {
      title: "EDUCATION SECTOR UNIFORMS",
      icon: "🎓",
      description: "School and college uniform solutions",
      features: ["Student-friendly", "Durable design", "Cost-effective"],
    },
    {
      title: "DEFENCE AND SECURITY UNIFORMS",
      icon: "🔒",
      description: "Specialized uniforms for security personnel",
      features: [
        "Professional look",
        "Durable construction",
        "Functional design",
      ],
    },
    {
      title: "SPORTS AND FITNESS UNIFORMS",
      icon: "🏀",
      description: "Athletic wear and team uniforms",
      features: ["Performance fabric", "Team branding", "Moisture wicking"],
    },
    {
      title: "EVENTS & PROMOTIONAL UNIFORMS",
      icon: "🎁",
      description: "Custom uniforms for events and promotions",
      features: ["Event-specific", "Quick turnaround", "Brand visibility"],
    },
    {
      title: "OFFICE & WORK ESSENTIALS",
      icon: "💼",
      description: "Professional accessories and essentials",
      features: [
        "Professional accessories",
        "Quality materials",
        "Custom branding",
      ],
    },
    {
      title: "DRINKWARE & KITCHENWEAR",
      icon: "☕",
      description: "Custom branded drinkware and kitchen items",
      features: ["Custom printing", "Dishwasher safe", "Premium quality"],
    },
    {
      title: "CORPORATE STATIONERY",
      icon: "📄",
      description: "Business cards, letterheads, and office supplies",
      features: [
        "Professional design",
        "High-quality printing",
        "Brand consistency",
      ],
    },
    {
      title: "EVERYDAY GADGETS AND TECH",
      icon: "📱",
      description: "Custom tech accessories and gadgets",
      features: ["Modern design", "Custom branding", "Latest technology"],
    },
    {
      title: "PREMIUM GIFT HAMPER SETS",
      icon: "🎁",
      description: "Luxury corporate gift hampers",
      features: ["Luxury items", "Custom packaging", "Corporate gifting"],
    },
    {
      title: "SCENTED CANDLES AND DIFFUSERS",
      icon: "🕯️",
      description: "Aromatherapy and wellness products",
      features: ["Premium scents", "Eco-friendly", "Custom packaging"],
    },
    {
      title: "SKINCARE AND SELF CARE KITS",
      icon: "❤️",
      description: "Premium personal care products",
      features: ["Natural ingredients", "Premium quality", "Custom packaging"],
    },
    {
      title: "CUSTOM SOCKS",
      icon: "🧦",
      description: "Personalized sock designs and branding",
      features: ["Custom designs", "Comfortable fit", "Durable material"],
    },
    {
      title: "CUSTOM PACKAGING SOLUTIONS",
      icon: "📦",
      description: "Branded packaging and presentation",
      features: ["Custom design", "Brand consistency", "Eco-friendly options"],
    },
    {
      title: "OFFICE AND WORK BAGS",
      icon: "🎒",
      description: "Professional bags and luggage",
      features: [
        "Professional design",
        "Durable construction",
        "Custom branding",
      ],
    },
  ];

  const { category1, category2 } = useMemo(() => loadAssetImages(), []);
  const apparelImgs = [
    {
      label: "Corporate & office uniforms",
      img:
        mapImagesByKeyword(category1, [
          "corporate",
          "office",
          "uniform",
          "shirt",
          "blazer",
        ]) || category1[0]?.src,
    },
    {
      label: "Industrial & workwear uniforms",
      img:
        mapImagesByKeyword(category1, [
          "industrial",
          "workwear",
          "safety",
          "vest",
        ]) || category1[1]?.src,
    },
    {
      label: "Hospitality & service industry uniforms",
      img:
        mapImagesByKeyword(category1, ["hospitality", "chef", "service"]) ||
        category1[3]?.src,
    },
    {
      label: "Healthcare uniforms",
      img:
        mapImagesByKeyword(category1, ["healthcare", "scrub"]) ||
        category1[2]?.src,
    },
    {
      label: "Education sector uniforms",
      img:
        mapImagesByKeyword(category1, ["education", "school"]) ||
        category1[4]?.src,
    },
    {
      label: "Defence & security uniforms",
      img:
        mapImagesByKeyword(category1, ["security", "defence", "camo"]) ||
        category1[15]?.src,
    },
    {
      label: "Sports & fitness wear",
      img:
        mapImagesByKeyword(category1, ["sports", "jersey", "goalkeeper"]) ||
        category1[8]?.src,
    },
    {
      label: "Event & promotional uniforms",
      img:
        mapImagesByKeyword(category1, ["event", "promotional"]) ||
        category1[6]?.src,
    },
  ];
  const packagingImgs = [
    {
      label: "Custom packaging solutions",
      img:
        mapImagesByKeyword(category2, ["packaging", "box"]) ||
        category2[2]?.src,
    },
    {
      label: "Sustainable and eco-friendly packaging",
      img:
        mapImagesByKeyword(category2, ["eco", "packaging"]) ||
        category2[8]?.src,
    },
    {
      label: "Branded containers and apparel packaging",
      img:
        mapImagesByKeyword(category2, ["packaging", "branding"]) ||
        category2[8]?.src,
    },
  ];
  const giftingImgs = [
    {
      label: "Office & work essentials",
      img:
        mapImagesByKeyword(category2, ["office", "branding"]) ||
        category2[8]?.src,
    },
    {
      label: "Drinkware & kitchenware",
      img:
        mapImagesByKeyword(category2, ["drinkware", "bottle"]) ||
        category2[6]?.src,
    },
    {
      label: "Corporate stationery",
      img: mapImagesByKeyword(category2, ["stationery"]) || category2[0]?.src,
    },
    {
      label: "Everyday gadgets & tech",
      img:
        mapImagesByKeyword(category2, ["tech", "gadget"]) || category2[7]?.src,
    },
    {
      label: "Premium gift hamper sets",
      img:
        mapImagesByKeyword(category2, ["gift", "hamper"]) || category2[9]?.src,
    },
    {
      label: "Custom socks",
      img:
        mapImagesByKeyword(category2, ["socks", "sock"]) || category2[3]?.src,
    },
    {
      label: "Office & work bags",
      img:
        mapImagesByKeyword(category2, ["bag", "backpack"]) || category2[1]?.src,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
      {/* Netflix-like Hero */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: "#ffffff" }}
            >
              Our Services
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              Apparel Manufacturing, Packaging Solutions, and Corporate Gifting
              — tailored for your brand.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["Low MOQ", "Premium Quality", "Custom Solutions"].map((t) => (
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
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/products"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <span className="text-lg">▶</span>
                Explore
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three core sections like Netflix feature rows */}
      <section className="py-6" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Apparel Manufacturing */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              Apparel Manufacturing
            </h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {apparelImgs.map((item, idx) => (
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

          {/* Packaging Solutions */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              Packaging Solutions
            </h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {packagingImgs.map((item, idx) => (
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

          {/* Corporate Gifting */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              Corporate Gifting
            </h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {giftingImgs.map((item, idx) => (
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

          {/* CTA row */}
          <div className="text-center pt-4">
            <a
              href="https://wa.me/918080242558?text=Hi,%20I%20want%20to%20discuss%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 rounded-lg font-bold mr-3"
              style={{ backgroundColor: "#e50914", color: "#fff" }}
            >
              WhatsApp Inquiry
            </a>
            <a
              href="mailto:cdsiddhivinayak@gmail.com?subject=Service%20Inquiry"
              className="inline-block px-6 py-4 rounded-lg font-bold"
              style={{ border: "1px solid #2a2a2a", color: "#fff" }}
            >
              Email Us
            </a>
          </div>

          {/* Process section */}
          <div
            className="rounded-2xl p-8 border"
            style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#fff" }}>
              Our Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  n: 1,
                  t: "Consultation",
                  d: "Understand requirements and goals",
                },
                {
                  n: 2,
                  t: "Design",
                  d: "Custom designs tailored to your brand",
                },
                { n: 3, t: "Production", d: "Quality production and QC" },
                { n: 4, t: "Delivery", d: "On-time delivery with support" },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl p-6 border text-center"
                  style={{ backgroundColor: "#000", borderColor: "#2a2a2a" }}
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: "#e50914", color: "#fff" }}
                  >
                    {step.n}
                  </div>
                  <div className="font-bold mb-1" style={{ color: "#fff" }}>
                    {step.t}
                  </div>
                  <div style={{ color: "#ffffffb3" }}>{step.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
