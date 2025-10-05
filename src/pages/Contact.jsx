import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000" }}>
      {/* Hero Section */}
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
              Let's Work Together
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: "#ffffffbf" }}
            >
              We provide solutions that fit your unique needs. Reach out and
              let's create something extraordinary.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["India-based • Global Reach", "Low MOQ", "Premium Quality"].map(
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
                href="https://wa.me/918080242558"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <span className="text-lg">▶</span>
                WhatsApp
              </a>
              <a
                href="mailto:cdsiddhivinayak@gmail.com"
                className="px-6 py-3 rounded-md font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: "#e50914", color: "#fff" }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div
                className="rounded-3xl p-8 border"
                style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
              >
                <h3
                  className="text-3xl font-bold mb-8"
                  style={{ color: "#fff" }}
                >
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        🏢
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Company
                      </h4>
                      <p className="text-lg" style={{ color: "#ffffffb3" }}>
                        SIDDHIVINAYAK ENTERPRISES
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        👤
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Contact Person
                      </h4>
                      <p className="text-lg" style={{ color: "#ffffffb3" }}>
                        DEVIKA PHADKE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        📧
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Email
                      </h4>
                      <a
                        href="mailto:cdsiddhivinayak@gmail.com"
                        className="transition-colors text-lg block"
                        style={{ color: "#ffffffb3" }}
                      >
                        cdsiddhivinayak@gmail.com
                      </a>
                      <a
                        href="mailto:devikaphadke5@gmail.com"
                        className="transition-colors text-lg block"
                        style={{ color: "#ffffffb3" }}
                      >
                        devikaphadke5@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        📱
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Phone
                      </h4>
                      <a
                        href="tel:+918080242558"
                        className="transition-colors text-lg"
                        style={{ color: "#ffffffb3" }}
                      >
                        +91 8080242558
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        ⏰
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Business Hours
                      </h4>
                      <p className="text-lg" style={{ color: "#ffffffb3" }}>
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-sm" style={{ color: "#999" }}>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      <div className="text-2xl" style={{ color: "#fff" }}>
                        📍
                      </div>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-xl mb-2"
                        style={{ color: "#fff" }}
                      >
                        Location
                      </h4>
                      <p className="text-lg" style={{ color: "#ffffffb3" }}>
                        Based in India • Serving clients across sectors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/918080242558?text=Hi, I'm interested in your products and services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  <div className="text-4xl mx-auto mb-4">📱</div>
                  <div className="text-xl font-bold mb-2">WhatsApp Inquiry</div>
                  <div className="text-sm" style={{ color: "#ffffffb3" }}>
                    Quick response guaranteed
                  </div>
                </a>

                <a
                  href="mailto:cdsiddhivinayak@gmail.com?subject=Product Inquiry"
                  className="text-white p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  <div className="text-4xl mx-auto mb-4">📧</div>
                  <div className="text-xl font-bold mb-2">Email Us</div>
                  <div className="text-sm" style={{ color: "#ffffffb3" }}>
                    Detailed inquiries welcome
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="rounded-3xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <h3 className="text-3xl font-bold mb-8" style={{ color: "#fff" }}>
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold mb-3"
                      style={{ color: "#fff" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg"
                      style={{
                        backgroundColor: "#000",
                        border: "1px solid #2a2a2a",
                        color: "#fff",
                      }}
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold mb-3"
                      style={{ color: "#fff" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg"
                      style={{
                        backgroundColor: "#000",
                        border: "1px solid #2a2a2a",
                        color: "#fff",
                      }}
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-3"
                    style={{ color: "#fff" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg"
                    style={{
                      backgroundColor: "#000",
                      border: "1px solid #2a2a2a",
                      color: "#fff",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold mb-3"
                    style={{ color: "#fff" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg"
                    style={{
                      backgroundColor: "#000",
                      border: "1px solid #2a2a2a",
                      color: "#fff",
                    }}
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold mb-3"
                    style={{ color: "#fff" }}
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg"
                    style={{
                      backgroundColor: "#000",
                      border: "1px solid #2a2a2a",
                      color: "#fff",
                    }}
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
                    className="block text-sm font-bold mb-3"
                    style={{ color: "#fff" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-4 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-lg resize-none"
                    style={{
                      backgroundColor: "#000",
                      border: "1px solid #2a2a2a",
                      color: "#fff",
                    }}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-5 px-8 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ backgroundColor: "#e50914", color: "#fff" }}
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
                  <span className="text-lg">✈️</span>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#fff" }}>
              Why Choose Us?
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#ffffffb3" }}
            >
              We are committed to providing exceptional service and quality
              products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center rounded-2xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#2a2a2a" }}
              >
                <div className="text-2xl" style={{ color: "#fff" }}>
                  ✅
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
                Quality Assured
              </h3>
              <p style={{ color: "#ffffffb3" }}>
                We use only the finest materials and maintain the highest
                quality standards in all our products.
              </p>
            </div>

            <div
              className="text-center rounded-2xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#2a2a2a" }}
              >
                <div className="text-2xl" style={{ color: "#fff" }}>
                  ⏰
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
                Timely Delivery
              </h3>
              <p style={{ color: "#ffffffb3" }}>
                We understand the importance of deadlines and ensure timely
                delivery of all orders.
              </p>
            </div>

            <div
              className="text-center rounded-2xl p-8 border"
              style={{ backgroundColor: "#141414", borderColor: "#2a2a2a" }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#2a2a2a" }}
              >
                <div className="text-2xl" style={{ color: "#fff" }}>
                  📱
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
                24/7 Support
              </h3>
              <p style={{ color: "#ffffffb3" }}>
                Our customer support team is always available to help with your
                queries and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
