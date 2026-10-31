"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO } from "@/data/content";
import {
  FileSpreadsheet,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Factory,
  Award,
} from "lucide-react";

// Dynamically import Three.js Hero3DBox to prevent SSR hydration mismatches
const Hero3DBox = dynamic(() => import("@/components/Hero3DBox"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center bg-charcoal-300/40 rounded-2xl border border-kraft-800/60 animate-pulse">
      <div className="text-center text-kraft-400">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-kraft-500 border-t-amberAccent animate-spin" />
        <span className="text-xs font-mono">Initializing 3D Packaging Box...</span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-charcoal-400 text-paper overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Kraft Grid & Atmospheric Glow */}
      <div className="absolute inset-0 bg-charcoal-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-kraft-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amberAccent/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Industrial Shipping Tape Accent Across Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-300 border border-kraft-600/50 text-xs font-mono text-kraft-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-amberAccent font-bold">KANPUR INDUSTRIAL CORRIDOR</span>
          <span className="text-kraft-500">•</span>
          <span>{t("Direct Manufacturer Rates", "फैक्ट्री डायरेक्ट थोक दरें")}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Stamp Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest font-bold bg-kraft-800 text-amberAccent border border-kraft-600 rounded">
                ESTD. 1995 • 35+ YRS MASTERY
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-700/50 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                END-TO-END CORRUGATION
              </span>
            </div>

            {/* Main Headline with Condensed Impact Font */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-paper uppercase leading-[1.08] mb-4">
              {t("Packaging That", "पैकेजिंग जो आपके")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amberAccent via-kraft-300 to-amberAccent-light">
                {t("Carries Your Brand.", "ब्रांड को दे नई पहचान।")}
              </span>
            </h1>

            {/* Subheadline with clear audience & capability targeting */}
            <p className="text-base sm:text-lg text-kraft-200/90 leading-relaxed mb-8 max-w-2xl font-light">
              {t(
                "Kanpur's premier bulk manufacturer of heavy-duty corrugated cartons, luxury duplex agarbatti boxes, food-grade packaging, and high-speed printed mono-cartons. Precision die-cutting and certified bursting strength calibrated under one roof.",
                "कानपुर का अग्रणी पैकेजिंग निर्माता। भारी कोरुगेटेड कार्टन, लक्जरी अगरबत्ती बॉक्सेस, फूड-ग्रेड पैकेजिंग और उच्च गति प्रिंटेड मोनो-कार्टन्स—इन-हाउस डाई-कटिंग व कैलिब्रेटेड बस्टिंग स्ट्रेंथ के साथ।"
              )}
            </p>

            {/* Dual CTAs: Free Quote & WhatsApp */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={scrollToQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-amberAccent to-amberAccent-dark hover:from-amberAccent-light hover:to-amberAccent text-charcoal-500 font-display font-bold text-base sm:text-lg tracking-wider uppercase shadow-xl hover:shadow-amberAccent/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>{t("Get a Free Quote", "मुफ़्त कोटेशन प्राप्त करें")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Suchi%20Printers,%20I%20am%20looking%20for%20custom%20bulk%20packaging%20boxes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-base sm:text-lg tracking-wider uppercase shadow-xl hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("WhatsApp Us", "व्हाट्सएप पर बात करें")}</span>
              </a>
            </div>

            {/* Rapid Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-kraft-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-charcoal-300 border border-kraft-700/60 flex items-center justify-center text-amberAccent">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-paper">100% In-House</div>
                  <div className="text-[11px] text-kraft-400">Fazalganj Plant</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-charcoal-300 border border-kraft-700/60 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-paper">Zero Flaw QA</div>
                  <div className="text-[11px] text-kraft-400">Calibrated BF</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-charcoal-300 border border-kraft-700/60 flex items-center justify-center text-amberAccent">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-paper">35+ Yrs Heritage</div>
                  <div className="text-[11px] text-kraft-400">Since 1995</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-charcoal-300 border border-kraft-700/60 flex items-center justify-center text-amberAccent">
                  <span className="text-xs font-mono font-bold text-amberAccent">₹</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-paper">Wholesale Rates</div>
                  <div className="text-[11px] text-kraft-400">Direct Factory</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Cardboard Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-charcoal-300/60 to-charcoal-500/80 p-2 sm:p-4 border border-kraft-700/40 shadow-2xl backdrop-blur-sm overflow-hidden">
              <Hero3DBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

