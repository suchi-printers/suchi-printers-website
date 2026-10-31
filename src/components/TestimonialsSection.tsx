"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIALS } from "@/data/content";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-20 bg-charcoal-400 text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-300 border border-kraft-700 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <span>CLIENT EXPERIENCES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Trusted by Industry Leaders", "उद्योग जगत का अटूट भरोसा")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-300 leading-relaxed font-light">
            {t(
              "Read how our long-term manufacturing partners benefit from our packaging quality, precision dies, and reliable batch deliveries.",
              "जानिए हमारे साझेदार हमारे बॉक्सेस की मजबूती, डाई-कटिंग प्रिसिजन और समयबद्ध डिलीवरी के बारे में क्या कहते हैं।"
            )}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-charcoal-300/90 border-2 border-kraft-700/70 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            {/* Top Quote Icon */}
            <Quote className="w-12 h-12 text-kraft-600/40 mb-4" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4 text-amberAccent">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Review Content */}
            <p className="text-base sm:text-xl text-paper font-light leading-relaxed italic mb-8">
              &ldquo;{t(current.content, current.contentHi)}&rdquo;
            </p>

            {/* Client Info Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-kraft-800">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-lg text-paper">
                    {current.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-700/40">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>
                <div className="text-xs text-kraft-300 font-medium">
                  {current.role} • <span className="text-amberAccent">{current.company}</span>
                </div>
                <div className="text-[11px] text-kraft-500 font-mono mt-0.5">
                  Supplied: {current.productSupplied} ({current.location})
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-3 rounded-xl bg-charcoal-400 hover:bg-charcoal-200 border border-kraft-700 text-kraft-200 hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-xl bg-charcoal-400 hover:bg-charcoal-200 border border-kraft-700 text-kraft-200 hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIdx === i
                    ? "w-8 bg-amberAccent"
                    : "w-2 bg-kraft-700 hover:bg-kraft-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

