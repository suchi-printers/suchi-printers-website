import * as XLSX from "xlsx";
import { Enquiry } from "@/types";

export function generateEnquiriesExcelBuffer(enquiries: Enquiry[]): Buffer {
  // Transform records into clean tabular layout
  const rows = enquiries.map((item, index) => ({
    "S.No": index + 1,
    "Date & Time": new Date(item.timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    "Full Name": item.name,
    "Phone (WhatsApp)": item.phone,
    "Email Address": item.email || "N/A",
    "Company / Brand": item.company || "N/A",
    "Product Required": item.product,
    "Approx Quantity": item.quantity || "Not specified",
    "Box Dimensions": item.size || "Standard / Custom",
    "Client Message": item.message || "-",
    "Source Section": item.sourcePage || "Direct",
    "Lead Status": item.status.toUpperCase(),
    "Internal Notes": item.notes || "-",
    "Enquiry ID": item.id,
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  // Set column widths for readability
  worksheet["!cols"] = [
    { wch: 6 },  // S.No
    { wch: 20 }, // Date
    { wch: 22 }, // Name
    { wch: 16 }, // Phone
    { wch: 24 }, // Email
    { wch: 25 }, // Company
    { wch: 28 }, // Product
    { wch: 16 }, // Quantity
    { wch: 20 }, // Dimensions
    { wch: 35 }, // Message
    { wch: 18 }, // Source
    { wch: 14 }, // Status
    { wch: 25 }, // Notes
    { wch: 24 }, // ID
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Suchi_Printers_Enquiries");

  // Output as XLSX Buffer
  const buffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });

  return buffer;
}

