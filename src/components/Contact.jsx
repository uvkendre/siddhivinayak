import React from "react";
import {
  Phone,
  Envelope,
  User,
  Building,
  MapPin,
  Clock,
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-600 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Ready to start your branding journey? Contact us today for
            personalized solutions and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-lg">
                      Company
                    </h4>
                    <p className="text-amber-800">SIDDHIVINAYAK ENTERPRISES</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-lg">
                      Contact Person
                    </h4>
                    <p className="text-amber-800">DEVIKA PHADKE</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Envelope size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-lg">
                      Email
                    </h4>
                    <a
                      href="mailto:cdsiddhivinayak@gmail.com"
                      className="text-amber-800 hover:text-amber-600 transition-colors"
                    >
                      cdsiddhivinayak@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-lg">
                      Phone
                    </h4>
                    <a
                      href="tel:+918080242558"
                      className="text-amber-800 hover:text-amber-600 transition-colors"
                    >
                      +91 8080242558
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/918080242558?text=Hi, I'm interested in your products and services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl text-center transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone size={32} className="mx-auto mb-2" />
                <div className="font-semibold">WhatsApp Inquiry</div>
                <div className="text-sm opacity-90">
                  Quick response guaranteed
                </div>
              </a>

              <a
                href="mailto:cdsiddhivinayak@gmail.com?subject=Product Inquiry"
                className="bg-amber-600 hover:bg-amber-700 text-white p-6 rounded-xl text-center transition-colors shadow-lg hover:shadow-xl"
              >
                <Envelope size={32} className="mx-auto mb-2" />
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-90">
                  Detailed inquiries welcome
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-amber-900 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-amber-900 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-amber-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-amber-900 mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="corporate-uniforms">
                    Corporate & Office Uniforms
                  </option>
                  <option value="industrial-workwear">
                    Industrial & Workwear
                  </option>
                  <option value="hospitality">
                    Hospitality & Service Industry
                  </option>
                  <option value="healthcare">Healthcare Uniforms</option>
                  <option value="education">Education Sector</option>
                  <option value="defence">Defence & Security</option>
                  <option value="sports">Sports & Fitness</option>
                  <option value="events">Events & Promotional</option>
                  <option value="stationery">Corporate Stationery</option>
                  <option value="gift-hampers">Gift Hampers</option>
                  <option value="packaging">Custom Packaging</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const message = `Name: ${formData.get("firstName")} ${formData.get("lastName")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Service: ${formData.get("service")}
Message: ${formData.get("message")}`;
                  window.open(
                    `https://wa.me/918080242558?text=${encodeURIComponent(message)}`,
                    "_blank",
                  );
                }}
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
