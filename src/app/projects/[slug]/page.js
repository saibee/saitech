import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Layers } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Projects` : "Project" };
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="mx-auto max-w-6xl px-5 py-20">Not found</div>;

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-8">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm hover:underline"><ArrowLeft size={14}/> Back to projects</Link>

      <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8">
        <div className="rounded-[24px] overflow-hidden border bg-muted aspect-[16/11] relative">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute bottom-3 left-3 flex gap-2">
            {project.highlights.map((h) => (
              <span key={h} className="text-xs px-2.5 py-1.5 rounded-full bg-background/90 backdrop-blur border">{h}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground flex items-center gap-2"><Layers size={12}/>{project.category}</p>
          <h1 className="text-3xl font-semibold tracking-tight mt-2 leading-tight">{project.title}</h1>
          <p className="text-sm text-muted-foreground mt-3 leading-6">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => <span key={s} className="text-xs px-3 py-1.5 rounded-full border bg-muted/50">{s}</span>)}
          </div>

          <div className="mt-6 flex gap-3">
            <a href={project.link} target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium">Visit live <ArrowUpRight size={14}/></a>
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-sm"><Calendar size={14}/>{project.year}</span>
          </div>

          <div className="mt-8 rounded-2xl border bg-muted/20 p-5">
            <p className="text-sm font-medium">Role & impact</p>
            <p className="text-sm text-muted-foreground mt-1 leading-6">
              Led architecture, coordinated 3 concurrent streams, partnered with US/EU stakeholders. Focus on performance, author experience and governance.
            </p>
          </div>
        </div>
      </div>

      {/* more images */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl overflow-hidden border aspect-[16/10] bg-muted"><img src={project.thumb} alt="" className="h-full w-full object-cover" /></div>
        <div className="rounded-2xl overflow-hidden border aspect-[16/10] bg-muted"><img src={project.image} alt="" className="h-full w-full object-cover" /></div>
      </div>
    </div>
  );
}
