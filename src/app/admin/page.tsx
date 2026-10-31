"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Enquiry } from "@/types";
import {
  FileSpreadsheet,
  Lock,
  Unlock,
  Search,
  Filter,
  Download,
  Trash2,
  Phone,
  MessageCircle,
  ExternalLink,
  RefreshCw,
  CheckCircle,
  Clock,
  Building,
  Eye,
  X,
  Shield,
  Layers,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [productFilter, setProductFilter] = useState<string>("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [notesInput, setNotesInput] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // Check existing session
  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          setEnquiries(json.data);
          setIsAuthenticated(true);
        }
      }
    } catch (err) {
      // Session not authenticated yet
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid password");
      }

      setIsAuthenticated(true);
      fetchEnquiries();
    } catch (err: any) {
      setAuthError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setIsAuthenticated(false);
    setPassword("");
  };

  const handleStatusChange = async (id: string, newStatus: Enquiry["status"]) => {
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedEnquiry.id,
          status: selectedEnquiry.status,
          notes: notesInput,
        }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) =>
            e.id === selectedEnquiry.id ? { ...e, notes: notesInput } : e
          )
        );
        setSelectedEnquiry((prev) => (prev ? { ...prev, notes: notesInput } : null));
      }
    } catch (err) {
      console.error("Notes save error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(null);
        }
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Filtered dataset
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      (item.company || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    const matchesProduct =
      productFilter === "all" || item.product === productFilter;

    return matchesSearch && matchesStatus && matchesProduct;
  });

  // Unique products for filter
  const productOptions = Array.from(new Set(enquiries.map((e) => e.product)));

  // If not logged in, render login card
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal-500 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-charcoal-400 border-2 border-kraft-700 rounded-2xl p-8 shadow-2xl relative">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-kraft-800 border-2 border-kraft-600 text-amberAccent flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-display font-black text-2xl uppercase tracking-tight text-paper">
              Suchi Printers Admin
            </h1>
            <p className="text-xs text-kraft-300 font-mono mt-1">
              Enter password to access customer enquiries & Excel downloads
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/60 text-red-200 text-xs">
                {authError}
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-kraft-300 font-bold mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Default: suchi1995"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-charcoal-300 border border-kraft-700 text-paper text-sm focus:border-amberAccent focus:outline-none focus:ring-1 focus:ring-amberAccent"
              />
              <p className="text-[11px] text-kraft-500 font-mono mt-1">
                Default password: <code className="text-amberAccent">suchi1995</code> (configurable in .env)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amberAccent to-amberAccent-dark hover:from-amberAccent-light hover:to-amberAccent text-charcoal-500 font-display font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              {loading ? "Authenticating..." : "Unlock Dashboard"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-kraft-800 text-center">
            <Link
              href="/"
              className="text-xs text-kraft-400 hover:text-amberAccent transition-colors"
            >
              ← Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-500 text-paper">
      {/* Top Admin Navbar */}
      <header className="bg-charcoal-400 border-b border-kraft-700 sticky top-0 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-kraft-700 border border-kraft-500 text-paper flex items-center justify-center font-display font-bold text-lg">
              SP
            </div>
            <div>
              <h1 className="font-display font-black text-xl tracking-tight text-paper uppercase">
                Suchi Printers — Admin Console
              </h1>
              <span className="text-[10px] text-kraft-400 font-mono">
                Fazalganj Kanpur Factory Unit • Lead Management
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Download Excel Button */}
            <a
              href="/api/admin/export-excel"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Download as Excel (.xlsx)</span>
            </a>

            <button
              onClick={fetchEnquiries}
              disabled={refreshing}
              className="p-2 rounded-lg bg-charcoal-300 hover:bg-charcoal-200 border border-kraft-700 text-kraft-300 hover:text-white transition-colors"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-2 rounded-lg bg-charcoal-300 hover:bg-charcoal-200 border border-kraft-700 text-kraft-300 hover:text-white text-xs font-medium transition-colors"
            >
              View Site
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg bg-charcoal-300 hover:bg-red-950/50 border border-kraft-700 hover:border-red-600 text-kraft-300 hover:text-red-300 text-xs font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Metric Summary Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-charcoal-400 border border-kraft-700 shadow-sm">
            <span className="text-xs font-mono text-kraft-400 uppercase">
              Total Submissions
            </span>
            <div className="text-3xl font-display font-bold text-paper mt-1">
              {enquiries.length}
            </div>
            <span className="text-[10px] text-kraft-500">Stored in SQLite/DB</span>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-400 border border-amberAccent/40 shadow-sm">
            <span className="text-xs font-mono text-amberAccent uppercase">
              New Inquiries
            </span>
            <div className="text-3xl font-display font-bold text-amberAccent mt-1">
              {enquiries.filter((e) => e.status === "new").length}
            </div>
            <span className="text-[10px] text-kraft-500">Requires follow-up</span>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-400 border border-kraft-700 shadow-sm">
            <span className="text-xs font-mono text-blue-400 uppercase">
              Contacted / In Discussion
            </span>
            <div className="text-3xl font-display font-bold text-blue-400 mt-1">
              {enquiries.filter((e) => e.status === "contacted").length}
            </div>
            <span className="text-[10px] text-kraft-500">In communication</span>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-400 border border-emerald-600/40 shadow-sm">
            <span className="text-xs font-mono text-emerald-400 uppercase">
              Quotes Delivered
            </span>
            <div className="text-3xl font-display font-bold text-emerald-400 mt-1">
              {enquiries.filter((e) => e.status === "quoted").length}
            </div>
            <span className="text-[10px] text-kraft-500">Awaiting PO</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-xl bg-charcoal-400 border border-kraft-700 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-12 text-kraft-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, phone, company, or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-charcoal-300 border border-kraft-700 text-paper text-xs sm:text-sm focus:border-amberAccent focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-charcoal-300 border border-kraft-700 text-xs text-paper focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">Status: New</option>
              <option value="contacted">Status: Contacted</option>
              <option value="quoted">Status: Quoted</option>
              <option value="closed">Status: Closed</option>
            </select>

            <select
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-charcoal-300 border border-kraft-700 text-xs text-paper focus:outline-none max-w-[220px]"
            >
              <option value="all">All Products</option>
              {productOptions.map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="rounded-xl border border-kraft-700 bg-charcoal-400 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-charcoal-300 border-b border-kraft-700 font-mono text-[11px] uppercase tracking-wider text-kraft-300">
                <tr>
                  <th className="p-3.5">Date & Time</th>
                  <th className="p-3.5">Client & Company</th>
                  <th className="p-3.5">Phone / Contact</th>
                  <th className="p-3.5">Product & Quantity</th>
                  <th className="p-3.5">Dimensions</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kraft-800">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-kraft-400 font-mono">
                      No matching enquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-charcoal-300/40 transition-colors"
                    >
                      {/* Date */}
                      <td className="p-3.5 whitespace-nowrap font-mono text-[11px] text-kraft-300">
                        {new Date(item.timestamp).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                      {/* Name & Company */}
                      <td className="p-3.5">
                        <div className="font-bold text-paper">{item.name}</div>
                        {item.company && (
                          <div className="text-xs text-kraft-400">{item.company}</div>
                        )}
                        {item.email && (
                          <div className="text-[11px] text-kraft-500">{item.email}</div>
                        )}
                      </td>

                      {/* Phone */}
                      <td className="p-3.5 whitespace-nowrap">
                        <div className="font-mono text-amberAccent font-bold">
                          {item.phone}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <a
                            href={`tel:${item.phone}`}
                            className="p-1 rounded bg-charcoal-300 hover:bg-charcoal-200 text-kraft-300 hover:text-white"
                            title="Call Phone"
                          >
                            <Phone className="w-3 h-3" />
                          </a>
                          <a
                            href={`https://wa.me/91${item.phone}?text=Hello%20${encodeURIComponent(item.name)},%20thank%20you%20for%20contacting%20Suchi%20Printers%20regarding%20${encodeURIComponent(item.product)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400"
                            title="Open WhatsApp"
                          >
                            <MessageCircle className="w-3 h-3" />
                          </a>
                        </div>
                      </td>

                      {/* Product */}
                      <td className="p-3.5">
                        <span className="font-semibold text-paper block">
                          {item.product}
                        </span>
                        <span className="text-[11px] font-mono text-kraft-400">
                          Qty: {item.quantity || "N/A"}
                        </span>
                      </td>

                      {/* Dimensions */}
                      <td className="p-3.5 font-mono text-xs text-kraft-300">
                        {item.size || "Custom / TBA"}
                      </td>

                      {/* Status Dropdown */}
                      <td className="p-3.5">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            handleStatusChange(
                              item.id,
                              e.target.value as Enquiry["status"]
                            )
                          }
                          className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider border focus:outline-none ${
                            item.status === "new"
                              ? "bg-amberAccent/20 text-amberAccent border-amberAccent/40"
                              : item.status === "contacted"
                              ? "bg-blue-950 text-blue-400 border-blue-600/40"
                              : item.status === "quoted"
                              ? "bg-purple-950 text-purple-400 border-purple-600/40"
                              : "bg-emerald-950 text-emerald-400 border-emerald-600/40"
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="p-3.5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedEnquiry(item);
                              setNotesInput(item.notes || "");
                            }}
                            className="p-1.5 rounded-lg bg-charcoal-300 hover:bg-charcoal-200 text-kraft-300 hover:text-white transition-colors"
                            title="View Full Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 rounded-lg bg-charcoal-300 hover:bg-red-950 text-kraft-400 hover:text-red-400 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Details & Notes Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-charcoal-300 border-2 border-kraft-600 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-400 hover:bg-charcoal-200 text-paper"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amberAccent mb-1">
              <span>ENQUIRY SPECIFICATION SHEET</span>
            </div>

            <h3 className="font-display font-black text-2xl uppercase text-paper mb-4">
              {selectedEnquiry.name}
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4 p-3 bg-charcoal-400 rounded-xl border border-kraft-800">
              <div>
                <span className="text-kraft-500 font-mono block">Phone:</span>
                <span className="font-bold text-amberAccent">
                  {selectedEnquiry.phone}
                </span>
              </div>
              <div>
                <span className="text-kraft-500 font-mono block">Email:</span>
                <span className="font-bold text-paper">
                  {selectedEnquiry.email || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-kraft-500 font-mono block">Company:</span>
                <span className="font-bold text-paper">
                  {selectedEnquiry.company || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-kraft-500 font-mono block">Source:</span>
                <span className="font-mono text-kraft-300">
                  {selectedEnquiry.sourcePage || "Direct"}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs mb-6">
              <div>
                <span className="text-kraft-400 font-mono uppercase block mb-1">
                  Product Requested:
                </span>
                <div className="p-2.5 rounded bg-charcoal-400 text-paper font-semibold border border-kraft-800">
                  {selectedEnquiry.product} (Qty: {selectedEnquiry.quantity || "N/A"})
                </div>
              </div>

              <div>
                <span className="text-kraft-400 font-mono uppercase block mb-1">
                  Dimensions (L × W × H):
                </span>
                <div className="p-2.5 rounded bg-charcoal-400 text-paper font-mono border border-kraft-800">
                  {selectedEnquiry.size || "Standard / To be discussed"}
                </div>
              </div>

              <div>
                <span className="text-kraft-400 font-mono uppercase block mb-1">
                  Client Message:
                </span>
                <div className="p-3 rounded bg-charcoal-400 text-kraft-200 border border-kraft-800 whitespace-pre-wrap">
                  {selectedEnquiry.message || "No specific message provided."}
                </div>
              </div>

              <div>
                <label className="text-kraft-400 font-mono uppercase block mb-1 font-bold">
                  Internal Factory Notes:
                </label>
                <textarea
                  rows={2}
                  value={notesInput}
                  onChange={(e) => setNotesInput(e.target.value)}
                  placeholder="Add quote amount, sample dispatch date, follow-up notes..."
                  className="w-full p-2.5 rounded bg-charcoal-400 border border-kraft-700 text-paper text-xs focus:border-amberAccent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-kraft-800">
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="px-3 py-2 rounded-lg bg-charcoal-400 hover:bg-charcoal-200 text-xs font-semibold text-paper flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amberAccent" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/91${selectedEnquiry.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-xs font-semibold text-white flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-3 py-2 rounded-lg bg-charcoal-400 text-kraft-300 text-xs"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="px-4 py-2 rounded-lg bg-amberAccent hover:bg-amberAccent-light text-charcoal-500 font-bold text-xs uppercase shadow"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

