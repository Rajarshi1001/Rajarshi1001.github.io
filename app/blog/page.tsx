import type { Metadata } from 'next';
import Link from 'next/link';
import Tag from '@/components/Tag';
import { getAllPosts } from '@/lib/posts';

// The site name is appended by the title template in app/layout.tsx.
export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on machine learning models that had to survive contact with production.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-paper-100/40">git log --all</p>
      <h1 className="mt-3 text-3xl font-semibold text-paper-50 sm:text-4xl">Writing</h1>
      <p className="mt-3 max-w-xl text-paper-100/60">
        Notes on models that had to survive contact with production, mostly written so future-me
        remembers the reasoning.
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-ink-800 bg-ink-900/40 p-6 transition-colors hover:border-mint-400/40"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-paper-100/40">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-paper-50 group-hover:text-mint-400">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-paper-100/65">{post.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
