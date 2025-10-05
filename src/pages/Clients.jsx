import React from "react";

const allClients = [
  { name: "MIT", initials: "MIT", sector: "Education & Research" },
  {
    name: "Forbes Marshall",
    initials: "FM",
    sector: "Manufacturing & Industrial",
  },
  { name: "Valmet", initials: "VA", sector: "Manufacturing & Industrial" },
  { name: "Ladoba", initials: "LD", sector: "Hospitality & Lifestyle" },
  { name: "Phadke Cars", initials: "PC", sector: "Automotive" },
  { name: "Premium Cars", initials: "PR", sector: "Automotive" },
  { name: "Paashh", initials: "PS", sector: "Hospitality & Lifestyle" },
];

const SectionRow = ({ title, items }) => (
  <div className="mb-10">
    <h3
      className="text-2xl md:text-3xl font-bold mb-4"
      style={{ color: "#fff" }}
    >
      {title}
    </h3>
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
      {items.map((item, idx) => (
        <a
          key={idx}
          href="/contact"
          className="min-w-[170px] rounded-md overflow-hidden relative group"
          style={{ backgroundColor: "#141414" }}
        >
          <div
            className="w-[170px] h-[240px] flex items-center justify-center"
            style={{ backgroundColor: "#2a2a2a" }}
          >
            <span className="text-4xl font-bold" style={{ color: "#fff" }}>
              {item.initials}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
          <div
            className="absolute inset-x-0 bottom-0 p-2 text-xs"
            style={{
              color: "#fff",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.7) 100%)",
            }}
          >
            {item.name}
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
);

const Clients = () => {
  const sectors = [
    { title: "Featured", filter: () => true },
    {
      title: "Education & Research",
      filter: (c) => c.sector === "Education & Research",
    },
    {
      title: "Manufacturing & Industrial",
      filter: (c) => c.sector === "Manufacturing & Industrial",
    },
    {
      title: "Hospitality & Lifestyle",
      filter: (c) => c.sector === "Hospitality & Lifestyle",
    },
    { title: "Automotive", filter: (c) => c.sector === "Automotive" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
      {/* Hero in Netflix style */}
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
              Our Clients
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              A trusted network across education, manufacturing, hospitality,
              and automotive.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {[
                "MIT • Forbes Marshall",
                "Valmet • Ladoba",
                "Phadke Cars • Paashh",
              ].map((t) => (
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
                href="/contact"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <span className="text-lg">▶</span>
                Work With Us
              </a>
              <a
                href="/services"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services-like sections */}
      <section className="py-6" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sectors.map(({ title, filter }, idx) => (
            <SectionRow
              key={idx}
              title={title}
              items={allClients.filter(filter)}
            />
          ))}

          {/* CTA row similar to Services */}
          <div className="text-center pt-6">
            <a
              href="https://wa.me/918080242558?text=Hi,%20we’d%20like%20to%20work%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 rounded-lg font-bold mr-3"
              style={{ backgroundColor: "#e50914", color: "#fff" }}
            >
              Work With Us
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-4 rounded-lg font-bold"
              style={{ border: "1px solid #2a2a2a", color: "#fff" }}
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
