"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/data/content";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-charcoal-300 hover:bg-charcoal-200 border border-kraft-600 text-kraft-200 hover:text-white flex items-center justify-center shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Chat Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Suchi%20Printers,%20I%20want%20to%20enquire%20about%20packaging%20boxes.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated Ping Ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline-block font-display font-bold text-xs uppercase tracking-wider pr-1">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Mobile Bottom Quick-Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-charcoal-500/95 border-t border-kraft-800 backdrop-blur-lg px-4 py-2.5 flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-charcoal-300 border border-kraft-700 text-amberAccent font-bold text-xs uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 text-amberAccent" />
          <span>Call 9415405306</span>
        </a>

        <a
          href="#quote-form"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amberAccent text-charcoal-500 font-bold text-xs uppercase tracking-wider shadow"
        >
          <span>Get Free Quote</span>
        </a>
      </div>
    </>
  );
}

