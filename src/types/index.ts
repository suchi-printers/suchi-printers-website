export interface Enquiry {
  id: string;
  timestamp: string; // ISO string
  name: string;
  phone: string;
  email?: string;
  company?: string;
  product: string;
  quantity?: string;
  size?: string;
  message?: string;
  sourcePage?: string;
  status: "new" | "contacted" | "quoted" | "closed";
  notes?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  category: "corrugated" | "duplex" | "commercial" | "packaging";
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  applications: string[];
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  contentHi: string;
  rating: number;
  location: string;
  productSupplied: string;
}

export interface FaqItem {
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: string;
}

