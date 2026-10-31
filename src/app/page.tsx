"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AnnouncementSection from "@/components/AnnouncementSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<string>("Food Packaging Boxes");

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-400">
      {/* Sticky Industrial Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Interactive 3D Cardboard Box */}
        <HeroSection />

        {/* Trust Strip & Animated Stats */}
        <TrustStrip />

        {/* Strategic Announcement: Expanding Capabilities into Corrugation */}
        <AnnouncementSection />

        {/* About Suchi Printers: Mr. Sanjay Mishra, 1995 Legacy & Esteemed Clients */}
        <AboutSection />

        {/* 7 Core Product Cards with Filter & Pre-Select Enquire */}
        <ProductsSection onSelectProduct={handleSelectProduct} />

        {/* Horizontal Production Journey Timeline: 6 Stages */}
        <ProcessTimeline />

        {/* Why Choose Us: Industrial Stamp Badges */}
        <WhyChooseUs />

        {/* Industries We Serve */}
        <IndustriesSection />

        {/* Factory Floor & Products Gallery with Lightbox */}
        <GallerySection />

        {/* Client Testimonials Slider */}
        <TestimonialsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Quote Request Form with Indian Phone Validation, Excel DB Sync & Google Map */}
        <QuoteFormSection />
      </main>

      {/* Industrial Footer */}
      <Footer />

      {/* Floating Action Buttons: WhatsApp & Mobile Call */}
      <FloatingActions />
    </div>
  );
}

