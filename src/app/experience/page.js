import { experiences } from "@/lib/data";

export const metadata = { title: "Experience — Saibal Biswas" };

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="max-w-3xl">
        <p className="text-xs tracking-widest text-muted-foreground">EXPERIENCE • 1995 — PRESENT</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-primary">30 years of shipping, leading, learning.</h1>
        <p className="text-muted-foreground mt-3 leading-6">From desktop publishing operator to senior team lead — a timeline of crafts, teams and platforms.</p>
      </div>

      <div className="mt-10 relative">
        <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-border hidden sm:block" />
        <div className="space-y-6">
          {experiences.map((e, i) => (
            <div key={i} className="relative flex gap-4 sm:gap-6">
              <div className="hidden sm:grid h-8 w-8 rounded-full bg-primary text-background place-items-center text-[10px] font-bold mt-1 shrink-0 z-10">
                {String(9 - i).padStart(2, "0")}
              </div>
              <div className="flex-1 rounded-[20px] border bg-background p-5 md:p-6 hover:shadow-md transition">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground">{e.period}</p>
                    <h3 className="font-semibold mt-1">{e.company} <span className="font-normal text-muted-foreground text-primary">• {e.role}</span></h3>
                    <p className="text-xs text-muted-foreground mt-1">{e.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-w-[270px] justify-end">
                    {e.tags.map((t) => <span key={t} className="text-[11px] px-2 py-1 rounded-full border bg-primary text-background">{t}</span>)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-6">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border bg-muted/30 p-6 text-sm text-muted-foreground">
        <span className="text-foreground font-medium">Note:</span> Full résumé and references available on request. Let&apos;s talk about how this experience maps to your platform goals — <a href="/contact" className="underline">contact me</a>.
      </div>
    </div>
  );
}
