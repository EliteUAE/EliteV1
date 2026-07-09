import React, { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Paperclip, X } from "lucide-react";

// Elite-CRM's public careers endpoint (see src/app/api/careers/route.ts in Elite-CRM).
// No API key required — the route validates only fullName + email server-side.
const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || "https://crm.elitepartnersus.com";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB — matches the server-side limit
const ALLOWED_RESUME_TYPES = [".pdf", ".doc", ".docx"];

const defaultForm = { fullName: "", email: "", phone: "", role: "", linkedin: "", experience: "", notes: "" };

export default function ApplicationForm() {
  const [form, setForm] = useState(defaultForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  const field = "w-full bg-elevated border border-white/[0.07] rounded-xl px-4 py-3 text-platinum text-[14px] placeholder:text-[#8A8899]/50 focus:outline-none focus:border-electric/40 focus:ring-1 focus:ring-electric/20 transition-all duration-200 font-light";

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = "." + file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_RESUME_TYPES.includes(ext)) {
      setErrorMsg("Resume must be a PDF or Word document (.pdf, .doc, .docx).");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setErrorMsg("Resume file is too large — please keep it under 5MB.");
      e.target.value = "";
      return;
    }
    setErrorMsg("");
    setResumeFile(file);
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const payload = new FormData();
      payload.append("fullName", form.fullName);
      payload.append("email", form.email);
      if (form.phone) payload.append("phone", form.phone);
      payload.append("field", form.role || "General Application");
      if (form.linkedin) payload.append("linkedin", form.linkedin);
      if (form.experience) payload.append("experience", form.experience);
      if (form.notes) payload.append("notes", form.notes);
      if (resumeFile) payload.append("resume", resumeFile);

      const res = await fetch(`${CRM_API_URL}/api/careers`, {
        method: "POST",
        body: payload,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Couldn't submit your application. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="glass-brand rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto" style={{ border: "1px solid rgba(46,99,255,0.15)" }}>
        <div className="w-16 h-16 rounded-full glass-brand flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-electric" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-platinum text-2xl italic mb-2">Application Received</h3>
        <p className="text-[14px] text-[#8A8899] font-light">
          Thanks for applying — our team reviews every application and will reach out if it's a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-brand rounded-3xl p-8 md:p-12 max-w-2xl mx-auto space-y-5" style={{ border: "1px solid rgba(46,99,255,0.15)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Full Name *</label>
          <input required className={field} placeholder="Your full name"
            value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div>
          <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Email *</label>
          <input required type="email" className={field} placeholder="you@example.com"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Phone</label>
          <input type="tel" className={field} placeholder="+1 (555) 000-0000"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Role or Department You're Interested In</label>
          <input className={field} placeholder="e.g. Contact Center, Web Development…"
            value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">LinkedIn</label>
        <input className={field} placeholder="linkedin.com/in/you"
          value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
      </div>
      <div>
        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Relevant Experience</label>
        <textarea rows={3} className={`${field} resize-none`} placeholder="Walk us through your relevant roles, years of experience, and what you worked on…"
          value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} />
      </div>
      <div>
        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Cover Message</label>
        <textarea rows={4} className={`${field} resize-none`} placeholder="Tell us why you're a great fit…"
          value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
      </div>

      <div>
        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Resume / CV</label>
        {resumeFile ? (
          <div className="flex items-center justify-between gap-3 bg-elevated border border-electric/30 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <Paperclip size={15} className="text-electric shrink-0" strokeWidth={2} />
              <span className="text-[14px] text-platinum truncate">{resumeFile.name}</span>
              <span className="text-[12px] text-[#8A8899] shrink-0">({(resumeFile.size / 1024 / 1024).toFixed(1)}MB)</span>
            </div>
            <button type="button" onClick={removeFile} className="shrink-0 text-[#8A8899] hover:text-platinum transition-colors cursor-pointer">
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className={`${field} flex items-center gap-2.5 cursor-pointer hover:border-electric/30 text-[#8A8899]/70`}>
            <Paperclip size={15} strokeWidth={2} />
            <span>Attach your resume — PDF or Word, up to 5MB</span>
            <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
          </label>
        )}
      </div>

      {(status === "error" || errorMsg) && (
        <div className="flex items-start gap-2 text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
          <AlertCircle size={15} className="shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button type="submit" disabled={status === "sending"}
        className="btn-primary w-full text-[14px] py-4 rounded-xl mt-2 cursor-pointer disabled:opacity-60">
        <span className="flex items-center justify-center gap-2">
          {status === "sending" ? (
            <><div className="w-4 h-4 rounded-full border-2 border-void/30 border-t-void animate-spin" /> Submitting…</>
          ) : (
            <><Send size={16} strokeWidth={2} /> Submit Application</>
          )}
        </span>
      </button>
    </form>
  );
}
