import Link from "next/link";
import { Code2, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold tracking-tight text-primary">Saibal Biswas</p>
            <p className="text-sm text-muted-foreground mt-1">Senior Team Lead – Development @ EVERSANA</p>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm">25+ years across Post-production, Print & IT. 15+ years in frontend engineering — React, Next.js, Sitecore, Magnolia CMS.</p>
            <div className="flex gap-2 mt-4">
              <a href="https://github.com/saibee/saitech" target="_blank" className="h-9 w-9 grid place-items-center rounded-full border bg-primary text-background hover:bg-foreground hover:text-background transition"><Code2 size={16} /></a>
              <a href="https://linkedin.com" target="_blank" className="h-9 w-9 grid place-items-center rounded-full border bg-primary text-background hover:bg-foreground hover:text-background transition"><ExternalLink size={16} /></a>
              <a href="mailto:hello@saitech.studio" className="h-9 w-9 grid place-items-center rounded-full border bg-primary text-background hover:bg-foreground hover:text-background transition"><Mail size={16} /></a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Explore</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground">About</Link>
              <Link href="/experience" className="hover:text-foreground">Experience</Link>
              <Link href="/projects" className="hover:text-foreground">Projects</Link>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <Link href="/contact" className="hover:text-foreground">Contact</Link>
              <Link href="/profile" className="hover:text-foreground">Profile</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Availability</p>
            <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5"><MapPin size={14} /> Pune, India — remote with US/EU clients</p>
            <p className="text-sm text-muted-foreground mt-1">Open to enterprise frontend leadership & architecture reviews.</p>
            <Link href="/contact" className="inline-flex mt-4 px-4 py-2 rounded-full bg-primary text-background text-sm font-medium">Let&apos;s talk →</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Saitech Studio. Crafted with Next.js, Tailwind & Clerk.</span>
          <span>Deployed on Vercel • CI/CD via GitHub Actions</span>
        </div>
      </div>
    </footer>
  );
}
