import { ProductItem, Testimonial, FaqItem } from "@/types";

export const BUSINESS_INFO = {
  name: "Suchi Printers",
  founder: "Mr. Sanjay Mishra",
  foundedYear: 1995,
  experienceYears: 35, // 35+ years packaging & printing legacy
  tagline: "Packaging that carries your brand.",
  taglineHi: "पैकेजिंग जो आपके ब्रांड को पहचान दिलाए।",
  phone: "9415405306",
  phoneDisplay: "+91 94154 05306",
  whatsappNumber: "919415405306",
  email: "suchiprinters@gmail.com",
  address: "123/385, Factory Area, Fazalganj, Kanpur – 208012, Uttar Pradesh, India",
  city: "Kanpur",
  state: "Uttar Pradesh",
  pincode: "208012",
  mapCoordinates: {
    lat: 26.4499,
    lng: 80.3101,
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.867382283084!2d80.30752137604543!3d26.44989997692634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47a59d9c8bc7%3A0x67db9b5894b868e8!2sFazalganj%20Industrial%20Area%2C%20Kanpur%2C%20Uttar%20Pradesh%20208012!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin",
  workingHours: "Monday – Saturday: 9:00 AM – 8:00 PM (Sunday by appointment)",
  stats: [
    { value: 35, suffix: "+", label: "Years of Heritage", labelHi: "वर्षों का अनुभव" },
    { value: 10, suffix: "M+", label: "Boxes Delivered", labelHi: "10M+ बॉक्सेस डिलीवर" },
    { value: 50, suffix: "+", label: "Corporate Clients", labelHi: "50+ प्रमुख ग्राहक" },
    { value: 100, suffix: "%", label: "In-House Quality Check", labelHi: "100% गुणवत्ता परीक्षण" },
  ],
  esteemedClients: [
    { name: "Prabhakar", category: "Stationery & Publishing", badge: "Long-standing Partner" },
    { name: "Kesar Agarbatti", category: "Fragrance & Incense", badge: "Premium Cartons" },
    { name: "Platinum Covers", category: "Notebooks & Paper Goods", badge: "Offset Laminated" },
    { name: "Wah Pan Masala", category: "FMCG & Packaging", badge: "High-Volume Duplex" },
  ],
};

export const ANNOUNCEMENT = {
  badge: "Strategic Expansion",
  badgeHi: "रणनीतिक विस्तार",
  title: "Expanding Our Capabilities – Introducing End-to-End Corrugation Solutions",
  titleHi: "हमारी क्षमताओं का विस्तार – एंड-टू-एंड कोरुगेशन समाधान",
  content: `In response to the evolving market environment and growing demand from our valued customers, we are excited to announce our expansion into corrugation. This strategic move enables us to offer comprehensive, end-to-end packaging solutions—from inner to outer duplex—all under one roof.

With this addition, we’re not just enhancing our service offerings; we’re delivering greater efficiency, improved quality control, and a more seamless experience for our clients.

Thank you for your continued trust in us as your packaging partner. We look forward to serving you with even more robust and integrated solutions.`,
  contentHi: `बदलते बाजार परिवेश और हमारे सम्मानित ग्राहकों की बढ़ती मांग को देखते हुए, हम कोरुगेशन में अपने विस्तार की घोषणा करते हुए बेहद उत्साहित हैं। यह रणनीतिक कदम हमें इनर बॉक्स से लेकर आउटर डुप्लेक्स मास्टर कार्टन तक—सभी संपूर्ण पैकेजिंग समाधान एक ही छत के नीचे प्रदान करने में सक्षम बनाता है।

इस नई सुविधा के साथ, हम न केवल अपने सेवाओं का दायरा बढ़ा रहे हैं, बल्कि अपने ग्राहकों को बेहतर दक्षता, सख्त गुणवत्ता नियंत्रण और आसान प्रक्रिया प्रदान कर रहे हैं।`,
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "food-packaging-boxes",
    slug: "food-packaging-boxes",
    title: "Food Packaging Boxes",
    titleHi: "खाद्य पैकेजिंग बॉक्सेस",
    tagline: "Certified food-grade greaseproof cartons for sweets, bakeries & cloud kitchens",
    taglineHi: "फूड-ग्रेड, ऑयल-रेसिस्टेंट मिठाई व बेकरी बॉक्सेस",
    description:
      "Hygienic, oil-resistant, and moisture-tight packaging for sweets (Mithai), snacks, dry fruits, burgers, and baked items. Formulated with certified food-safe inks and greaseproof barrier coatings.",
    descriptionHi:
      "मिठाई, नमकीन, ड्राई फ्रूट्स, बेकरी और रेस्तरां के लिए सुरक्षित व आकर्षक फूड-ग्रेड बॉक्सेस। फूड-सेफ स्याही और ऑयल-रेसिस्टेंट कोटिंग के साथ।",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Paper Grade", value: "Certified Food Grade SBS / Cupstock / FBB" },
      { label: "GSM Range", value: "230 GSM – 350 GSM" },
      { label: "Internal Coating", value: "Greaseproof Poly / PE Coating" },
      { label: "Certifications", value: "Food Contact Safe Inks (Low Migration)" },
      { label: "Styles", value: "Locking Sweet Box, Clamshell, Handle Box" },
    ],
    applications: [
      "Traditional Indian Mithai & Sweet Boxes",
      "Cake, Pastry & Donut Boxes",
      "Cloud Kitchen & Takeaway Fast Food",
      "Dry Fruit Festive Gift Hampers",
    ],
    features: [
      "Zero oil leakage and grease resistance",
      "Steam vent holes for hot food items",
      "Stiff structural stackability for delivery riders",
      "Luxury gold leaf embossing for festive editions",
    ],
    badge: "Food-Safe Certified",
  },
  {
    id: "agarbatti-boxes",
    slug: "aggarbatti-incense-boxes",
    title: "Aggarbatti (Incense) Boxes",
    titleHi: "अगरबत्ती पैकेजिंग बॉक्सेस",
    tagline: "Aroma-locking premium cartons with gold foil stamping & UV embossing",
    taglineHi: "सुगंध को सुरक्षित रखने वाले गोल्ड फॉयल व यूवी बॉक्सेस",
    description:
      "Specialized packaging designed to retain fragrance freshness and prevent oil leakage. Finished with high-clarity metallic foils, spot UV, holographic seals, and precision tuck-in flaps for premier retail shelf appeal.",
    descriptionHi:
      "अगरबत्ती की सुगंध को लंबे समय तक बनाए रखने के लिए विशेष नमी-रोधी और ऑयल-रेसिस्टेंट कार्टन। गोल्ड फॉयल, स्पॉट यूवी और होलोग्राफिक फिनिश के साथ।",
    category: "duplex",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Board Type", value: "Cyber XL / ITC Sapphire / Duplex Board" },
      { label: "GSM Range", value: "250 GSM – 400 GSM" },
      { label: "Special Finishes", value: "Gold / Silver Foil Stamping, Spot UV" },
      { label: "Coating", value: "Fragrance Barrier & Anti-Scuff Matt" },
      { label: "Style", value: "Hexagonal, Long Zipper, Tuck-End, Square" },
    ],
    applications: [
      "Pooja Agarbatti & Dhoop Packaging",
      "Export Grade Incense Sticks",
      "Floral & Herbal Dhoop Cones",
      "Multi-Pack Outer Duplex Boxes",
    ],
    features: [
      "Multi-month aroma retention barrier",
      "Vibrant high-density offset colors",
      "Crisp die-creasing for high-speed machine packing",
      "Tamper-evident tear strips",
    ],
    badge: "Best Seller",
  },
  {
    id: "undergarment-boxes",
    slug: "undergarment-boxes",
    title: "Undergarment & Apparel Boxes",
    titleHi: "अंडरगारमेंट व अपैरल बॉक्सेस",
    tagline: "Sleek retail display packaging with transparent PET windows & luxury laminations",
    taglineHi: "ट्रांसपेरेंट विंडो व लक्ज़री लैमिनेशन के साथ प्रीमियम बॉक्स",
    description:
      "Custom-crafted packaging for innerwear, vests, socks, and lingerie brands. Engineered with crystal-clear die-cut display windows, smooth touch thermal lamination, and sturdy auto-lock bottoms for effortless assembly.",
    descriptionHi:
      "इनरवेयर, बनियान, मोज़े और गारमेंट्स के लिए विशेष रिटेल बॉक्सेस। पारदर्शी विंडो कटआउट, मैट व ग्लॉस लैमिनेशन और ऑटो-लॉक बॉटम के साथ।",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Paper Board", value: "Grey Back / White Back Duplex / FBB Board" },
      { label: "GSM Range", value: "280 GSM – 380 GSM" },
      { label: "Window Option", value: "Food-grade clear PET film window" },
      { label: "Lamination", value: "Thermal Gloss / Soft-Touch Velvet Matt" },
      { label: "Box Style", value: "Straight Tuck, Reverse Tuck, Crash Lock" },
    ],
    applications: [
      "Men's & Women's Innerwear",
      "Athletic & Activewear Accessories",
      "Hosiery & Sock Display Packs",
      "Premium Garment Gift Boxes",
    ],
    features: [
      "Window patch for fabric & color visibility",
      "Reinforced corners resisting shelf crush",
      "High-speed automatic folder-gluer compatible",
      "Ultra-sharp fashion model photography print",
    ],
  },
  {
    id: "corrugated-boxes",
    slug: "corrugated-packaging-boxes",
    title: "Corrugated Packaging Boxes",
    titleHi: "कोरुगेटेड पैकेजिंग बॉक्सेस",
    tagline: "Heavy-duty 3-ply, 5-ply & 7-ply shipping cartons with high bursting strength",
    taglineHi: "3-प्लाई, 5-प्लाई और 7-प्लाई मजबूत शिपिंग कार्टन",
    description:
      "Engineered for heavy-duty shipping, industrial storage, and e-commerce transit. Manufactured with high-grade virgin kraft paper, custom fluting profiles (B, C, E flutes), and calibrated bursting factor for zero transit damage.",
    descriptionHi:
      "भारी शिपिंग, औद्योगिक भंडारण और ई-कॉमर्स पारगमन के लिए विशेष रूप से निर्मित। वर्जिन क्राफ्ट पेपर, कस्टम फ्लूट प्रोफाइल और उच्च बस्टिंग स्ट्रेंथ के साथ तैयार।",
    category: "corrugated",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Ply Construction", value: "3-Ply, 5-Ply, 7-Ply Heavy Duty" },
      { label: "Flute Types", value: "B-Flute, C-Flute, E-Flute, Micro Flute" },
      { label: "Paper Grade", value: "120 GSM to 300+ GSM Kraft" },
      { label: "Bursting Factor (BF)", value: "16 BF to 32+ BF" },
      { label: "Printing", value: "Flexo Graphic / Screen / Multicolor Offset" },
    ],
    applications: [
      "Bulk Industrial Transit",
      "E-Commerce Shipping Master Cartons",
      "FMCG Wholesale Outer Packs",
      "Export Grade Cargo",
    ],
    features: [
      "Rigid edge crush resistance",
      "Moisture-resistant adhesive coating",
      "Precise slotting and die-cut handles",
      "Custom branding and barcode printing",
    ],
    badge: "New Corrugation Plant",
  },
  {
    id: "notebook-book-covers",
    slug: "notebook-book-covers",
    title: "Notebook & Book Covers",
    titleHi: "नोटबुक व पुस्तक कवर्स",
    tagline: "High-volume multicolor printed covers with thermal lamination & UV embossing",
    taglineHi: "हाई-वॉल्यूम मल्टीकलर प्रिंटेड नोटबुक व बुक कवर्स",
    description:
      "Heavy-duty, scuff-resistant book and register covers printed at rapid turnaround for educational publishers and stationery brands. Featuring deep embossing, holographic register branding, and accurate spine creasing.",
    descriptionHi:
      "स्कूल व कॉलेज कॉपियों, रजिस्टरों और किताबों के लिए मजबूत, लैमिनेटेड व आकर्षक कवर्स। हाई-स्पीड 4-कलर व 6-कलर ऑफसेट प्रिंटिंग तकनीक से निर्मित।",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Paper Material", value: "Art Paper, ITC Duplex, Maplitho Board" },
      { label: "GSM Range", value: "170 GSM to 350 GSM" },
      { label: "Finishing", value: "Thermal Gloss / Matt / Drip-Off UV" },
      { label: "Print Technology", value: "Heidelberg Multi-Color Offset Presses" },
      { label: "Creasing", value: "Precision multi-line spine creasing" },
    ],
    applications: [
      "School Exercise Books & Registers",
      "College Practical & Hardbound Notebooks",
      "Educational Textbooks & Booklets",
      "Corporate Diaries & Annual Planners",
    ],
    features: [
      "Tear-resistant edge coating",
      "Vivid color vibrancy that lasts for academic years",
      "Custom embossing for publisher logos",
      "Bulk capacity exceeding 100,000 covers per shift",
    ],
    badge: "High Volume Hub",
  },
  {
    id: "pan-masala-boxes",
    slug: "pan-masala-packaging-boxes",
    title: "Pan Masala Packaging Boxes",
    titleHi: "पान मसाला पैकेजिंग बॉक्सेस",
    tagline: "High-speed automated carton boxes with micro-embossing & anti-counterfeit foil",
    taglineHi: "एंटी-काउंटरफीट सुरक्षा व हाई-स्पीड ऑटोमैटिक कार्टन",
    description:
      "Precision-die cartons specifically crafted for high-speed automatic filling lines in the pan masala and mouth freshener industry. Equipped with anti-counterfeiting security foils, tactile micro-embossing, and tight friction closure.",
    descriptionHi:
      "पान मसाला व माउथ फ्रेशनर उद्योग की ऑटोमैटिक पैकेजिंग लाइनों के लिए सुपर-प्रिसिजन कार्टन। सुरक्षा फॉयल, माइक्रो-एम्बॉसिंग और परफेक्ट डाई-कटिंग के साथ।",
    category: "duplex",
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Substrate", value: "ITC Sapphire / Cyber Premium Duplex" },
      { label: "GSM", value: "270 GSM – 350 GSM High Stiffness" },
      { label: "Security", value: "Holographic Foil Strip, Micro-texting" },
      { label: "Finish", value: "Cast & Cure 3D Lamination, UV Texture" },
      { label: "Tolerance", value: "Sub-millimeter die creasing for auto packaging" },
    ],
    applications: [
      "Premium Pan Masala & Zarda Master Packs",
      "Mouth Freshener & Saunf Tucks",
      "Herbal Chew Cartons",
      "Outer Duplex Display Dispensers",
    ],
    features: [
      "Zero jam rate on high-speed filling lines",
      "Tamper-proof holographic security measures",
      "Moisture-proof outer barrier to preserve aroma",
      "High-luster metallic shine",
    ],
  },
  {
    id: "spices-packaging-boxes",
    slug: "spices-packaging-boxes",
    title: "Spices Packaging Boxes",
    titleHi: "मसाला पैकेजing बॉक्सेस",
    tagline: "Aroma-barrier cartons with appetizing multi-color print for ground spices",
    taglineHi: "सुगंध-रोधी व जीवंत रंगों वाले शुद्ध मसाला बॉक्सेस",
    description:
      "Vibrant, food-safe consumer cartons for whole and ground spices (Haldi, Mirchi, Garam Masala). Engineered with barrier inner linings to protect against ambient humidity and keep spice essential oils intact.",
    descriptionHi:
      "हल्दी, मिर्च, धनिया और गरम मसालों के लिए विशेष नमी-रोधी कार्टन। जीवंत रंगीन छपाई और लंबे समय तक ताजगी बनाए रखने की क्षमता के साथ।",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Substrate", value: "Pure Virgin Board / Food Contact Duplex" },
      { label: "GSM Range", value: "250 GSM – 350 GSM" },
      { label: "Barrier", value: "Internal Moisture & Essential Oil Barrier" },
      { label: "Printing", value: "6-Color Offset High Density Inks" },
      { label: "Window Option", value: "Optional clear display window" },
    ],
    applications: [
      "Ground Spice Cartons (50g, 100g, 200g, 500g)",
      "Whole Spices Premium Packs",
      "Seasoning & Masala Blends",
      "Herbal Cooking Powders",
    ],
    features: [
      "Retains essential oils and pungency",
      "Resists oil migration staining the outer carton",
      "High visual shelf pop against competitors",
      "Easy re-close flip top lids",
    ],
  },
];

