import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Layers, Users, Sparkles, Mail, Code2, ExternalLink } from "lucide-react";
import { projects, blogPosts } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border bg-background">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for architecture reviews & leadership
                <span className="hidden sm:inline text-muted-foreground">• Pune / Remote</span>
              </div>
              <h1 className="mt-6 text-[34px] md:text-[52px] font-semibold tracking-tight leading-[0.95]">
                Frontend engineering
                <span className="block font-light text-muted-foreground">with 25 years of craft.</span>
              </h1>
              <p className="mt-5 text-[16px] md:text-lg leading-7 text-muted-foreground max-w-2xl">
                I&apos;m <span className="text-foreground font-medium">Saibal Biswas</span> — Senior Team Lead @ EVERSANA.
                15+ years in IT web development, core expertise in <span className="text-foreground">Sitecore, Magnolia CMS, React, Next.js, Node.js</span>.
                I&apos;ve led teams of 10, shipped 5+ enterprise platforms, and partnered with US & European clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {["React.js", "Next.js", "Sitecore", "Magnolia CMS", "Node.js", "AI-assisted Dev"].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full border bg-background">{s}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90">
                  View projects <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border bg-background text-sm font-medium hover:bg-muted">
                  <Mail size={16} /> Contact me
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border bg-background text-sm font-medium hover:bg-muted">
                  About <BadgeCheck size={16} />
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Users size={14} /> Managed 10 engineers</span>
                <span className="inline-flex items-center gap-1.5"><Layers size={14} /> 5+ platforms</span>
                <span className="inline-flex items-center gap-1.5"><Sparkles size={14} /> 3 concurrent projects</span>
              </div>
            </div>

            {/* portrait card */}
            <div className="relative">
              <div className="rounded-[28px] border bg-background p-3 shadow-xl shadow-black/5">
                <div className="rounded-[20px] overflow-hidden border bg-muted aspect-[4/3] relative">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Saibal portrait placeholder" className="h-full w-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-background/90 backdrop-blur p-3 border flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium leading-none">Saibal Biswas</p>
                      <p className="text-xs text-muted-foreground">Senior Team Lead • 25+ yrs</p>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-foreground text-background grid place-items-center"><Sparkles size={14} /></span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {[
                    { k: "25+", l: "Total experience" },
                    { k: "15+", l: "Frontend / IT" },
                    { k: "10", l: "Team size led" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border bg-muted/40 p-3 text-center">
                      <p className="text-lg font-semibold leading-none">{s.k}</p>
                      <p className="text-[11px] text-muted-foreground mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* floating badge */}
              <div className="hidden md:flex absolute -right-2 -top-2 rounded-full border bg-background px-3 py-1.5 text-xs shadow-lg items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> EVERSANA • Feb 2024 – Present
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED / LOGO STRIP */}
      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-6xl px-5 md:px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest text-muted-foreground">
          <span>TRUSTED BY ENTERPRISE CLIENTS — US & EUROPE</span>
          <span className="flex gap-6 font-medium text-foreground">
            <span>EVERSANA</span><span>Accenture</span><span>Sitecore</span><span>Magnolia</span><span>Vercel</span>
          </span>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 md:px-6 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Selected works</h2>
            <p className="text-sm text-muted-foreground mt-1">Thumbnails → click to open detailed case study with large imagery.</p>
          </div>
          <Link href="/projects" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:underline">All projects <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-[20px] border bg-background overflow-hidden hover:shadow-lg transition">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.thumb} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500" />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">{p.category} • {p.year}</p>
                <p className="font-medium mt-1 leading-tight">{p.title}</p>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium mt-3">View case <ArrowUpRight size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 md:px-6 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Latest writing</h2>
          <Link href="/blog" className="text-sm font-medium hover:underline inline-flex items-center gap-1">All posts <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[20px] border bg-background overflow-hidden hover:shadow-md transition">
              <div className="aspect-[16/9] bg-muted overflow-hidden"><img src={post.image} alt="" className="h-full w-full object-cover" /></div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">{post.date} • {post.read}</p>
                <p className="font-medium leading-tight mt-1">{post.title}</p>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 md:px-6 pb-16">
        <div className="rounded-[28px] border bg-foreground text-background p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Let&apos;s build something enduring</h3>
            <p className="text-sm text-white/70 mt-1 max-w-xl">Enterprise platform? Design system? Team mentorship? I bring 25 years of shipping — from print grids to edge-rendered Next.js.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-full bg-background text-foreground text-sm font-medium">Start a conversation</Link>
            <a href="https://github.com/saibee/saitech" target="_blank" className="h-11 w-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10"><Code2 size={16} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
