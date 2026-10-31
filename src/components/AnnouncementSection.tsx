"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ANNOUNCEMENT } from "@/data/content";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Box,
  Truck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function AnnouncementSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: "Inner Mono-Carton to Outer Duplex",
      titleHi: "इनर कार्टन से लेकर आउटर मास्टर बॉक्स",
      desc: "Complete packaging suite manufactured without third-party outsourcing.",
    },
    {
      title: "Calibrated Fluting (B, C, E)",
      titleHi: "कैलिब्रेटेड फ्लूटिंग प्रोफाइल्स",
      desc: "Engineered for superior compression strength and high stacking loads.",
    },
    {
      title: "Unified Color & Brand Harmony",
      titleHi: "सटीक कलर व ब्रांडिंग मैचिंग",
      desc: "Consistent Pantone reproduction across inner duplex boxes and outer shippers.",
    },
    {
      title: "Cost & Logistics Efficiency",
      titleHi: "किफायती लागत व आसान लॉजिस्टिक्स",
      desc: "Single-point factory billing, consolidated freight, and faster lead times.",
    },
  ];

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="corrugation"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-charcoal-500 via-charcoal-400 to-charcoal-500 text-paper overflow-hidden"
    >
      {/* Decorative Kraft Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-kraft-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amberAccent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Tape Strip Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kraft-800/80 border border-kraft-500/60 text-xs font-mono uppercase tracking-widest text-amberAccent shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{t(ANNOUNCEMENT.badge, ANNOUNCEMENT.badgeHi)}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-paper tracking-tight uppercase mb-4 leading-tight">
            {t(
              "Expanding Our Capabilities – Introducing End-to-End Corrugation Solutions",
              "हमारी क्षमताओं का विस्तार – एंड-टू-एंड कोरुगेशन समाधान"
            )}
          </h2>
          <p className="text-base sm:text-lg text-kraft-200/90 leading-relaxed font-light">
            {t(
              "From primary consumer duplex cartons to heavy-duty 3-ply, 5-ply, and 7-ply shipping master boxes—everything manufactured under one roof in Fazalganj, Kanpur.",
              "इनर कंज्यूमर मोनो-कार्टन से लेकर भारी 3-प्लाई, 5-प्लाई और 7-प्लाई शिपिंग मास्टर बॉक्स तक—सब कुछ फजलगंज, कानपुर में एक ही छत के नीचे निर्मित।"
            )}
          </p>
        </div>

        {/* Highlight Card */}
        <div className="rounded-2xl bg-charcoal-300/80 border-2 border-kraft-600/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Packaging Stamp */}
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full border-4 border-kraft-500/20 flex items-center justify-center rotate-12 pointer-events-none">
            <span className="font-mono text-[10px] tracking-widest text-kraft-500/40 uppercase text-center font-bold">
              SUCHI • CORRUGATION PLANT • KANPUR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL FACILITY EXPANSION ANNOUNCEMENT</span>
              </div>

              <div className="space-y-4 text-kraft-100 text-sm sm:text-base leading-relaxed">
                <p>
                  {t(
                    "In response to the evolving market environment and growing demand from our valued customers, we are excited to announce our expansion into corrugation. This strategic move enables us to offer comprehensive, end-to-end packaging solutions—from inner to outer duplex—all under one roof.",
                    "बदलते बाजार परिवेश और हमारे सम्मानित ग्राहकों की बढ़ती मांग को देखते हुए, हम कोरुगेशन में अपने विस्तार की घोषणा करते हुए बेहद उत्साहित हैं। यह रणनीतिक कदम हमें इनर बॉक्स से लेकर आउटर डुप्लेक्स मास्टर कार्टन तक—सभी संपूर्ण पैकेजिंग समाधान एक ही छत के नीचे प्रदान करने में सक्षम बनाता है।"
                  )}
                </p>
                <p className="text-kraft-300">
                  {t(
                    "With this addition, we’re not just enhancing our service offerings; we’re delivering greater efficiency, improved quality control, and a more seamless experience for our clients.",
                    "इस नई सुविधा के साथ, हम न केवल अपने सेवाओं का दायरा बढ़ा रहे हैं, बल्कि अपने ग्राहकों को बेहतर दक्षता, सख्त गुणवत्ता नियंत्रण और आसान प्रक्रिया प्रदान कर रहे हैं।"
                  )}
                </p>
                <p className="font-semibold text-amberAccent">
                  {t(
                    "Thank you for your continued trust in us as your packaging partner. We look forward to serving you with even more robust and integrated solutions.",
                    "पैकेजिंग पार्टनर के रूप में हम पर निरंतर विश्वास बनाए रखने के लिए धन्यवाद। हम आपके साथ और अधिक मजबूती से जुड़े रहने के लिए उत्सुक हैं।"
                  )}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToQuote}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amberAccent hover:bg-amberAccent-light text-charcoal-500 font-display font-bold text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Box className="w-4 h-4" />
                  <span>{t("Request Corrugated Box Quote", "कोरुगेटेड बॉक्स कोटेशन मांगें")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Pillars Column */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-charcoal-400/90 border border-kraft-700/60 hover:border-amberAccent/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-kraft-800/80 border border-kraft-600/60 flex items-center justify-center text-amberAccent mb-2.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-paper mb-1">
                    {t(b.title, b.titleHi)}
                  </h4>
                  <p className="text-xs text-kraft-300/80 leading-snug">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

