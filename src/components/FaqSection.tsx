"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAQS } from "@/data/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-charcoal-500 text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-300 border border-kraft-700 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-300 leading-relaxed font-light">
            {t(
              "Clear answers regarding minimum order quantities, paper stocks, sample lead times, and factory visits.",
              "न्यूनतम ऑर्डर मात्रा (MOQ), पेपर क्वालिटी, सैंपल प्रक्रिया और डिलीवरी समय से जुड़े महत्वपूर्ण उत्तर।"
            )}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-charcoal-400/90 border border-kraft-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-charcoal-300/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amberAccent font-bold">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-paper tracking-tight">
                      {t(faq.question, faq.questionHi)}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-kraft-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amberAccent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-kraft-200/90 leading-relaxed border-t border-kraft-800/40 bg-charcoal-400/50">
                    <p className="mb-2">{t(faq.answer, faq.answerHi)}</p>
                    <span className="inline-block text-[10px] font-mono text-amberAccent/80 uppercase">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

