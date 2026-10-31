"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO } from "@/data/content";
import {
  Ruler,
  Boxes,
  CheckCircle,
  Truck,
  Building2,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function TrustStrip() {
  const { t } = useLanguage();

  const trustBadges = [
    {
      icon: Ruler,
      title: "Custom Sizes & Dies",
      titleHi: "कस्टम साइज व डाई",
      desc: "Tailored to exact millimeter specs",
      descHi: "सटीक माप के अनुसार निर्माण",
    },
    {
      icon: Boxes,
      title: "High-Volume Bulk Orders",
      titleHi: "थोक बल्क ऑर्डर्स",
      desc: "Up to 500k units per month",
      descHi: "प्रति माह 5 लाख बॉक्स क्षमता",
    },
    {
      icon: CheckCircle,
      title: "100% Quality Checked",
      titleHi: "100% गुणवत्ता परीक्षण",
      desc: "Calibrated BF & moisture tested",
      descHi: "बस्टिंग स्ट्रेंथ व नमी टेस्टेड",
    },
    {
      icon: Truck,
      title: "Guaranteed On-Time Delivery",
      titleHi: "समय पर फैक्ट्री डिलीवरी",
      desc: "Reliable logistics across UP & India",
      descHi: "पूरे भारत में सुरक्षित लॉजिस्टिक्स",
    },
  ];

  return (
    <div className="relative bg-charcoal-500 border-y-2 border-kraft-600/70 py-10 shadow-xl overflow-hidden">
      {/* Flute wave decorative line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-kraft-700 via-amberAccent to-kraft-700 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Key Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-8 border-b border-kraft-800">
          {BUSINESS_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-xl bg-charcoal-400/80 border border-kraft-700/50 hover:border-amberAccent/60 transition-all text-center group"
            >
              {/* Shipping Stamp Style Border */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-amberAccent group-hover:scale-105 transition-transform tracking-tight">
                {stat.value}
                <span className="text-paper">{stat.suffix}</span>
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-kraft-200">
                {t(stat.label, stat.labelHi)}
              </div>
              <div className="text-[10px] text-kraft-400/80 font-mono mt-0.5 uppercase tracking-wider">
                {idx === 0
                  ? "ESTD. 1995"
                  : idx === 1
                  ? "CERTIFIED DISPATCH"
                  : idx === 2
                  ? "PAN-INDIA CLIENTS"
                  : "STRICT BATCH QA"}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-lg bg-charcoal-400/50 border border-kraft-800/80 hover:bg-charcoal-300/60 transition-colors"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-kraft-800/60 border border-kraft-600/60 flex items-center justify-center text-amberAccent">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-paper">
                    {t(badge.title, badge.titleHi)}
                  </h4>
                  <p className="text-xs text-kraft-300/80">
                    {t(badge.desc, badge.descHi)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flute wave bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-kraft-700 via-amberAccent to-kraft-700 opacity-60" />
    </div>
  );
}

