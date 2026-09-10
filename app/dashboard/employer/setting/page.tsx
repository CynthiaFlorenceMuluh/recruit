
"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    position: "",
    companyWebsite: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/employer/profile")
      .then((res) => res.json())
      .then((data) => setForm((prev) => ({ ...prev, ...data })))
      .catch((err) => console.error("Error fetching profile:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/employer/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Profile updated successfully.");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error("Save error:", err);
      setMessage("Something went wrong. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Settings</h1>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
        <div>
          <label className="text-sm text-slate-500">Full Name</label>
          <input
            className="w-full border border-slate-300 rounded-lg p-3 mt-1"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">Email</label>
          <input
            className="w-full border border-slate-300 rounded-lg p-3 mt-1 bg-slate-100"
            value={form.email}
            disabled
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">Company Name</label>
          <input
            className="w-full border border-slate-300 rounded-lg p-3 mt-1"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">Position</label>
          <input
            className="w-full border border-slate-300 rounded-lg p-3 mt-1"
            value={form.position ?? ""}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">Company Website</label>
          <input
            className="w-full border border-slate-300 rounded-lg p-3 mt-1"
            value={form.companyWebsite ?? ""}
            onChange={(e) => setForm({ ...form, companyWebsite: e.target.value })}
          />
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-slate-900 hover:bg-cyan-900 text-white px-5 py-3 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        {message && <p className="text-sm text-slate-500 mt-2">{message}</p>}
      </div>
    </div>
  );
}