"use client";
import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus({ type: "success", msg: data.message || "Message sent! I'll reply within 24h." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground">CONTACT</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-2">Let&apos;s talk.</h1>
          <p className="text-muted-foreground mt-3 leading-6 text-sm">
            Enterprise platform, design system, or just saying hi — I reply within 24 hours. Prefer email? <a href="mailto:hello@saitech.studio" className="underline">hello@saitech.studio</a>
          </p>

          <div className="mt-6 rounded-2xl border bg-muted/30 p-5 space-y-3 text-sm">
            <p className="flex items-center gap-2"><MapPin size={14}/> Pune, India — remote with US/EU</p>
            <p className="flex items-center gap-2"><Mail size={14}/> hello@saitech.studio</p>
            <p className="flex items-center gap-2"><Phone size={14}/> Available on request</p>
            <p className="text-xs text-muted-foreground pt-3 border-t">Working contact form → validates, posts to <code className="px-1 py-0.5 rounded bg-background border">/api/contact</code>, shows success/error states.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[24px] border bg-background p-6 md:p-8 shadow-sm">
          <h2 className="font-medium">Send a message</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1 w-full rounded-full border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="mt-1 w-full rounded-full border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={5} className="mt-1 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 resize-none" />
            </div>

            {status.msg && (
              <div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm border ${status.type === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300" : "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20"}`}>
                {status.type === "success" ? <CheckCircle2 size={16}/> : <AlertCircle size={16}/>} {status.msg}
              </div>
            )}

            <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-3 text-sm font-medium hover:opacity-90 disabled:opacity-50">
              {loading ? "Sending..." : <><Send size={16}/> Send message</>}
            </button>
            <p className="text-xs text-center text-muted-foreground">By sending, you agree to be contacted. No spam.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
