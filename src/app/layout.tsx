import type { Metadata, Viewport } from "next";
import { Oswald, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://suchiprinters.com"),
  title: {
    default: "Suchi Printers | Corrugated Box & Industrial Packaging Manufacturer Kanpur",
    template: "%s | Suchi Printers Kanpur",
  },
  description:
    "Leading packaging box manufacturer in Kanpur since 1995. High-quality 3-ply, 5-ply, 7-ply corrugated boxes, luxury agarbatti boxes, food packaging, book covers, and duplex cartons. Factory Area, Fazalganj.",
  keywords: [
    "corrugated box manufacturer in Kanpur",
    "packaging boxes Kanpur",
    "aggarbatti box manufacturer",
    "food packaging boxes Kanpur",
    "packaging box manufacturer Uttar Pradesh",
    "corrugation plant Kanpur",
    "Fazalganj packaging company",
    "custom bulk packaging India",
    "duplex box manufacturer",
    "notebook covers printing Kanpur",
  ],
  authors: [{ name: "Suchi Printers - Mr. Sanjay Mishra" }],
  creator: "Suchi Printers",
  publisher: "Suchi Printers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://suchiprinters.com",
    title: "Suchi Printers | Premier Packaging & Corrugated Box Manufacturer Kanpur",
    description:
      "Precision engineered corrugated cartons, agarbatti boxes, food packaging & notebook covers. 35+ years industrial excellence in Fazalganj, Kanpur.",
    siteName: "Suchi Printers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suchi Printers Packaging Factory Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suchi Printers | Bulk Corrugated & Packaging Boxes Kanpur",
    description:
      "Leading manufacturer of corrugated boxes, incense boxes, food packaging, and commercial print solutions in Kanpur.",
  },
  alternates: {
    canonical: "https://suchiprinters.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema (JSON-LD) for Rich Google Search snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Suchi Printers",
    legalName: "Suchi Printers",
    founder: {
      "@type": "Person",
      name: "Mr. Sanjay Mishra",
    },
    foundingDate: "1995",
    description:
      "Premier manufacturer of corrugated packaging boxes, agarbatti incense boxes, food packaging cartons, apparel packaging, and notebook covers in Kanpur, Uttar Pradesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123/385, Factory Area, Fazalganj",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208012",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.4499,
      longitude: 80.3101,
    },
    telephone: "+91-9415405306",
    email: "suchiprinters@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Packaging Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corrugated Packaging Boxes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aggarbatti (Incense) Boxes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Undergarment & Apparel Boxes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food Packaging Boxes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Notebook & Book Covers" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pan Masala Packaging Boxes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spices Packaging Boxes" } },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} ${devanagari.variable} font-body bg-charcoal-500 text-paper antialiased selection:bg-amberAccent selection:text-charcoal-500`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

