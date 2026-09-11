import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata = { title: "Blog — Saibal Biswas" };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-6 py-10">
      <p className="text-xs tracking-widest text-muted-foreground">BLOG</p>
      <h1 className="text-3xl font-semibold tracking-tight mt-2 text-primary">Writing — engineering, leadership, craft</h1>
      <p className="text-sm text-muted-foreground mt-2">Practical notes from 15 years of frontend + enterprise platforms.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[22px] border bg-background overflow-hidden hover:shadow-lg transition">
            <div className="aspect-[16/10] overflow-hidden bg-muted"><img src={post.image} alt="" className="h-full w-full object-cover group-hover:scale-[1.03] transition" /></div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => <span key={t} className="text-[11px] px-2 py-1 rounded-full border bg-primary text-primary-foreground">{t}</span>)}
              </div>
              <p className="text-xs text-muted-foreground mt-3">{post.date} • {post.read}</p>
              <h3 className="font-medium mt-1 leading-tight group-hover:underline text-primary">{post.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs font-medium mt-3 inline-block">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
