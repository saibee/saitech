"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-5 md:px-6 h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="h-8 w-8 rounded-lg bg-foreground text-background grid place-items-center">
            <Sparkles size={16} />
          </span>
          <span className="text-[15px]">saitech<span className="font-light">.studio</span></span>
          <span className="hidden sm:inline text-xs font-normal text-muted-foreground ml-1 px-2 py-0.5 rounded-full border">25+ yrs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-full text-sm transition ${active ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 grid place-items-center rounded-full border bg-background hover:bg-muted transition"
          >
            {!mounted ? <Sun size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="hidden md:flex items-center">
            {isClerkConfigured ? (
              <>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">Sign in</button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center gap-3">
                    <Link href="/profile" className="text-sm hover:underline">Profile</Link>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </>
            ) : (
              <Link href="/profile" className="px-4 py-2 rounded-full border text-sm hover:bg-muted transition">Profile</Link>
            )}
          </div>

          <button className="md:hidden h-9 w-9 grid place-items-center rounded-full border" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`px-3 py-2 rounded-lg text-sm ${pathname === l.href ? "bg-foreground text-background" : "hover:bg-muted"}`}>
                {l.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t flex gap-2">
              {isClerkConfigured ? (
                <>
                  <SignedOut>
                    <SignInButton mode="modal"><button className="flex-1 py-2 rounded-full bg-foreground text-background text-sm">Sign in</button></SignInButton>
                  </SignedOut>
                  <SignedIn><Link href="/profile" onClick={()=>setOpen(false)} className="text-sm py-2">Profile</Link><UserButton /></SignedIn>
                </>
              ) : (
                <Link href="/profile" onClick={()=>setOpen(false)} className="flex-1 text-center py-2 rounded-full border text-sm">Profile demo</Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
