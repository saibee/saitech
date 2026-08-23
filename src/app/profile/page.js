"use client";
import { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { User, Mail, Save, LogOut, ShieldCheck } from "lucide-react";
import Link from "next/link";

function MockProfile() {
  const [form, setForm] = useState({ name: "Saibal Biswas", email: "hello@saitech.studio", bio: "Senior Team Lead — Frontend Engineering. 25+ yrs craft." });
  const [saved, setSaved] = useState(false);
  const [avatar, setAvatar] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80");

  function handleSave(e) {
    e.preventDefault();
    localStorage.setItem("saitech.profile", JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  useEffect(() => {
    const raw = localStorage.getItem("saitech.profile");
    if (raw) try { setForm(JSON.parse(raw)); } catch {}
    const av = localStorage.getItem("saitech.avatar");
    if (av) setAvatar(av);
  }, []);

  function handleAvatar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatar(url);
    // persist as data url would be heavy; keep object url for demo
    localStorage.setItem("saitech.avatar", url);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="max-w-3xl">
        <p className="text-xs tracking-widest text-muted-foreground">PROFILE • DEMO MODE (Clerk not configured)</p>
        <h1 className="text-3xl font-semibold tracking-tight mt-2">Your profile</h1>
        <p className="text-sm text-muted-foreground mt-2">Clerk not configured — showing local demo with avatar & editable info. Add <code className="px-1 py-0.5 rounded border bg-muted">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> to enable real auth.</p>
        <Link href="/sign-in" className="inline-flex mt-3 text-sm underline">Go to sign-in (when Clerk configured)</Link>
      </div>

      <div className="mt-8 grid md:grid-cols-[320px_1fr] gap-6">
        <div className="rounded-[24px] border bg-background p-6 text-center">
          <div className="relative mx-auto h-28 w-28 rounded-full overflow-hidden border-4 border-muted">
            <img src={avatar} alt="avatar" className="h-full w-full object-cover" />
          </div>
          <label className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border bg-muted/50 cursor-pointer hover:bg-muted">
            Change avatar
            <input type="file" accept="image/*" className="hidden" onChange={handleAvatar} />
          </label>
          <p className="font-medium mt-4">{form.name}</p>
          <p className="text-xs text-muted-foreground">{form.email}</p>
          <p className="text-xs text-muted-foreground mt-3">Avatar updates locally • persists in localStorage</p>
        </div>

        <form onSubmit={handleSave} className="rounded-[24px] border bg-background p-6">
          <h2 className="font-medium flex items-center gap-2"><User size={16}/> Edit profile</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Full name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-full border px-4 py-3 text-sm bg-background" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-full border px-4 py-3 text-sm bg-background" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Bio</label>
              <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} className="mt-1 w-full rounded-2xl border px-4 py-3 text-sm bg-background resize-none" />
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium"><Save size={16}/> Save changes</button>
            {saved && <span className="ml-3 text-sm text-emerald-600">Saved ✓</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const { isLoaded, isSignedIn, user } = hasClerk ? useUser() : { isLoaded: true, isSignedIn: false, user: null };
  const clerk = hasClerk ? useClerk() : null;
  const [edit, setEdit] = useState({ firstName: "", lastName: "" });
  const [saved, setSaved] = useState("");

  useEffect(() => {
    if (user) setEdit({ firstName: user.firstName || "", lastName: user.lastName || "" });
  }, [user]);

  if (!hasClerk) return <MockProfile />;

  if (!isLoaded) return <div className="mx-auto max-w-6xl px-5 py-20 text-sm text-muted-foreground">Loading...</div>;

  if (!isSignedIn) {
    return (
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-16 text-center">
        <ShieldCheck className="mx-auto" />
        <h1 className="text-2xl font-semibold mt-3">Sign in to view your profile</h1>
        <p className="text-sm text-muted-foreground mt-2">Authentication powered by Clerk.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/sign-in" className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm">Sign in</Link>
          <Link href="/sign-up" className="px-5 py-2.5 rounded-full border text-sm">Create account</Link>
        </div>
      </div>
    );
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await user.update({ firstName: edit.firstName, lastName: edit.lastName });
      setSaved("Profile updated ✓");
      setTimeout(() => setSaved(""), 2000);
    } catch (err) {
      setSaved(err.errors?.[0]?.message || "Failed to update");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
      <p className="text-sm text-muted-foreground mt-1">Manage your avatar and info via Clerk.</p>

      <div className="mt-8 grid md:grid-cols-[320px_1fr] gap-6">
        <div className="rounded-[24px] border bg-background p-6 text-center">
          <img src={user.imageUrl} alt="avatar" className="h-28 w-28 rounded-full mx-auto object-cover border-4 border-muted" />
          <p className="font-medium mt-4">{user.fullName || user.primaryEmailAddress?.emailAddress}</p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1"><Mail size={12}/>{user.primaryEmailAddress?.emailAddress}</p>
          <button onClick={() => clerk.openUserProfile()} className="mt-4 text-xs px-3 py-1.5 rounded-full border hover:bg-muted">Manage avatar in Clerk →</button>
          <button onClick={() => clerk.signOut()} className="mt-3 mx-auto flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"><LogOut size={12}/> Sign out</button>
        </div>

        <form onSubmit={handleUpdate} className="rounded-[24px] border bg-background p-6">
          <h2 className="font-medium">Edit info</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">First name</label>
              <input value={edit.firstName} onChange={(e) => setEdit({ ...edit, firstName: e.target.value })} className="mt-1 w-full rounded-full border px-4 py-3 text-sm bg-background" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Last name</label>
              <input value={edit.lastName} onChange={(e) => setEdit({ ...edit, lastName: e.target.value })} className="mt-1 w-full rounded-full border px-4 py-3 text-sm bg-background" />
            </div>
          </div>
          <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium"><Save size={16}/> Save</button>
          {saved && <span className="ml-3 text-sm">{saved}</span>}
          <p className="text-xs text-muted-foreground mt-4">Avatar & email management handled by Clerk UserButton / UserProfile for security.</p>
        </form>
      </div>
    </div>
  );
}
