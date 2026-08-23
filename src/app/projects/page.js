import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Projects — Saibal Biswas" };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground">PROJECTS</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-2">Works — thumbnail → detail</h1>
          <p className="text-sm text-muted-foreground mt-2">Click any card to open large imagery + case study. Modern, filterable, elegant.</p>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-[22px] border bg-background overflow-hidden hover:shadow-xl hover:shadow-black/5 transition">
            <div className="aspect-[16/10] overflow-hidden bg-muted relative">
              <img src={p.thumb} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-500" />
              <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full bg-background/90 backdrop-blur border">{p.category}</span>
              <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-foreground text-background">{p.year}</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium leading-tight group-hover:underline underline-offset-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => <span key={s} className="text-[11px] px-2 py-1 rounded-full border bg-muted/50">{s}</span>)}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium mt-3">Open case <ArrowUpRight size={12} /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