export const PRODUCTION_STEPS = [
  {
    step: "01",
    title: "Design",
    titleHi: "डिजाइन (Design)",
    shortLabel: "CAD & Die-line",
    desc: "Custom structural sizing, CAD die-lines, GSM selection, and physical 3D mockups tested for exact product fit.",
    descHi: "सटीक साइजिंग, सीएडी डाई-लाइन, जीएसएम चयन और वास्तविक उत्पाद के अनुसार 3D सैंपल तैयार करना।",
    icon: "DraftingCompass",
    details: [
      "Precision CAD dieline drafting",
      "Structural fit verification",
      "Paper grade & GSM calibration",
      "Pre-production approval mockup",
    ],
  },
  {
    step: "02",
    title: "Die Cutting",
    titleHi: "डाई-कटिंग (Die Cutting)",
    shortLabel: "Laser Die & Crease",
    desc: "Computerized laser dies ensure sub-millimeter edge tolerances, crisp scorelines, and flawless high-speed machine feeding.",
    descHi: "कंप्यूटराइज्ड लेजर डाई तकनीक द्वारा सटीक कटिंग व क्रीजिंग, जिससे ऑटोमैटिक पैकेजिंग में कभी रुकावट न आए।",
    icon: "Scissors",
    details: [
      "Laser-cut steel rule dies",
      "Sub-millimeter cutting tolerances",
      "Crisp spine & flap creasing",
      "Automated waste stripping",
    ],
  },
  {
    step: "03",
    title: "Printing",
    titleHi: "प्रिंटिंग (Printing)",
    shortLabel: "Offset & Flexo",
    desc: "Heidelberg multi-color offset and flexo presses delivering Pantone color fidelity, sharp typography, and scannable barcodes.",
    descHi: "मल्टीकलर ऑफसेट व फ्लेक्सो मशीनों द्वारा सटीक रंग, स्पष्ट टेक्स्ट, मेटैलिक फॉयल और बारकोड छपाई।",
    icon: "Printer",
    details: [
      "Multi-color Heidelberg presses",
      "Pantone & CMYK color fidelity",
      "Gold / Silver hot foil stamping",
      "High-scannability barcode printing",
    ],
  },
  {
    step: "04",
    title: "Pasting / Folding",
    titleHi: "पेस्टिंग व फोल्डिंग (Pasting / Folding)",
    shortLabel: "Auto Folder-Gluer",
    desc: "High-speed automated folder-gluers bond carton flaps, laminate corrugated flutes, and assemble lock-bottom trays with PVA glue.",
    descHi: "हाई-स्पीड ऑटोमैटिक फोल्डर-ग्लूअर मशीनों द्वारा मजबूत पेस्टिंग, फ्लूट लेमिनेशन और लॉक-बॉटम असेंबली।",
    icon: "Layers",
    details: [
      "High-speed automated folder-gluer",
      "Heavy-duty PVA bonding adhesive",
      "Crash-lock and tuck-in folding",
      "Corrugated flute lamination",
    ],
  },
  {
    step: "05",
    title: "Quality Check",
    titleHi: "क्वालिटी चेक (Quality Check)",
    shortLabel: "Calibrated BF & QA",
    desc: "Rigorous testing for Bursting Strength (BF), Edge Crush Test (ECT), moisture calibration, and dimensional accuracy.",
    descHi: "बस्टिंग स्ट्रेंथ (BF), एज क्रश टेस्ट (ECT), नमी प्रतिशत और साइज की 100% सटीक गुणवत्ता जांच।",
    icon: "ShieldCheck",
    details: [
      "Bursting Factor (BF) calibration",
      "Edge Crush Test (ECT) verification",
      "Moisture level testing",
      "Batch-to-batch zero defect protocol",
    ],
  },
  {
    step: "06",
    title: "Delivery",
    titleHi: "डिलीवरी (Delivery)",
    shortLabel: "Palletized Dispatch",
    desc: "Protective weather-wrapped bundling on pallets followed by scheduled factory dispatch across UP and PAN-India.",
    descHi: "मौसम-रोधी सुरक्षित पैकिंग, पैलेट बंडलिंग और समय पर फैक्ट्री डिलीवरी पूरे उत्तर प्रदेश व भारत में।",
    icon: "Truck",
    details: [
      "Moisture-proof stretch wrapping",
      "Heavy-duty strapping & pallets",
      "Real-time dispatch tracking",
      "Direct factory door-to-door delivery",
    ],
  },
];

