import React, { useMemo } from "react";
import { loadAssetImages } from "../utils/images";

const Profiles = () => {
  const { category1, category2 } = useMemo(() => loadAssetImages(), []);
  const localProfiles = [
    {
      name: "Home",
      path: "/home",
      img: category1[0]?.src || category2[0]?.src,
    },
    {
      name: "About Us",
      path: "/about",
      img: category1[3]?.src || category2[2]?.src,
    },
    {
      name: "Services",
      path: "/services",
      img: category1[6]?.src || category2[4]?.src,
    },
    {
      name: "Products",
      path: "/products",
      img: category2[1]?.src || category1[5]?.src,
    },
    {
      name: "Clients",
      path: "/clients",
      img: category2[8]?.src || category1[4]?.src,
    },
    {
      name: "Contact",
      path: "/contact",
      img: category2[6]?.src || category1[2]?.src,
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% -10%, rgba(229,9,20,0.35) 0%, rgba(0,0,0,0) 60%)",
        }}
      ></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10 text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold"
          style={{ color: "#fff" }}
        >
          Who’s watching?
        </h1>
        <p className="mt-2 text-lg" style={{ color: "#ffffff80" }}>
          Pick a page profile to continue
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {localProfiles.map((p) => (
            <a
              key={p.path}
              href={p.path}
              className="group rounded-md p-3 text-center transition-transform hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto rounded-md overflow-hidden ring-2 ring-transparent group-hover:ring-white/50">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="mt-3 text-sm font-semibold opacity-90 group-hover:opacity-100"
                style={{ color: "#ffffffcc" }}
              >
                {p.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
