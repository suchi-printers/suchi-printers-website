"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO } from "@/data/content";
import {
  Award,
  Calendar,
  Building,
  Users,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 bg-paper text-charcoal-500 overflow-hidden">
      {/* Kraft Texture Pattern Overlay */}
      <div className="absolute inset-0 bg-kraft-texture opacity-30 pointer-events-none" />

      {/* Corrugated Wave Flute Divider at Top */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-kraft-400 via-cardboard to-kraft-400 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Esteemed Clients */}
          <div className="lg:col-span-7">
            {/* Stamp Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-kraft-200 border border-kraft-400 rounded text-xs font-mono uppercase tracking-widest text-cardboard font-bold mb-4 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-cardboard" />
              <span>{t("FOUNDED 1995 • MR. SANJAY MISHRA", "स्थापना 1995 • श्री संजय मिश्रा")}</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal-400 mb-6 leading-tight">
              {t("Three Decades of", "तीन दशकों का अटूट")} <br />
              <span className="text-cardboard">
                {t("Industrial Packaging Mastery.", "औद्योगिक पैकेजिंग विश्वास।")}
              </span>
            </h2>

            {/* Official Narrative text from prompt */}
            <div className="space-y-4 text-base text-charcoal-100 leading-relaxed">
              <p>
                {t(
                  "Founded in 1995 by Mr. Sanjay Mishra, Suchi Printers has been a trusted name in the printing and packaging industry for over two decades. We specialize in end-to-end manufacturing of boxes, notebook covers, and a variety of high-quality printed materials.",
                  "1995 में श्री संजय मिश्रा द्वारा स्थापित, सूची प्रिंटर्स मुद्रण और पैकेजिंग उद्योग में दो दशकों से अधिक समय से एक विश्वसनीय नाम रहा है। हम उच्च गुणवत्ता वाले बॉक्सेस, नोटबुक कवर्स और विविध मुद्रित सामग्रियों के संपूर्ण निर्माण में विशेषज्ञता रखते हैं।"
                )}
              </p>
              <p>
                {t(
                  "Since our inception, we’ve had the privilege of working with several esteemed brands, including Prabhakar, Kesar Agarbatti, Platinum Covers, and Wah Pan Masala. Our commitment to quality, timely delivery, and customer satisfaction has helped us build long-standing relationships in the industry.",
                  "अपनी स्थापना से ही, हमें प्रभाकर, केसर अगरबत्ती, प्लैटिनम कवर्स और वाह पान मसाला जैसे कई प्रतिष्ठित ब्रांडों के साथ काम करने का अवसर मिला है। गुणवत्ता, समय पर डिलीवरी और ग्राहकों की संतुष्टि के प्रति हमारी प्रतिबद्धता ने हमें उद्योग में दीर्घकालिक संबंध बनाने में मदद की है।"
                )}
              </p>
              <p className="font-semibold text-cardboard">
                {t(
                  "At Suchi Printers, we combine experience with innovation to deliver printing solutions that meet and exceed our clients’ expectations.",
                  "सूची प्रिंटर्स में, हम अपने ग्राहकों की अपेक्षाओं को पूरा करने और उनसे बेहतर परिणाम देने के लिए अनुभव को आधुनिक नवाचार के साथ जोड़ते हैं।"
                )}
              </p>
            </div>

            {/* Esteemed Client Partner Badges */}
            <div className="mt-8 pt-6 border-t border-kraft-300">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-kraft-700 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amberAccent-dark" />
                <span>{t("Esteemed Brand Partnerships", "हमारे सम्मानित ब्रांड पार्टनर्स")}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BUSINESS_INFO.esteemedClients.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white/90 border border-kraft-300 rounded-lg shadow-sm hover:shadow-md hover:border-kraft-500 transition-all text-center"
                  >
                    <div className="font-display font-bold text-base text-charcoal-400">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-kraft-600 font-medium">
                      {client.category}
                    </div>
                    <div className="mt-1 inline-block text-[9px] font-mono uppercase px-1.5 py-0.2 bg-kraft-100 text-cardboard rounded">
                      {client.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Cardboard Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-kraft-100 border-2 border-kraft-400 rounded-2xl p-6 sm:p-8 shadow-xl">
              {/* Tape Stamp Corners */}
              <div className="absolute -top-3 -left-3 w-16 h-6 bg-amberAccent/40 rotate-[-15deg] pointer-events-none border-y border-kraft-500/40" />
              <div className="absolute -bottom-3 -right-3 w-16 h-6 bg-amberAccent/40 rotate-[-15deg] pointer-events-none border-y border-kraft-500/40" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-kraft-300">
                <div className="w-12 h-12 rounded-xl bg-cardboard text-paper flex items-center justify-center font-display font-bold text-2xl shadow">
                  SP
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-charcoal-400 leading-tight">
                    SUCHI PRINTERS
                  </h3>
                  <p className="text-xs text-kraft-700 font-mono">
                    Fazalganj Factory Area • Kanpur – 208012
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kraft-300 flex items-center justify-center shrink-0 mt-0.5 text-cardboard">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-400">
                      In-House Heidelberg & Auto Corrugator Lines
                    </h4>
                    <p className="text-xs text-charcoal-100">
                      Advanced multicolor offset presses, computerized die-makers & high-speed flute laminators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kraft-300 flex items-center justify-center shrink-0 mt-0.5 text-cardboard">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-400">
                      Zero Rejection Quality Protocol
                    </h4>
                    <p className="text-xs text-charcoal-100">
                      Calibrated testing for bursting factor (BF), GSM conformity, and moisture resistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kraft-300 flex items-center justify-center shrink-0 mt-0.5 text-cardboard">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-400">
                      Direct Manufacturer Advantage
                    </h4>
                    <p className="text-xs text-charcoal-100">
                      Get transparent factory-direct pricing with zero middleman commissions on bulk contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder quote banner */}
              <div className="mt-6 p-4 rounded-xl bg-white/80 border border-kraft-300 text-xs italic text-charcoal-200">
                &ldquo;Packaging is not just a container; it is the first tactile touchpoint of your customer’s experience. We build packaging that protects your product and elevates your prestige.&rdquo;
                <div className="mt-2 font-display font-bold not-italic text-cardboard text-right text-sm">
                  — Mr. Sanjay Mishra, Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

