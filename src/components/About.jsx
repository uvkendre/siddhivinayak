import React from "react";
import {
  CheckCircle,
  Phone,
  Envelope,
  Target,
  Users,
  Award,
  Clock,
  Shield,
} from "@phosphor-icons/react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Siddhivinayak Enterprises
          </h2>
          <div className="w-24 h-1 bg-amber-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed">
                Siddhivinayak Enterprises started with a vision to cater to your
                end to end branding and apparel needs. We provide highly
                customised, low MOQ, and timely delivery for all your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target size={32} className="text-white" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Customized
                </h4>
                <p className="text-sm text-amber-700">Tailored to your needs</p>
              </div>

              <div className="text-center bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">Low MOQ</h4>
                <p className="text-sm text-amber-700">
                  Flexible order quantities
                </p>
              </div>

              <div className="text-center bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock size={32} className="text-white" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">Timely</h4>
                <p className="text-sm text-amber-700">On-time delivery</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-amber-800">
                    End-to-end branding solutions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-amber-800">Premium quality materials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-amber-800">Competitive pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-amber-800">Expert design team</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-amber-800">24/7 customer support</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/918080242558?text=Hi, I'd like to know more about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors gap-2"
              >
                <Phone size={20} />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
