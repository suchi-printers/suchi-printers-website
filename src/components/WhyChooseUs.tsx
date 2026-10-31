"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WHY_CHOOSE_US } from "@/data/content";
import {
  ShieldCheck,
  Zap,
  Building,
  CheckCircle,
  Truck,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-charcoal-400 text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-300 border border-kraft-700 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SUCHI ADVANTAGE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Why Serious Brands Choose Us", "ब्रांड्स हमें क्यों चुनते हैं")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-300 leading-relaxed font-light">
            {t(
              "Combining 35+ years of industrial legacy with computerized corrugation and laser die-cutting under one roof.",
              "35+ वर्षों का समृद्ध अनुभव, कंप्यूटराइज्ड कोरुगेशन और लेजर डाई-कटिंग—सब एक ही छत के नीचे।"
            )}
          </p>
        </div>

        {/* 6 Grid Cards with Shipping Stamp Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-charcoal-300/80 border-2 border-kraft-700/60 hover:border-amberAccent/70 p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Shipping Tape Corner */}
              <div className="absolute -top-3 -right-3 w-16 h-5 bg-kraft-500/20 rotate-12 pointer-events-none border-y border-kraft-400/20" />

              <div>
                {/* Stamp Badge */}
                <div className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-kraft-800 text-amberAccent border border-kraft-600 rounded mb-4">
                  {item.stamp}
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-paper group-hover:text-amberAccent transition-colors mb-3">
                  {t(item.title, item.titleHi)}
                </h3>

                <p className="text-xs sm:text-sm text-kraft-200/85 leading-relaxed">
                  {t(item.desc, item.desc)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-kraft-800/80 flex items-center justify-between text-xs font-mono text-kraft-400">
                <span>Certified Standard</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

