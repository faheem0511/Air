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

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 text-gray-900 pt-28 pb-20">
            <Navbar />
            <div className="container mx-auto px-4">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-16">

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact <span className="text-green-600">AeroPure</span>
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions? Need bulk pricing? Our team is ready to help.
                    </p>

                </div>
                {/* Main Contact Section */}
                <div className="flex flex-col lg:flex-row gap-0 items-center justify-center">

                    {/* Contact Details Card - Left Side with overlap */}
                    <div
                        className="w-full lg:w-[320px] bg-white rounded-3xl p-6 shadow-xl relative z-20 lg:-mr-12"
                        style={{
                            boxShadow: '0 20px 50px rgba(125, 219, 180, 0.4)',
                            border: '4px solid #7DD3DB'
                        }}
                    >
                        <h2 className="text-xl font-bold text-teal-600 mb-5 border-b-3 border-teal-600 pb-2 inline-block">
                            Contact details
                        </h2>

                        <div className="bg-white rounded-xl p-5 mt-4 space-y-5 shadow-sm">
                            {/* Address */}
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm mb-1">Address</h3>
                                    <p className="text-gray-700 text-xs leading-relaxed">
                                        {companyInfo.address}
                                    </p>
                                </div>
                            </div>

                            {/* Call Us */}
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm mb-1">Call Us</h3>
                                    <p className="text-gray-700 text-xs">{companyInfo.phone}</p>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm mb-1">Email Us</h3>
                                    <p className="text-gray-700 text-xs">{companyInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div
                        className="flex-1 max-w-lg bg-white rounded-3xl p-8 shadow-xl relative z-10 lg:pl-16"
                        style={{
                            boxShadow: '0 20px 50px rgba(134, 239, 172, 0.4)',
                            border: '4px solid #86EFAC'
                        }}
                    >
                        <h2 className="text-2xl font-bold text-black mb-6">
                            Send Message
                        </h2>

                        <div className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-black font-semibold mb-1.5 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-black font-semibold mb-1.5 text-sm">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Your Phone Number"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                                />
                            </div>

                            {/* E-Mail ID */}
                            <div>
                                <label className="block text-black font-semibold mb-1.5 text-sm">
                                    E-Mail Id
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your E-Mail Id"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-black font-semibold mb-1.5 text-sm">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 resize-none text-gray-700 text-sm"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-2">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-teal-500 text-white px-10 py-2 rounded-md font-semibold text-sm hover:bg-teal-600 transition duration-300 shadow-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= MAP ================= */}
                <div className="mt-20 bg-white rounded-3xl mb-15 shadow-xl overflow-hidden">

                    <h3 className="text-2xl font-semibold p-6">
                        Find Us in Mumbai
                    </h3>

                    <div className="h-96">

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
};

