"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Eye, X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "boxes" | "plant" | "printing" | "finishing";
  image: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Food Contact Safe Mithai & Snack Boxes",
    category: "boxes",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80",
    caption: "Certified greaseproof SBS board containers with food-grade internal barrier coating.",
  },
  {
    id: "g2",
    title: "Gold Foil Embossed Incense Packaging",
    category: "finishing",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
    caption: "High precision hot foil stamping and spot UV on cyber duplex board.",
  },
  {
    id: "g3",
    title: "Heidelberg Multi-Color Offset Press Line",
    category: "printing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    caption: "Delivering crisp dot-matrix registration, vibrant Pantone inks, and sharp barcodes.",
  },
  {
    id: "g4",
    title: "Premium Apparel & Undergarment Boxes",
    category: "boxes",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    caption: "PET display windows and thermal velvet-matt lamination for retail apparel brands.",
  },
  {
    id: "g5",
    title: "Heavy-Duty Corrugated Master Cartons",
    category: "boxes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    caption: "5-ply export shippers ready for palletized truck dispatch from Fazalganj unit.",
  },
  {
    id: "g6",
    title: "Automated Flute Corrugator & Slitter Line",
    category: "plant",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    caption: "Our newly integrated corrugation facility producing B, C, and E flutes.",
  },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filtered =
    selectedFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-paper text-charcoal-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-kraft-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-kraft-200 border border-kraft-400 rounded text-xs font-mono uppercase tracking-widest text-cardboard font-bold mb-3 shadow-sm">
            <span>FACTORY & PRODUCT SHOWCASE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal-400 mb-4">
            {t("Craftsmanship in Every Crease", "हमारी निर्माण गैलरी")}
          </h2>

          <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed font-light">
            {t(
              "Take a look inside our Fazalganj manufacturing floor, printing presses, and finished packaging runs.",
              "हमारे फजलगंज कारखाने, प्रिंटिंग प्रेस और तैयार पैकेजिंग उत्पादों की एक झलक।"
            )}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: "all", label: "All Works" },
              { id: "boxes", label: "Finished Boxes" },
              { id: "plant", label: "Plant & Machinery" },
              { id: "printing", label: "Printing Lines" },
              { id: "finishing", label: "Foil & Lamination" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === f.id
                    ? "bg-cardboard text-paper shadow-md"
                    : "bg-kraft-200/80 text-charcoal-300 hover:bg-kraft-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-kraft-400 shadow-md hover:shadow-xl cursor-pointer bg-charcoal-500 transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-3 rounded-full bg-amberAccent text-charcoal-500 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-paper z-10">
                <h4 className="font-display font-bold text-lg leading-tight uppercase text-paper mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-kraft-200/90 line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal-400 rounded-2xl overflow-hidden border-2 border-kraft-600 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal-300 hover:bg-charcoal-200 text-paper shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-80 sm:h-[450px]">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                className="object-contain bg-black/50"
              />
            </div>

            <div className="p-6 bg-charcoal-300 border-t border-kraft-700">
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-paper mb-1">
                {activeImage.title}
              </h3>
              <p className="text-sm text-kraft-300">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