export const INDUSTRIES = [
  {
    name: "Food & Confectionery",
    nameHi: "खाद्य व मिष्ठान",
    desc: "Greaseproof sweet boxes, snack cartons & cloud kitchen meal packaging.",
    icon: "UtensilsCrossed",
  },
  {
    name: "Incense & Fragrance",
    nameHi: "अगरबत्ती व धूप",
    desc: "Aroma-sealed gold foil cartons, hexagonal tubes & zipper boxes.",
    icon: "Flame",
  },
  {
    name: "Apparel & Textiles",
    nameHi: "गारमेंट्स व वस्त्र",
    desc: "Clear-window undergarment boxes, shirt packaging & garment cartons.",
    icon: "Shirt",
  },
  {
    name: "Stationery & Publishing",
    nameHi: "स्टेशनरी व प्रकाशन",
    desc: "High-volume laminated notebook covers, textbook bindings & registers.",
    icon: "BookOpen",
  },
  {
    name: "FMCG & Pan Masala",
    nameHi: "एफएमसीजी व पान मसाला",
    desc: "Holographic anti-counterfeit duplex cartons built for high-speed packing lines.",
    icon: "PackageCheck",
  },
  {
    name: "E-Commerce & Logistics",
    nameHi: "ई-कॉमर्स व लॉजिस्टिक्स",
    desc: "Heavy-duty 3-ply and 5-ply corrugated master shipping boxes.",
    icon: "Boxes",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "35+ Years of Industry Mastery",
    titleHi: "35+ वर्षों का समृद्ध अनुभव",
    desc: "Operating from Kanpur's prime Fazalganj industrial belt since 1995 under the leadership of Mr. Sanjay Mishra.",
    stamp: "ESTD. 1995",
  },
  {
    title: "End-to-End In-House Plant",
    titleHi: "पूर्ण इन-हाउस मैन्युफैक्चरिंग",
    desc: "Zero outsourcing. Designing, printing, die-cutting, corrugation, and pasting all executed under one unified roof.",
    stamp: "100% IN-HOUSE",
  },
  {
    title: "New Integrated Corrugation Line",
    titleHi: "नया इंटीग्रेटेड कोरुगेशन प्लांट",
    desc: "Now delivering complete inner-to-outer packaging, from delicate mono-cartons to heavy 7-ply export shipping boxes.",
    stamp: "ALL-IN-ONE",
  },
  {
    title: "Direct Factory Wholesale Pricing",
    titleHi: "फैक्ट्री डायरेक्ट थोक दरें",
    desc: "No middlemen or agent margins. Get guaranteed competitive quotes for bulk orders with transparent slab pricing.",
    stamp: "DIRECT SAVINGS",
  },
  {
    title: "High-Speed Batch Turnaround",
    titleHi: "तीव्र डिलीवरी व समयबद्धता",
    desc: "High-capacity automated machines capable of producing 200,000+ cartons weekly to meet your seasonal spikes.",
    stamp: "FAST DISPATCH",
  },
  {
    title: "Calibrated Quality Control",
    titleHi: "कठोर गुणवत्ता मापदंड",
    desc: "Every batch is calibrated for GSM, caliper, moisture %, and Bursting Factor (BF) to ensure zero transit damage.",
    stamp: "QA TESTED",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Agrawal",
    role: "Supply Chain Director",
    company: "Kesar Agarbatti Works",
    location: "Kanpur / Varanasi",
    productSupplied: "Gold-Foiled Incense Cartons",
    rating: 5,
    content:
      "Suchi Printers has been supplying our flagship agarbatti cartons for over 8 years. The gold foil sharpness and fragrance barrier coating are unmatched. Our retail rejection rate dropped to zero after partnering with them.",
    contentHi:
      "सूची प्रिंटर्स पिछले 8 वर्षों से हमारे अगरबत्ती कार्टन तैयार कर रहे हैं। गोल्ड फॉयल की फिनिश और खुशबू बरकरार रखने वाली कोटिंग वाकई बेमिसाल है।",
  },
  {
    id: "2",
    name: "Vikas Sharma",
    role: "Production Head",
    company: "Wah Pan Masala Group",
    location: "Uttar Pradesh",
    productSupplied: "High-Speed Duplex Packaging",
    rating: 5,
    content:
      "In our business, cartons must feed smoothly into 300-packs-per-minute automated machines without jamming. Suchi Printers' laser die-cutting precision is phenomenal. Sanjay ji has always honored delivery commitments.",
    contentHi:
      "हमारी हाई-स्पीड ऑटोमैटिक मशीनों के लिए डाई-कटिंग में एक मिलीमीटर की भी गलती नहीं चल सकती। सूची प्रिंटर्स की गुणवत्ता और समय की पाबंदी हमेशा सर्वश्रेष्ठ रही है।",
  },
  {
    id: "3",
    name: "Sunil Mehrotra",
    role: "Managing Director",
    company: "Platinum Covers & Stationery",
    location: "Kanpur",
    productSupplied: "Laminated Notebook Covers",
    rating: 5,
    content:
      "We print over 500,000 notebook covers each academic season. Suchi Printers delivers vibrant color reproduction, flawless UV lamination, and pristine spine creases every single run.",
    contentHi:
      "हर शैक्षिक सत्र में हम 5 लाख से अधिक कॉपियों के कवर्स छपवाते हैं। रंगों की चमक और क्रीजिंग हमेशा परफेक्ट मिलती है।",
  },
  {
    id: "4",
    name: "Anand Prabhakar",
    role: "Managing Partner",
    company: "Prabhakar Publications",
    location: "Delhi / Kanpur",
    productSupplied: "Book Covers & Multi-Ply Cartons",
    rating: 5,
    content:
      "Their recent expansion into corrugation has been a game-changer for us. Now we get our book covers and heavy-duty shipping outer cartons from one single vendor under one roof. Tremendous efficiency gain!",
    contentHi:
      "इनके कोरुगेशन विस्तार से हमें बहुत लाभ हुआ है। अब हमें इनर कवर और बाहरी बड़े कोरुगेटेड बॉक्स एक ही जगह मिल जाते हैं।",
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "Ordering & MOQ",
    question: "What is your Minimum Order Quantity (MOQ)?",
    questionHi: "न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?",
    answer:
      "For customized corrugated boxes, our standard MOQ is typically 1,000 to 2,500 units depending on dimensions. For mono-cartons (agarbatti, food, undergarment, spices), the MOQ is usually 5,000 units. For plain unprinted boxes or repeat runs, smaller batches can also be accommodated.",
    answerHi:
      "कस्टम कोरुगेटेड बॉक्सेस के लिए न्यूनतम ऑर्डर 1,000 से 2,500 पीस है। अगरबत्ती, फूड और मोनो-कार्टन्स के लिए 5,000 पीस का MOQ रहता है।",
  },
  {
    category: "Customization & Sampling",
    question: "Can I get a physical sample or mock-up before placing a bulk order?",
    questionHi: "क्या बल्क ऑर्डर से पहले फिजिकल सैंपल मिल सकता है?",
    answer:
      "Yes, absolutely. We provide structural blank samples to test your exact product fit, as well as digital printed mockups for artwork verification before full-scale production.",
    answerHi:
      "हाँ, बिल्कुल। हम साइज टेस्टिंग के लिए ब्लैंक डाई-कट सैंपल और आर्टवर्क अप्रूवल के लिए डिजिटल सैंपल उपलब्ध कराते हैं।",
  },
  {
    category: "Technical & Corrugation",
    question: "What plies and fluting options do you manufacture?",
    questionHi: "आप किन-किन प्लाइ और फ्लूटिंग के बॉक्स बनाते हैं?",
    answer:
      "With our newly expanded corrugation facility, we produce 3-ply, 5-ply, and heavy-duty 7-ply boxes using B-flute (high puncture resistance), C-flute (superior stacking cushioning), and E-flute (micro-flute for sleek retail packaging).",
    answerHi:
      "हमारे नए कोरुगेशन प्लांट में 3-प्लाई, 5-प्लाई और 7-प्लाई बॉक्सेस B, C और E फ्लूट में बनाए जाते हैं।",
  },
  {
    category: "Printing & Finishes",
    question: "What special printing and surface finishes are available?",
    questionHi: "कौन सी विशेष प्रिंटिंग व फिनिशिंग तकनीक उपलब्ध हैं?",
    answer:
      "We offer multicolor offset printing, flexographic printing, hot metallic foil stamping (gold, silver, bronze), thermal gloss/matt lamination, spot UV, drip-off UV, drip emboss, window patching (PET film), and security holographic labels.",
    answerHi:
      "हम मल्टीकलर ऑफसेट, फ्लेक्सो, गोल्ड/सिल्वर फॉयल स्टैम्पिंग, मैट/ग्लॉस लैमिनेशन, स्पॉट यूवी और विंडो पैचिंग प्रदान करते हैं।",
  },
  {
    category: "Delivery & Turnaround",
    question: "What is your production and delivery timeline?",
    questionHi: "उत्पादन और डिलीवरी में कितना समय लगता है?",
    answer:
      "Standard repeat orders are dispatched within 4 to 7 working days. New custom projects requiring fresh die fabrication and plates take approximately 7 to 10 working days. We deliver across Uttar Pradesh and all major industrial hubs in India.",
    answerHi:
      "रिपीट ऑर्डर्स 4 से 7 कार्यदिवसों में और नए डिजाइन के ऑर्डर्स 7 से 10 दिनों में पूरे देश में डिलीवर किए जाते हैं।",
  },
  {
    category: "Location & Visiting",
    question: "Can we visit your manufacturing facility in Fazalganj, Kanpur?",
    questionHi: "क्या हम आपकी फजलगंज फैक्ट्री में आकर बातचीत कर सकते हैं?",
    answer:
      "You are most welcome! We are located at 123/385, Factory Area, Fazalganj, Kanpur. Our facility is open Monday to Saturday from 9:00 AM to 8:00 PM. You can inspect paper stocks, live printing presses, corrugators, and meet Mr. Sanjay Mishra directly.",
    answerHi:
      "आपका स्वागत है! आप 123/385, फैक्ट्री एरिया, फजलगंज, कानपुर में स्थित हमारी यूनिट में सोमवार से शनिवार सुबह 9 से रात 8 बजे तक आ सकते हैं।",
  },
];

