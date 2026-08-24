import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Blog` : "Blog" };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <div className="mx-auto max-w-3xl px-5 py-20">Not found</div>;

  return (
    <article className="mx-auto max-w-3xl px-5 md:px-0 py-8">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm hover:underline"><ArrowLeft size={14}/> Back to blog</Link>
      <div className="mt-6 rounded-[24px] overflow-hidden border aspect-[16/9] bg-muted">
        <img src={post.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full border bg-muted/50">{t}</span>)}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight mt-4 leading-tight">{post.title}</h1>
      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-3"><span className="inline-flex items-center gap-1"><Calendar size={12}/>{post.date}</span> <span className="inline-flex items-center gap-1"><Clock size={12}/>{post.read}</span></p>
      <p className="text-muted-foreground mt-3 leading-6">{post.excerpt}</p>

      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none prose-sm prose-headings:tracking-tight">
        <div className="whitespace-pre-wrap leading-7 text-sm text-muted-foreground border-t pt-6">
          {post.content}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border bg-muted/20 p-5 flex items-center justify-between">
        <p className="text-sm">Enjoyed this? Let&apos;s discuss → <Link href="/contact" className="underline">Contact</Link></p>
        <Link href="/blog" className="text-sm font-medium hover:underline">More posts</Link>
      </div>
    </article>
  );
}
