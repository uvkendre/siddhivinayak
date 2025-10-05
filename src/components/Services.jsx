import React from "react";
import {
  Phone,
  Envelope,
  ArrowRight,
  Briefcase,
  Shield,
  Stethoscope,
  GraduationCap,
  Lock,
  Basketball,
  Gift,
  Coffee,
  FileText,
  DeviceMobile,
  GiftBox,
  Candle,
  Heart,
  Sock,
  Package,
  Backpack,
} from "@phosphor-icons/react";

const Services = () => {
  const serviceCategories = [
    {
      title: "CORPORATE AND OFFICE UNIFORMS",
      icon: Briefcase,
      description: "Professional attire for corporate environments",
    },
    {
      title: "INDUSTRIAL AND WORKWARE UNIFORMS",
      icon: Shield,
      description: "Durable workwear for industrial settings",
    },
    {
      title: "HOSPITALITY & SERVICE INDUSTRY UNIFORMS",
      icon: Coffee,
      description: "Elegant uniforms for hospitality sector",
    },
    {
      title: "HEALTHCARE UNIFORMS",
      icon: Stethoscope,
      description: "Medical-grade uniforms and scrubs",
    },
    {
      title: "EDUCATION SECTOR UNIFORMS",
      icon: GraduationCap,
      description: "School and college uniform solutions",
    },
    {
      title: "DEFENCE AND SECURITY UNIFORMS",
      icon: Lock,
      description: "Specialized uniforms for security personnel",
    },
    {
      title: "SPORTS AND FITNESS UNIFORMS",
      icon: Basketball,
      description: "Athletic wear and team uniforms",
    },
    {
      title: "EVENTS & PROMOTIONAL UNIFORMS",
      icon: Gift,
      description: "Custom uniforms for events and promotions",
    },
    {
      title: "OFFICE & WORK ESSENTIALS",
      icon: Briefcase,
      description: "Professional accessories and essentials",
    },
    {
      title: "DRINKWARE & KITCHENWEAR",
      icon: Coffee,
      description: "Custom branded drinkware and kitchen items",
    },
    {
      title: "CORPORATE STATIONERY",
      icon: FileText,
      description: "Business cards, letterheads, and office supplies",
    },
    {
      title: "EVERYDAY GADGETS AND TECH",
      icon: DeviceMobile,
      description: "Custom tech accessories and gadgets",
    },
    {
      title: "PREMIUM GIFT HAMPER SETS",
      icon: GiftBox,
      description: "Luxury corporate gift hampers",
    },
    {
      title: "SCENTED CANDLES AND DIFFUSERS",
      icon: Candle,
      description: "Aromatherapy and wellness products",
    },
    {
      title: "SKINCARE AND SELF CARE KITS",
      icon: Heart,
      description: "Premium personal care products",
    },
    {
      title: "CUSTOM SOCKS",
      icon: Sock,
      description: "Personalized sock designs and branding",
    },
    {
      title: "CUSTOM PACKAGING SOLUTIONS",
      icon: Package,
      description: "Branded packaging and presentation",
    },
    {
      title: "OFFICE AND WORK BAGS",
      icon: Backpack,
      description: "Professional bags and luggage",
    },
  ];

  return (
    <section id="services" className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            WE CATER TO ALL YOUR
            <span className="block text-amber-700">
              BRANDING AND APPAREL NEEDS
            </span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            From corporate uniforms to promotional items, we provide
            comprehensive branding solutions tailored to your specific
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                onClick={() =>
                  window.open(
                    `https://wa.me/918080242558?text=Hi, I'm interested in ${service.title}`,
                    "_blank",
                  )
                }
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <IconComponent
                      size={32}
                      className="text-amber-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-amber-700 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center text-amber-600 text-sm font-semibold group-hover:text-amber-700">
                    Click to inquire
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            GET IN TOUCH AND PLACE YOUR FIRST ORDER!
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Ready to transform your branding? Contact us today for a
            personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918080242558?text=Hi, I'm ready to place my first order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              WhatsApp Order
            </a>
            <a
              href="mailto:cdsiddhivinayak@gmail.com?subject=Product Inquiry"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Envelope size={20} />
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
