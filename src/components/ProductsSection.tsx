"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/data/content";
import { ProductItem } from "@/types";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Info,
  X,
  FileSpreadsheet,
} from "lucide-react";

interface ProductsSectionProps {
  onSelectProduct?: (productName: string) => void;
}

export default function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Packaging", labelHi: "सभी उत्पाद" },
    { id: "corrugated", label: "Corrugated Cartons", labelHi: "कोरुगेटेड कार्टन्स" },
    { id: "duplex", label: "Duplex & Foiled Boxes", labelHi: "डुप्लेक्स व फॉयल बॉक्सेस" },
    { id: "packaging", label: "Food & Retail Packaging", labelHi: "खाद्य व रिटेल पैकेजिंग" },
    { id: "commercial", label: "Covers & Stationery", labelHi: "कवर्स व स्टेशनरी" },
  ];

  const filteredProducts =
    selectedFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedFilter);

  const handleEnquire = (productTitle: string) => {
    if (onSelectProduct) {
      onSelectProduct(productTitle);
    }
    // Also dispatch custom event for instant form synchronization
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("sp_select_product", { detail: { product: productTitle } })
      );
    }
    // Smooth scroll to quote form
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-charcoal-400 text-paper relative overflow-hidden">
      {/* Background Kraft Grid */}
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-300 border border-kraft-600/50 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("Complete Packaging Catalog", "संपूर्ण पैकेजिंग कैटलॉग")}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Engineered Boxes & Printed Solutions", "कस्टम बॉक्सेस व प्रिंटिंग समाधान")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-200/90 leading-relaxed font-light">
            {t(
              "Manufactured in-house using premium duplex boards, virgin kraft liners, and food-safe barrier materials. Built to withstand rigors of transit and captivate buyers on retail shelves.",
              "प्रीमियम डुप्लेक्स बोर्ड, वर्जिन क्राफ्ट लाइनर और फूड-सेफ कोटिंग के साथ इन-हाउस निर्मित। पारगमन की सुरक्षा और रिटेल शेल्फ पर विशिष्ट चमक के लिए विशेष रूप से तैयार।"
            )}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === tab.id
                    ? "bg-amberAccent text-charcoal-500 shadow-lg scale-105"
                    : "bg-charcoal-300/80 text-kraft-200 border border-kraft-700 hover:border-kraft-500 hover:text-white"
                }`}
              >
                {t(tab.label, tab.labelHi)}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-charcoal-300/90 border border-kraft-700/60 hover:border-amberAccent/80 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-amberAccent text-charcoal-500 rounded shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Tape Strip Aesthetic Corner */}
              <div className="absolute -top-3 -left-3 w-16 h-5 bg-kraft-500/30 -rotate-12 pointer-events-none z-20 border-y border-kraft-400/20" />

              <div>
                {/* Product Image */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-charcoal-500">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-300 via-transparent to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-paper group-hover:text-amberAccent transition-colors mb-2">
                    {t(product.title, product.titleHi)}
                  </h3>

                  <p className="text-xs text-amberAccent/90 font-medium mb-3">
                    {t(product.tagline, product.taglineHi)}
                  </p>

                  <p className="text-xs sm:text-sm text-kraft-200/80 leading-relaxed mb-4 line-clamp-3">
                    {t(product.description, product.descriptionHi)}
                  </p>

                  {/* Quick Specs Snippet */}
                  <div className="space-y-1.5 p-3 rounded-lg bg-charcoal-400/80 border border-kraft-800/80 text-[11px] font-mono text-kraft-300 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-kraft-400">Construction:</span>
                      <span className="text-paper font-semibold">
                        {product.specs[0]?.value}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-kraft-400">Finish/Board:</span>
                      <span className="text-paper font-semibold">
                        {product.specs[1]?.value}
                      </span>
                    </div>
                  </div>

                  {/* Applications Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.applications.slice(0, 3).map((app, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-charcoal-400 text-kraft-300 border border-kraft-800"
                      >
                        ✓ {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Enquire Now & View Specs */}
              <div className="p-5 sm:p-6 pt-0 border-t border-kraft-800/80 grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-charcoal-400 hover:bg-charcoal-200 border border-kraft-700/80 text-xs font-semibold text-kraft-200 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{t("Specifications", "विस्तृत विवरण")}</span>
                </button>

                <button
                  onClick={() => handleEnquire(product.title)}
                  className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-amberAccent hover:bg-amberAccent-light text-charcoal-500 font-display font-bold text-xs uppercase tracking-wider shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>{t("Enquire Now", "पूछताछ करें")}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications & Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-charcoal-300 border-2 border-kraft-500 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-400 hover:bg-charcoal-200 text-kraft-200 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amberAccent mb-2">
              <Sparkles className="w-4 h-4" />
              <span>DETAILED SPECIFICATIONS SHEET</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-paper mb-2">
              {t(activeModalProduct.title, activeModalProduct.titleHi)}
            </h3>

            <p className="text-xs text-kraft-300 mb-6 font-mono">
              Manufacturing Unit: Suchi Printers, Fazalganj, Kanpur
            </p>

            {/* Specs Table */}
            <div className="rounded-xl border border-kraft-700 bg-charcoal-400/90 overflow-hidden mb-6">
              <table className="w-full text-xs sm:text-sm text-left">
                <tbody>
                  {activeModalProduct.specs.map((spec, i) => (
                    <tr
                      key={i}
                      className="border-b border-kraft-800 last:border-b-0"
                    >
                      <td className="p-3 text-kraft-400 font-mono w-1/3 bg-charcoal-500/50">
                        {spec.label}
                      </td>
                      <td className="p-3 text-paper font-semibold">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Applications & Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amberAccent font-bold mb-2">
                  Key Capabilities
                </h4>
                <ul className="space-y-1.5 text-xs text-kraft-200">
                  {activeModalProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amberAccent font-bold mb-2">
                  Recommended For
                </h4>
                <ul className="space-y-1.5 text-xs text-kraft-200">
                  {activeModalProduct.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amberAccent font-bold">»</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-kraft-800">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-4 py-2.5 rounded-lg bg-charcoal-400 text-kraft-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalProduct.title;
                  setActiveModalProduct(null);
                  handleEnquire(title);
                }}
                className="px-6 py-2.5 rounded-lg bg-amberAccent hover:bg-amberAccent-light text-charcoal-500 font-display font-bold text-xs uppercase tracking-wider shadow"
              >
                Pre-Select In Quote Form →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

