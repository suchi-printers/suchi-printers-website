"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INDUSTRIES } from "@/data/content";
import {
  UtensilsCrossed,
  Flame,
  Shirt,
  BookOpen,
  PackageCheck,
  Boxes,
  ArrowRight,
} from "lucide-react";

export default function IndustriesSection() {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    UtensilsCrossed,
    Flame,
    Shirt,
    BookOpen,
    PackageCheck,
    Boxes,
  };

  const scrollToQuote = (industryName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("sp_select_product", { detail: { product: industryName } })
      );
    }
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-20 bg-charcoal-500 text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-300 border border-kraft-700 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <span>TARGET PACKAGING MARKETS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Industries We Proudly Serve", "जिन उद्योगों को हम सेवाएं प्रदान करते हैं")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-300 leading-relaxed font-light">
            {t(
              "Supplying custom cartons and corrugated shippers to regional manufacturers, shopkeepers, wholesalers, and national enterprises across India.",
              "क्षेत्रीय निर्माताओं, थोक व्यापारियों, दुकानदारों और राष्ट्रीय ब्रांड्स को समर्पित कस्टम पैकेजिंग समाधान।"
            )}
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Boxes;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-charcoal-400/90 border border-kraft-800 hover:border-amberAccent/70 p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-charcoal-300 border border-kraft-700 flex items-center justify-center text-amberAccent mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-paper group-hover:text-amberAccent transition-colors mb-2">
                    {t(ind.name, ind.nameHi)}
                  </h3>

                  <p className="text-xs sm:text-sm text-kraft-300/80 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-kraft-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-kraft-500 uppercase">
                    Bulk Production Ready
                  </span>
                  <button
                    onClick={() => scrollToQuote(ind.name)}
                    className="flex items-center gap-1 text-xs font-semibold text-amberAccent hover:text-amberAccent-light transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

