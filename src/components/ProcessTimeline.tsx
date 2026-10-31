"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTION_STEPS } from "@/data/content";
import {
  DraftingCompass,
  Printer,
  Scissors,
  Layers,
  ShieldCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  ChevronRight,
  Factory,
} from "lucide-react";

export default function ProcessTimeline() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, any> = {
    DraftingCompass,
    Scissors,
    Printer,
    Layers,
    ShieldCheck,
    Truck,
  };

  const currentStep = PRODUCTION_STEPS[activeStep];
  const CurrentIcon = iconMap[currentStep.icon] || Layers;

  return (
    <section id="process" className="py-20 bg-paper text-charcoal-500 relative overflow-hidden">
      {/* Kraft Paper Texture Background */}
      <div className="absolute inset-0 bg-kraft-texture opacity-30 pointer-events-none" />

      {/* Flute Top & Bottom Dividers */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-kraft-400 via-cardboard to-kraft-400 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-kraft-200 border border-kraft-400 rounded-full text-xs font-mono uppercase tracking-widest text-cardboard font-bold mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-amberAccent-dark" />
            <span>MANUFACTURING PIPELINE DIAGRAM</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal-400 mb-4">
            {t("Our 6-Stage Manufacturing Journey", "हमारी 6-चरणीय उत्पादन प्रक्रिया")}
          </h2>

          <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed font-light">
            {t(
              "An engineered end-to-end manufacturing flow under one roof: From CAD design and laser die-cutting to high-definition printing, automated pasting/folding, calibrated quality check, and final dispatch.",
              "एक ही छत के नीचे पूर्ण निर्माण प्रवाह: सीएडी डिजाइन और लेजर डाई-कटिंग से लेकर हाई-डेफिनिशन प्रिंटिंग, ऑटोमैटिक पेस्टिंग/फोल्डिंग, कैलिब्रेटेड क्वालिटी चेक और सुरक्षित डिलीवरी तक।"
            )}
          </p>

          {/* Quick Flow Ribbon Diagram */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 bg-charcoal-400 text-paper rounded-xl border border-kraft-700 shadow-md text-[11px] sm:text-xs font-mono">
            <span className="font-bold text-amberAccent">1. Design</span>
            <ChevronRight className="w-3.5 h-3.5 text-kraft-400" />
            <span className="font-bold text-amberAccent">2. Die Cutting</span>
            <ChevronRight className="w-3.5 h-3.5 text-kraft-400" />
            <span className="font-bold text-amberAccent">3. Printing</span>
            <ChevronRight className="w-3.5 h-3.5 text-kraft-400" />
            <span className="font-bold text-amberAccent">4. Pasting / Folding</span>
            <ChevronRight className="w-3.5 h-3.5 text-kraft-400" />
            <span className="font-bold text-amberAccent">5. Quality Check</span>
            <ChevronRight className="w-3.5 h-3.5 text-kraft-400" />
            <span className="font-bold text-emerald-400">6. Delivery</span>
          </div>
        </div>

        {/* --- HORIZONTAL PROCESS DIAGRAM (6 CONNECTED NODES) --- */}
        <div className="relative mb-12">
          {/* Background Connecting Conveyor Pipe (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-2 bg-gradient-to-r from-cardboard via-amberAccent to-emerald-600 rounded-full z-0 shadow-inner" />

          {/* Grid of 6 Process Diagram Stations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-3 relative z-10">
            {PRODUCTION_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Layers;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer rounded-2xl p-4 sm:p-4 border-2 transition-all duration-300 flex flex-col justify-between relative ${
                    isSelected
                      ? "bg-white border-cardboard shadow-2xl scale-[1.03] ring-4 ring-amberAccent/20"
                      : "bg-white/85 border-kraft-300 hover:border-cardboard hover:bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Directional Flow Arrow on Desktop (except last item) */}
                  {idx < PRODUCTION_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-8 z-20 w-6 h-6 rounded-full bg-cardboard text-amberAccent items-center justify-center shadow pointer-events-none">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div>
                    {/* Top Row: Stage Badge & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`font-mono text-xs font-black px-2 py-0.5 rounded border ${
                            isSelected
                              ? "bg-cardboard text-amberAccent border-cardboard"
                              : "bg-kraft-200 text-charcoal-400 border-kraft-300"
                          }`}
                        >
                          Step {idx + 1}
                        </span>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isSelected
                            ? "bg-gradient-to-br from-amberAccent to-cardboard text-charcoal-500 shadow"
                            : "bg-kraft-100 text-cardboard border border-kraft-300"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title (Exact naming requested) */}
                    <h3 className="font-display font-bold text-lg sm:text-base text-charcoal-400 uppercase tracking-tight mb-1 leading-tight group-hover:text-cardboard transition-colors">
                      {idx + 1}. {t(step.title, step.titleHi)}
                    </h3>

                    {/* Sub-label */}
                    <div className="text-[10px] font-mono font-semibold text-amberAccent-dark uppercase tracking-wider mb-2">
                      {step.shortLabel}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-charcoal-100 leading-snug line-clamp-3">
                      {t(step.desc, step.descHi)}
                    </p>
                  </div>

                  {/* Active Indicator Button */}
                  <div className="mt-4 pt-2.5 border-t border-kraft-200 flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? "text-cardboard font-bold" : "text-kraft-600"}>
                      {isSelected ? "● Active View" : "Click to Inspect"}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DETAILED INSPECTION DIAGRAM CARD FOR ACTIVE STAGE --- */}
        <div className="rounded-2xl bg-charcoal-400 text-paper border-2 border-kraft-600/70 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle Kraft Grid Background */}
          <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

          {/* Watermark Step Number */}
          <div className="absolute -bottom-8 -right-4 font-mono font-black text-8xl text-kraft-700/10 pointer-events-none select-none">
            {currentStep.step}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Stage Overview & Icon */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-widest uppercase bg-kraft-800 text-amberAccent border border-kraft-600 rounded">
                  STAGE {currentStep.step} OF 06 IN-HOUSE WORKFLOW
                </span>
                <span className="text-xs text-kraft-400 font-mono">
                  Fazalganj Manufacturing Unit
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-kraft-700 border-2 border-kraft-500 text-amberAccent flex items-center justify-center shrink-0 shadow-md">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-paper uppercase tracking-tight leading-tight">
                    {activeStep + 1}. {t(currentStep.title, currentStep.titleHi)}
                  </h3>
                  <span className="text-xs font-mono text-amberAccent">
                    Key Role: {currentStep.shortLabel}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-kraft-200/90 leading-relaxed mb-6 font-light">
                {t(currentStep.desc, currentStep.descHi)}
              </p>

              {/* Step Navigation Pill Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : PRODUCTION_STEPS.length - 1))
                  }
                  className="px-3.5 py-2 rounded-lg bg-charcoal-300 hover:bg-charcoal-200 border border-kraft-700 text-xs font-mono text-kraft-200 transition-colors"
                >
                  ← Previous Stage
                </button>

                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev < PRODUCTION_STEPS.length - 1 ? prev + 1 : 0))
                  }
                  className="px-4 py-2 rounded-lg bg-amberAccent hover:bg-amberAccent-light text-charcoal-500 font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Next: Step {activeStep < 5 ? activeStep + 2 : 1} →
                </button>
              </div>
            </div>

            {/* Right: Technical Quality Parameters & Tolerances */}
            <div className="lg:col-span-5 bg-charcoal-300/90 border border-kraft-700/80 rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-amberAccent font-bold mb-3 pb-2 border-b border-kraft-700">
                <Factory className="w-4 h-4" />
                <span>TECHNICAL TOLERANCES & CAPABILITIES</span>
              </div>

              <ul className="space-y-2.5 text-xs text-kraft-200">
                {currentStep.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-paper">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-kraft-800 text-[11px] font-mono text-kraft-400 flex items-center justify-between">
                <span>Inspection Standard:</span>
                <span className="text-amberAccent font-bold">100% Calibrated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype Sample Request Banner */}
        <div className="mt-10 rounded-2xl bg-white border-2 border-kraft-400 p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cardboard text-amberAccent flex items-center justify-center shrink-0 shadow">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-charcoal-400 uppercase tracking-tight">
                {t(
                  "Need a Structural Sample Before Bulk Run?",
                  "बल्क उत्पादन से पहले स्ट्रक्चरल सैंपल की आवश्यकता है?"
                )}
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-100">
                {t(
                  "We craft CAD blank die-cut samples and digital print mockups so you can test product fit and box strength.",
                  "हम सीएडी ब्लैंक डाई-कट सैंपल और डिजिटल प्रिंट मॉकअप प्रदान करते हैं ताकि आप साइज और मजबूती की पहले ही जांच कर सकें।"
                )}
              </p>
            </div>
          </div>

          <a
            href="#quote-form"
            className="shrink-0 px-6 py-3 rounded-xl bg-cardboard hover:bg-cardboard/90 text-paper font-display font-bold text-xs uppercase tracking-wider shadow hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t("Request Sample Prototype", "सैंपल प्रोटोटाइप मांगें")}
          </a>
        </div>
      </div>
    </section>
  );
}
