"use client";
import { useState } from "react";
import { Search, Filter, MessageSquare } from "lucide-react";
import Link from "next/link";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Products() {

  const products = [
    {
      id: 1,
      name: "HEPA H13 Filter",
      category: "hepa",
      label: "HEPA Filter",
      description:
        "High-efficiency particulate air filter capturing 99.97% of particles.",
      image:
        "https://images.unsplash.com/photo-1632928274371-878938e4d825",
      features: ["99.97% efficiency", "0.3 micron capture", "Long life"],
    },
    {
      id: 2,
      name: "Activated Carbon Filter",
      category: "carbon",
      label: "Carbon Filter",
      description: "Removes odors, gases, and VOCs effectively.",
      image:
        "https://images.unsplash.com/photo-1436473849883-bb3464c23e93",
      features: ["Odor removal", "Gas filtration", "VOC absorption"],
    },
    {
      id: 3,
      name: "Pre-Filter Mesh",
      category: "pre",
      label: "Pre-Filter",
      description: "Washable filter capturing large dust particles.",
      image:
        "https://images.unsplash.com/photo-1732229033839-c76b4071c449",
      features: ["Reusable", "Dust capture", "Filter protection"],
    },
    {
      id: 4,
      name: "HEPA H14 Medical",
      category: "hepa",
      label: "Medical Grade",
      description: "99.995% efficiency for hospitals & clinics.",
      image:
        "https://images.unsplash.com/photo-1632928274371-878938e4d825",
      features: ["Medical grade", "Ultra filtration", "Hospital use"],
    },
    {
      id: 5,
      name: "Carbon Honeycomb Filter",
      category: "carbon",
      label: "Advanced Carbon",
      description: "Maximum purification with honeycomb design.",
      image:
        "https://images.unsplash.com/photo-1436473849883-bb3464c23e93",
      features: ["Honeycomb design", "Max contact", "High absorption"],
    },
    {
      id: 6,
      name: "Electrostatic Pre-Filter",
      category: "pre",
      label: "Electrostatic",
      description: "Self-charging dust capturing technology.",
      image:
        "https://images.unsplash.com/photo-1732229033839-c76b4071c449",
      features: ["Self charging", "Low maintenance", "High capture"],
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "hepa", name: "HEPA Filters" },
    { id: "carbon", name: "Carbon Filters" },
    { id: "pre", name: "Pre-Filters" },
  ];

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      category === "all" || item.category === category;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleInquiry = (name) => {
    const msg = `Hello AeroPure! I'm interested in ${name}. Please share details.`;

    window.open(
      `https://wa.me/918591401114?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen text-black bg-white pt-28 pb-20">
        <Navbar />
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-600">Products</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium air purifier filters for residential,
            commercial, and medical use.
          </p>

        </div>


        {/* ================= FILTER ================= */}
        <div className="max-w-6xl mx-auto mb-14">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <div className="relative flex-1">

              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search filters..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

            {/* Category */}
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border">

              <Filter size={18} className="text-gray-500" />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-transparent outline-none cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

            </div>

          </div>

        </div>


        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full font-medium text-green-700">
                  {item.label}
                </span>

              </div>


              {/* Content */}
              <div className="p-6 space-y-4">

                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 text-sm">

                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">

                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />

                      <span className="text-gray-600">{f}</span>

                    </li>
                  ))}

                </ul>


                {/* Button */}
                <button
                  onClick={() => handleInquiry(item.name)}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white py-2.5 rounded-full font-medium hover:opacity-90 transition"
                >
                  <MessageSquare size={16} />
                  Inquire Now
                </button>

              </div>

            </div>
          ))}

        </div>


        {/* ================= EMPTY ================= */}
        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <p className="text-gray-600 mb-4">
              No products match your search.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
              className="px-6 py-2 rounded-full border hover:bg-gray-100 transition"
            >
              Clear Filters
            </button>

          </div>
        )}


        {/* ================= CTA ================= */}
        <div className="mt-24 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 text-center max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom or Bulk Orders?
          </h2>

          <p className="text-gray-600 mb-6">
            Contact AeroPure for special requirements and wholesale pricing.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
        <Footer />
    </div>
  );
};
