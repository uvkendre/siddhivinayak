import React from "react";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Package,
  Clock,
  Star,
  Shield,
} from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-amber-50 to-amber-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 leading-tight">
                SIDDHIVINAYAK
                <span className="block text-3xl md:text-4xl lg:text-5xl text-amber-700 mt-2">
                  ENTERPRISES
                </span>
              </h1>

              <div className="w-24 h-1 bg-amber-600 rounded-full"></div>

              <p className="text-lg md:text-xl text-amber-800 leading-relaxed max-w-2xl">
                Siddhivinayak Enterprises started with a vision to cater to your
                end to end branding and apparel needs. We provide highly
                customised, low MOQ, and timely delivery for all your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Explore Our Services
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/918080242558?text=Hi, I'm interested in your products and services"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Get Quote on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-amber-200 rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">SE</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900">
                  WE CATER TO ALL YOUR
                  <span className="block text-amber-700">
                    BRANDING AND APPAREL NEEDS
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-amber-800">
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={16} className="text-amber-600" />
                      <div className="font-semibold">Custom Design</div>
                    </div>
                    <div className="text-xs">Tailored Solutions</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Package size={16} className="text-amber-600" />
                      <div className="font-semibold">Low MOQ</div>
                    </div>
                    <div className="text-xs">Flexible Orders</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={16} className="text-amber-600" />
                      <div className="font-semibold">Timely Delivery</div>
                    </div>
                    <div className="text-xs">On Time Always</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={16} className="text-amber-600" />
                      <div className="font-semibold">Quality Assured</div>
                    </div>
                    <div className="text-xs">Premium Materials</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-300 rounded-full opacity-50 float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400 rounded-full opacity-50 float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-amber-200 rounded-full opacity-60 float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
