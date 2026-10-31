import fs from "fs";
import path from "path";
import { Enquiry } from "@/types";

const DB_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "enquiries.json");

// Initial sample seed so Admin dashboard looks populated immediately
const INITIAL_SEED: Enquiry[] = [
  {
    id: "sp-lead-1001",
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    name: "Mohit Tandon",
    phone: "9839012345",
    email: "mohit@tandonmasala.com",
    company: "Tandon Spices & Foods",
    product: "Spices packaging Boxes",
    quantity: "25,000 pcs",
    size: "120 x 85 x 40 mm",
    message: "Need moisture-barrier 4-color duplex boxes for 100g Haldi & Mirch powders. Urgent requirement.",
    sourcePage: "Products Section",
    status: "quoted",
    notes: "Sent quote ₹2.40/box for 25k batch. Awaiting sample approval.",
  },
  {
    id: "sp-lead-1002",
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    name: "Alok Gupta",
    phone: "9415123987",
    email: "alok@sugandhincense.in",
    company: "Sugandh Agarbatti Works",
    product: "Aggarbatti (incense) boxes",
    quantity: "50,000 pcs",
    size: "260 x 50 x 20 mm",
    message: "Requires gold foil stamping and spot UV on black cyber duplex board. Please send sample kit.",
    sourcePage: "Hero Quote Form",
    status: "new",
  },
  {
    id: "sp-lead-1003",
    timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
    name: "Ramesh Srivastava",
    phone: "9935409812",
    email: "ramesh@kanpurlogistics.com",
    company: "Kanpur Fast Transports",
    product: "Corrugated packaging boxes",
    quantity: "10,000 pcs",
    size: "18 x 14 x 12 inches",
    message: "5-Ply heavy duty master shipping cartons for e-commerce parcel distribution.",
    sourcePage: "Navbar CTA",
    status: "contacted",
    notes: "Connected on WhatsApp. Scheduled plant visit for Saturday.",
  },
];

function ensureDb(): void {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_SEED, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error ensuring DB directory/file:", err);
  }
}

export async function getAllEnquiries(): Promise<Enquiry[]> {
  ensureDb();
  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    const data = JSON.parse(raw) as Enquiry[];
    // Sort newest first
    return data.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  } catch (error) {
    console.error("Failed reading enquiries DB:", error);
    return [];
  }
}

export async function createEnquiry(
  payload: Omit<Enquiry, "id" | "timestamp" | "status">
): Promise<Enquiry> {
  ensureDb();
  const all = await getAllEnquiries();
  const newEnquiry: Enquiry = {
    ...payload,
    id: `sp-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: new Date().toISOString(),
    status: "new",
  };

  const updated = [newEnquiry, ...all];
  fs.writeFileSync(DB_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return newEnquiry;
}

export async function updateEnquiryStatus(
  id: string,
  status: Enquiry["status"],
  notes?: string
): Promise<Enquiry | null> {
  ensureDb();
  const all = await getAllEnquiries();
  const index = all.findIndex((e) => e.id === id);
  if (index === -1) return null;

  all[index].status = status;
  if (notes !== undefined) {
    all[index].notes = notes;
  }

  fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2), "utf-8");
  return all[index];
}

export async function deleteEnquiry(id: string): Promise<boolean> {
  ensureDb();
  const all = await getAllEnquiries();
  const filtered = all.filter((e) => e.id !== id);
  if (filtered.length === all.length) return false;

  fs.writeFileSync(DB_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

