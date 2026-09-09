import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Tag from '@/components/Tag';
import { getAllSlugs, getPostBySlug } from '@/lib/posts';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// No `title` here — the tab title is fixed in app/layout.tsx.
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  return {
    description: post.summary,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="font-mono text-xs text-paper-100/45 hover:text-mint-400">
        ← back to git log
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-paper-100/40">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h1 className="mt-3 text-3xl font-semibold text-paper-50 sm:text-4xl">{post.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* `prose`, not `prose-invert` — the DEFAULT typography colors in
          tailwind.config.ts already read the same theme variables as the rest
          of the site, so this repaints for light/dark on its own. */}
      <article className="prose mt-10 max-w-none prose-headings:font-sans prose-headings:font-semibold prose-p:leading-relaxed prose-a:no-underline prose-a:border-b prose-a:border-mint-400">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
