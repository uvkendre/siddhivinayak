import React from "react";

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
      {/* Netflix-like hero */}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: "#ffffff" }}
            >
              About Us
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              Premium Apparel, Packaging & Corporate Gifting — tailored for your
              brand.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["Founded 2022 • MIT Alumni", "Low MOQ", "Premium Quality"].map(
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
            <div className="flex items-center gap-3">
              <a
                href="/services"
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
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: "#000" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div
            className="rounded-2xl p-8 border mb-10"
            style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#fff" }}>
              Our Story
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#ffffffb3" }}
            >
              Siddhivinayak Enterprises was born out of a passion for design and
              service. Founded by
              <span className="font-semibold" style={{ color: "#fff" }}>
                {" "}
                Devika Rahul Phadke
              </span>{" "}
              in 2022 while studying industrial design at MIT, we stand for
              quality, flexibility, and customer satisfaction. With experience
              serving clients such as MIT, Forbes Marshall, Valmet, Ladoba,
              Phadke Cars, Premium Cars, and Paashh, we create tailored
              solutions that meet unique demands across apparel, packaging, and
              corporate gifting.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div
              className="rounded-2xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#fff" }}>
                Our Mission
              </h3>
              <p style={{ color: "#ffffffb3" }}>
                To empower businesses with superior products that reflect their
                brand values while offering unmatched customization and service.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#fff" }}>
                Our Vision
              </h3>
              <p style={{ color: "#ffffffb3" }}>
                To be a trusted partner in apparel, packaging, and gifting,
                delivering creative solutions that inspire confidence and
                enhance brand presence.
              </p>
            </div>
          </div>

          {/* Why Choose Us bullets mapping to your copy */}
          <div
            className="rounded-2xl p-8 border mb-10"
            style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#fff" }}>
              Why Choose Us?
            </h3>
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              style={{ color: "#ffffffb3" }}
            >
              <li>Low Minimum Order Quantities (MOQ)</li>
              <li>Flexible, scalable production to meet your needs</li>
              <li>Premium materials and craftsmanship</li>
              <li>Dedicated customer support at every step</li>
              <li>End-to-end apparel, packaging, and gifting solutions</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-block px-6 py-4 rounded-lg font-bold mr-3"
              style={{ backgroundColor: "#e50914", color: "#fff" }}
            >
              Explore Our Services
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-4 rounded-lg font-bold"
              style={{ border: "1px solid #2a2a2a", color: "#fff" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Netflix-style carousel */}
      <section className="py-10" style={{ backgroundColor: "#141414" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            Our Values
          </h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {[
              {
                label: "Quality Assured",
                img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
              },
              {
                label: "Timely Delivery",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
              },
              {
                label: "Custom Solutions",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
              },
              {
                label: "Expert Support",
                img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href="/services"
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
    </div>
  );
};

export default About;
