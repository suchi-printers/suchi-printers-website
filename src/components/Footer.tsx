"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO, PRODUCTS } from "@/data/content";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-500 text-paper border-t-2 border-kraft-700/80 pt-16 pb-24 sm:pb-12 relative overflow-hidden">
      {/* Decorative corrugated flute line at the top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-kraft-700 via-amberAccent to-kraft-700 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-kraft-800">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-kraft-700 border-2 border-kraft-500/60 flex items-center justify-center font-display font-black text-xl text-paper">
                SP
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-paper">
                  SUCHI PRINTERS
                </span>
                <span className="block text-[10px] text-amberAccent font-mono tracking-widest uppercase">
                  ESTD. 1995 • FAZALGANJ KANPUR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-kraft-300 leading-relaxed font-light">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
              <span className="block text-kraft-400 mt-1 font-devanagari">
                {BUSINESS_INFO.taglineHi}
              </span>
            </p>

            <p className="text-xs text-kraft-400 leading-relaxed">
              Founded in 1995 by Mr. Sanjay Mishra. Operating an end-to-end printing, corrugation, and packaging manufacturing plant serving prestigious Indian brands.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-charcoal-400 text-kraft-300 border border-kraft-700 rounded">
                ISO Grade Bursting Strength
              </span>
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-charcoal-400 text-emerald-400 border border-kraft-700 rounded">
                Corrugator Line Active
              </span>
            </div>
          </div>

          {/* Product Directory (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-amberAccent mb-4">
              Packaging Products
            </h4>
            <ul className="space-y-2 text-xs text-kraft-300">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    className="hover:text-amberAccent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-kraft-600">›</span>
                    <span>{prod.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Factory Hours (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-amberAccent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-kraft-300">
              <li>
                <a href="#about" className="hover:text-amberAccent transition-colors">
                  About Sanjay Mishra
                </a>
              </li>
              <li>
                <a href="#corrugation" className="hover:text-amberAccent transition-colors">
                  Corrugation Plant Expansion
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amberAccent transition-colors">
                  6-Stage Production Journey
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-amberAccent transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amberAccent transition-colors">
                  Factory Showcase & Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amberAccent transition-colors">
                  FAQ & Minimum Orders (MOQ)
                </a>
              </li>
              <li>
                <Link href="/admin" className="text-kraft-400 hover:text-amberAccent transition-colors">
                  Admin Portal & Excel Export
                </Link>
              </li>
            </ul>
          </div>

          {/* Factory Plant Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-amberAccent mb-4">
              Kanpur Factory Unit
            </h4>

            <div className="text-xs text-kraft-300 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amberAccent shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-paper hover:underline font-mono">
                  +91 94154 05306
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amberAccent shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-paper hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SEO keywords and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-kraft-500 font-mono">
          <div>
            © {new Date().getFullYear()} Suchi Printers. All rights reserved. Registered Factory Unit, Fazalganj, Kanpur.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span>Corrugated Box Manufacturer in Kanpur</span>
            <span>•</span>
            <span>Packaging Boxes Kanpur</span>
            <span>•</span>
            <span>Aggarbatti Box Manufacturer</span>
            <span>•</span>
            <span>Food Packaging Boxes Kanpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

