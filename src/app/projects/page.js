"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight, X, ExternalLink, Calendar, Layers, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground">PROJECTS</p>
          <h1 className="text-3xl text-primary font-semibold tracking-tight mt-2">Enterprise & Creative Works</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Click any project card to open full modal preview with high-res imagery & case details.
          </p>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.slug}
            onClick={() => setSelectedProject(p)}
            className="group rounded-[22px] border bg-background overflow-hidden hover:shadow-xl hover:shadow-black/5 transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-500"
                />
                <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full text-background bg-primary/90 backdrop-blur border">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-primary text-background">
                  {p.year}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium leading-tight group-hover:underline underline-offset-4 text-primary">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.excerpt}</p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <div className="flex flex-wrap gap-1.5 mt-2">
                {p.stack.slice(0, 3).map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-full border bg-primary text-background">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-medium pt-3 border-t">
                <span className="inline-flex items-center gap-1">Click to expand big image & details</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL ON CLICK */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] border bg-background p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full border bg-background hover:bg-muted transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded-full border bg-muted/50">{selectedProject.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> {selectedProject.year}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">{selectedProject.title}</h2>
            <p className="text-muted-foreground text-sm mt-2">{selectedProject.description}</p>

            {/* BIG IMAGE DISPLAY */}
            <div className="mt-6 rounded-[20px] overflow-hidden border bg-muted aspect-[16/9] relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {selectedProject.highlights.map((h) => (
                  <span key={h} className="text-xs px-3 py-1 rounded-full bg-background/90 backdrop-blur border font-medium">
                    ✨ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* TECH STACK & LINK */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full border bg-muted/60 font-mono">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-medium hover:bg-muted"
                >
                  Full page link <ExternalLink size={12} />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
