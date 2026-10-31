"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO } from "@/data/content";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  FileSpreadsheet,
  Globe,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", labelHi: "होम" },
    { href: "#about", label: "About", labelHi: "हमारे बारे में" },
    { href: "#products", label: "Products", labelHi: "उत्पाद" },
    {
      href: "#corrugation",
      label: "Corrugation",
      labelHi: "कोरुगेशन",
      badge: "NEW",
    },
    { href: "#process", label: "Process", labelHi: "प्रक्रिया" },
    { href: "#industries", label: "Industries", labelHi: "उद्योग" },
    { href: "#gallery", label: "Gallery", labelHi: "गैलरी" },
    { href: "#contact", label: "Contact", labelHi: "संपर्क" },
  ];

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Industrial Announcement & Quick Call Ribbon */}
      <div className="bg-charcoal-500 border-b border-kraft-800/80 text-kraft-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amberAccent font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{t("ISO Calibrated Plant", "आईएसओ प्रमाणित प्लांट")}</span>
            </span>
            <span className="text-kraft-600">|</span>
            <span>📍 123/385, Factory Area, Fazalganj, Kanpur – 208012</span>
            <span className="text-kraft-600">|</span>
            <span className="text-kraft-300">Mon–Sat: 9 AM – 8 PM</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amberAccent transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-amberAccent" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-kraft-600">|</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Suchi%20Printers,%20I%20need%20a%20bulk%20packaging%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-kraft-600">|</span>
            <Link
              href="/admin"
              className="hover:text-amberAccent text-kraft-400 text-[11px] transition-colors"
              title="Admin Portal"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-400/95 backdrop-blur-md border-b border-kraft-700/50 shadow-2xl py-3"
            : "bg-charcoal-400/80 backdrop-blur-sm border-b border-kraft-800/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo with Kraft Stamp Accent */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-kraft-700 border-2 border-kraft-500/60 flex items-center justify-center shadow-inner group-hover:border-amberAccent transition-colors overflow-hidden">
              <span className="font-display font-black text-xl text-paper tracking-wider">
                SP
              </span>
              <div className="absolute inset-0 bg-kraft-texture opacity-30" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-paper group-hover:text-amberAccent transition-colors">
                  SUCHI PRINTERS
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-kraft-800/80 text-amberAccent border border-kraft-600/50 rounded">
                  ESTD. 1995
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-kraft-300/90 font-medium tracking-wide">
                Industrial Packaging & Corrugation • Kanpur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-kraft-200 hover:text-amberAccent transition-colors py-1 group flex items-center gap-1"
              >
                <span>{t(link.label, link.labelHi)}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 bg-amberAccent text-charcoal-400 font-bold rounded-sm animate-pulse">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amberAccent transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switch Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-kraft-600/60 bg-charcoal-300 hover:bg-charcoal-200 text-xs font-medium text-kraft-200 hover:text-amberAccent transition-all"
              title="Toggle English / हिन्दी"
            >
              <Globe className="w-3.5 h-3.5 text-amberAccent" />
              <span>{lang === "en" ? "हिन्दी" : "English"}</span>
            </button>

            {/* Get Free Quote CTA */}
            <button
              onClick={scrollToQuote}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amberAccent to-amberAccent-dark hover:from-amberAccent-light hover:to-amberAccent text-charcoal-500 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amberAccent/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>{t("Get Free Quote", "मुफ़्त कोटेशन प्राप्त करें")}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded border border-kraft-600/60 bg-charcoal-300 text-xs font-semibold text-amberAccent"
            >
              {lang === "en" ? "हिं" : "EN"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-charcoal-300 border border-kraft-700 text-kraft-200 hover:text-amberAccent transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-kraft-800 bg-charcoal-400/98 backdrop-blur-xl px-4 py-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-kraft-100 hover:text-amberAccent py-2 border-b border-charcoal-200"
                >
                  <span>{t(link.label, link.labelHi)}</span>
                  {link.badge ? (
                    <span className="text-[10px] px-2 py-0.5 bg-amberAccent text-charcoal-500 font-bold rounded">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-kraft-600" />
                  )}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={scrollToQuote}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amberAccent text-charcoal-500 font-bold uppercase tracking-wider text-sm shadow-md"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{t("Get a Free Quote", "मुफ़्त कोटेशन प्राप्त करें")}</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-charcoal-200 border border-kraft-700 text-xs font-semibold text-kraft-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-amberAccent" />
                    <span>Call Factory</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-950/60 border border-emerald-600/40 text-xs font-semibold text-emerald-400"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

