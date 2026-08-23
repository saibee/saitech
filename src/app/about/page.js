import { skills } from "@/lib/data";
import { Award, Briefcase, Heart, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "About — Saibal Biswas" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="max-w-3xl">
        <p className="text-xs tracking-widest text-muted-foreground">ABOUT</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">Professional & personal — the long arc.</h1>
        <p className="text-muted-foreground mt-4 leading-7">
          Overall <span className="text-foreground font-medium">25+ years</span> across Post production, Print and IT (web design & development)
          with <span className="text-foreground font-medium">15+ years focused on frontend engineering</span>. Core expertise in
          <span className="text-foreground"> Sitecore, Magnolia CMS, React.js, Next.js, JavaScript, Git, Node.js</span> on enterprise web platforms.
          I specialize in <span className="text-foreground">Agile delivery, hiring/interviewing & mentoring, architecture reviews, and AI-assisted development</span>.
          I&apos;ve managed teams of up to <span className="text-foreground">10 engineers</span>, delivered <span className="text-foreground">5+ enterprise platforms</span>,
          coordinated <span className="text-foreground">3 concurrent projects</span>, and partnered with US & European clients while overseeing resource planning and offshore coordination.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-10">
        <div className="rounded-[24px] border bg-background p-6 md:p-8">
          <h2 className="font-semibold flex items-center gap-2"><Briefcase size={16}/> Professional snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>• <span className="text-foreground">Leadership:</span> Team Lead / Senior Team Lead since 2015 — hiring, mentoring, sprint planning, stakeholder management.</li>
            <li>• <span className="text-foreground">Enterprise focus:</span> Headless CMS (Sitecore XM Cloud, Magnolia), design systems, personalization, edge & ISR on Vercel.</li>
            <li>• <span className="text-foreground">Delivery:</span> Agile, offshore coordination, resource planning, architecture reviews — 12-market rollout experience.</li>
            <li>• <span className="text-foreground">AI-assisted:</span> Building LLM workflows for content ops with human-in-loop governance.</li>
            <li>• <span className="text-foreground">Collaboration:</span> Daily work with US/EU product, design and backend teams — bridging time zones and expectations.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/experience" className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium">See full timeline →</Link>
            <Link href="/projects" className="px-4 py-2 rounded-full border text-sm font-medium hover:bg-muted">View projects</Link>
          </div>
        </div>

        <div className="rounded-[24px] border bg-muted/30 p-6 md:p-8">
          <h2 className="font-semibold flex items-center gap-2"><Heart size={16}/> Personal</h2>
          <p className="text-sm text-muted-foreground mt-3 leading-6">
            I started in <span className="text-foreground">print (DTP) & 3D post-production</span> in the mid-90s — laying out Stardust magazine and animating broadcast graphics.
            That decade taught me grid, light, and patience. The web taught me systems. Today I love bridging the two: elegant UI with enterprise-grade reliability.
          </p>
          <p className="text-sm text-muted-foreground mt-3 leading-6">
            Outside work: exploring design history, mentoring early-career designers/developers, and experimenting with AI as a creative partner — not a replacement.
          </p>
          <div className="mt-6 rounded-2xl border bg-background p-4 flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">Based in Pune, India</p>
              <p className="text-xs text-muted-foreground">Working with global teams since 2011</p>
            </div>
            <span className="ml-auto text-xs px-2 py-1 rounded-full border bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">Open to connect</span>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        {skills.map((g) => (
          <div key={g.group} className="rounded-2xl border bg-background p-5">
            <p className="text-xs tracking-widest text-muted-foreground">{g.group.toUpperCase()}</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {g.items.map((i) => <li key={i} className="flex gap-2"><span className="text-muted-foreground">—</span> {i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border bg-foreground text-background p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="text-sm flex items-center gap-2"><Sparkles size={16}/> Fun fact: I&apos;ve shipped work on QuarkXPress, Maya, Flash, and Next.js — same obsession: clarity.</p>
        <Link href="/contact" className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium">Say hello</Link>
      </div>
    </div>
  );
}
