"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_INFO, PRODUCTS } from "@/data/content";
import {
  FileSpreadsheet,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export default function QuoteFormSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    product: "Food Packaging Boxes",
    quantity: "5,000 pcs",
    size: "",
    message: "",
    _hp_gotcha: "", // Honeypot
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Listen for pre-selection event from product cards
  useEffect(() => {
    const handleSelectProduct = (e: any) => {
      const selected = e.detail?.product;
      if (selected) {
        setFormData((prev) => ({ ...prev, product: selected }));
      }
    };

    window.addEventListener("sp_select_product", handleSelectProduct);
    return () => window.removeEventListener("sp_select_product", handleSelectProduct);
  }, []);

  const validatePhone = (value: string): boolean => {
    const clean = value.replace(/[\s\-\+\(\)]/g, "").replace(/^0|^91/, "");
    const isValid = /^[6-9]\d{9}$/.test(clean);
    if (!isValid) {
      setPhoneError("Please enter a valid 10-digit Indian phone number (e.g. 9415405306)");
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, phone: val });
    if (val.length >= 10) {
      validatePhone(val);
    } else {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate phone
    if (!validatePhone(formData.phone)) {
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: "Quote Form Section",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please call us directly.");
      }

      setSubmitSuccess(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#E8A33D", "#A67C52", "#F5EBDD", "#25D366"],
        });
      } catch (e) {
        // Ignore if confetti blocked
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit quote request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-charcoal-400 text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-300 border border-kraft-700 text-xs font-mono uppercase tracking-widest text-amberAccent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FACTORY DIRECT QUOTE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-paper mb-4">
            {t("Request a Free Packaging Quote", "मुफ़्त पैकेजिंग कोटेशन प्राप्त करें")}
          </h2>

          <p className="text-sm sm:text-base text-kraft-300 leading-relaxed font-light">
            {t(
              "Tell us your box dimensions, ply requirements, or product type. Our Kanpur estimation engineers will provide factory-direct wholesale pricing within 24 hours.",
              "अपने बॉक्स का साइज, प्लाइ या उत्पाद का विवरण साझा करें। हमारे विशेषज्ञ 24 घंटे के भीतर आपको सर्वश्रेष्ठ फैक्ट्री-थोक दरें प्रदान करेंगे।"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Container (7 Cols) */}
          <div className="lg:col-span-7 bg-charcoal-300/90 border-2 border-kraft-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative">
            {/* Corner Kraft Tape Stamp */}
            <div className="absolute -top-3 -right-3 w-20 h-6 bg-kraft-500/25 rotate-12 pointer-events-none border-y border-kraft-400/20" />

            {submitSuccess ? (
              <div className="py-10 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-paper mb-2">
                  {t("Thank you! We'll contact you within 24 hours.", "धन्यवाद! हम 24 घंटे के भीतर आपसे संपर्क करेंगे।")}
                </h3>

                <p className="text-sm text-kraft-300 max-w-md mx-auto mb-6">
                  {t(
                    `Your enquiry for ${formData.product} has been registered in our factory queue. Our technical team is reviewing your requirements.`,
                    `आपके ${formData.product} की पूछताछ हमारे सिस्टम में दर्ज हो चुकी है। हमारी टीम जल्द ही आपसे संपर्क करेगी।`
                  )}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Suchi%20Printers,%20I%20just%20submitted%20a%20quote%20for%20${encodeURIComponent(formData.product)}%20(${formData.name}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-display font-bold uppercase tracking-wider shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Instantly</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        company: "",
                        product: "Food Packaging Boxes",
                        quantity: "5,000 pcs",
                        size: "",
                        message: "",
                        _hp_gotcha: "",
                      });
                    }}
                    className="px-5 py-3 rounded-xl bg-charcoal-400 hover:bg-charcoal-200 border border-kraft-700 text-kraft-200 text-xs font-medium"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field (hidden from real users to trap spam bots) */}
                <input
                  type="text"
                  name="_hp_gotcha"
                  value={formData._hp_gotcha}
                  onChange={(e) => setFormData({ ...formData, _hp_gotcha: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Indian Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Full Name <span className="text-amberAccent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Agrawal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors placeholder:text-kraft-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Phone Number (WhatsApp) <span className="text-amberAccent">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xs font-mono text-kraft-400">
                        +91
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="9415405306"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full pl-11 pr-4 py-2.5 rounded-lg bg-charcoal-400 border text-paper text-sm focus:outline-none focus:ring-1 transition-colors placeholder:text-kraft-600 ${
                          phoneError
                            ? "border-red-500 focus:ring-red-500"
                            : "border-kraft-700 focus:border-amberAccent focus:ring-amberAccent"
                        }`}
                      />
                    </div>
                    {phoneError && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">
                        {phoneError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Business / Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="business@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors placeholder:text-kraft-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kesar Fragrances Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors placeholder:text-kraft-600"
                    />
                  </div>
                </div>

                {/* Row 3: Product Type Dropdown & Approx Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Product Type <span className="text-amberAccent">*</span>
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors"
                    >
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.title}>
                          {prod.title}
                        </option>
                      ))}
                      <option value="Other Custom Packaging Box">Other Custom Packaging Box</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                      Approx Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors"
                    >
                      <option value="1,000 to 2,500 pcs">1,000 to 2,500 pcs (Trial batch)</option>
                      <option value="5,000 pcs">5,000 pcs (Standard run)</option>
                      <option value="10,000 pcs">10,000 pcs (Popular wholesale)</option>
                      <option value="25,000 pcs">25,000 pcs</option>
                      <option value="50,000+ pcs">50,000+ pcs (Maximum discount)</option>
                      <option value="Sample / Prototype only">Sample / Prototype only</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Box Dimensions / Sizing */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                    Box Dimensions (Optional: Length × Width × Height)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 × 10 × 8 inches or 300 × 250 × 200 mm"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors placeholder:text-kraft-600"
                  />
                </div>

                {/* Row 5: Message & Specifications */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                    Detailed Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention board GSM, ply requirement (3-ply/5-ply), special finishes (foil, UV, window), delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-charcoal-400 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent transition-colors placeholder:text-kraft-600"
                  />
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amberAccent to-amberAccent-dark hover:from-amberAccent-light hover:to-amberAccent text-charcoal-500 font-display font-bold text-base uppercase tracking-wider shadow-xl hover:shadow-amberAccent/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-charcoal-500 border-t-transparent animate-spin" />
                      <span>Sending Request to Factory...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("Submit Quote Request", "कोटेशन अनुरोध भेजें")}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-kraft-400/80 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Privacy • Your details are never shared with third parties</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Kanpur Factory Address & Google Maps Embed (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-charcoal-300/80 border border-kraft-700 shadow-xl backdrop-blur-sm">
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-paper mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amberAccent" />
                <span>Kanpur Manufacturing Facility</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-kraft-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-paper">Plant Address:</span>
                    <p className="text-kraft-300 mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-paper">Direct Factory Phone:</span>
                    <p className="mt-0.5">
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-amberAccent hover:underline font-mono"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-paper">Direct Email:</span>
                    <p className="mt-0.5">
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-amberAccent hover:underline"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-paper">Operating Hours:</span>
                    <p className="text-kraft-300 mt-0.5">{BUSINESS_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-kraft-800">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-charcoal-400 hover:bg-charcoal-200 border border-kraft-700 text-xs font-semibold text-paper transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amberAccent" />
                  <span>Call Sanjay Mishra</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-xs font-semibold text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-kraft-700 shadow-xl bg-charcoal-500 h-64 sm:h-72 relative">
              <iframe
                title="Suchi Printers Fazalganj Kanpur Location Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-charcoal-400/90 border border-kraft-700 px-3 py-1 rounded text-[11px] font-mono text-kraft-200 pointer-events-none backdrop-blur-sm">
                📍 Factory Area, Fazalganj, Kanpur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

