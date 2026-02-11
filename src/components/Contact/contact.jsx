"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Contact() {
  const companyInfo = {
    name: "AeroPure",
    phone: "+91 8591401114",
    email: "aeropure.buisness@gmail.com",
    address: "Mumbai, Maharashtra, India",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    const phone = formData.phone.replace(/\D/g, "");

    if (phone.length < 10) {
      toast.error("Invalid phone number");
      return;
    }

    console.log("Contact Form:", formData);

    toast.success("Message sent successfully!");

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 text-gray-900 pt-24 sm:pt-28 pb-20">
      <Navbar />

      <div className="container mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-green-600">AeroPure</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Have questions? Need bulk pricing? Our team is ready to help.
          </p>
        </div>

        {/* ================= MAIN ================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-center">
          {/* CONTACT INFO */}
          <div
            className="
              w-full
              lg:w-[320px]
              bg-white
              rounded-3xl
              p-5 sm:p-6
              shadow-xl
              relative
              z-20
              lg:-mr-12
            "
            style={{
              boxShadow: "0 20px 50px rgba(125, 219, 180, 0.4)",
              border: "4px solid #7DD3DB",
            }}
          >
            <h2 className="text-lg sm:text-xl font-bold text-teal-600 mb-5 pb-2 inline-block">
              Contact details
            </h2>

            <div className="bg-white rounded-xl p-4 sm:p-5 mt-4 space-y-5 shadow-sm">
              {/* Address */}
              <InfoItem
                title="Address"
                value={companyInfo.address}
                icon={
                  <MapPin className="w-4 h-4 text-white" />
                }
              />

              {/* Call */}
              <InfoItem
                title="Call Us"
                value={companyInfo.phone}
                icon={<Phone className="w-4 h-4 text-white" />}
              />

              {/* Email */}
              <InfoItem
                title="Email Us"
                value={companyInfo.email}
                icon={<Mail className="w-4 h-4 text-white" />}
              />
            </div>
          </div>

          {/* FORM */}
          <div
            className="
              w-full
              flex-1
              max-w-lg
              bg-white
              rounded-3xl
              p-6 sm:p-8
              shadow-xl
              relative
              z-10
              lg:pl-16
            "
            style={{
              boxShadow: "0 20px 50px rgba(134, 239, 172, 0.4)",
              border: "4px solid #86EFAC",
            }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
              Send Message
            </h2>

            <div className="space-y-4">
              {/* Inputs */}
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "phone", label: "Phone Number", type: "tel" },
                { name: "email", label: "E-Mail Id", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-semibold mb-1.5 text-sm">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-sm"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block font-semibold mb-1.5 text-sm">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 resize-none text-sm"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-teal-500 text-white px-10 py-2 rounded-md font-semibold text-sm hover:bg-teal-600 transition shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-16 sm:mt-20 bg-white rounded-3xl mb-16 shadow-xl overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-semibold p-6">
            Find Us in Mumbai
          </h3>

          <div className="h-72 sm:h-96">
            <iframe
              title="AeroPure Location"
              src="https://www.google.com/maps?q=Mumbai,India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ================= INFO ITEM ================= */

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-black text-sm mb-1">{title}</h3>
        <p className="text-gray-700 text-xs leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
