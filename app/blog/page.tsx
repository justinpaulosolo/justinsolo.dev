import Link from "next/link";
import { getBlogPosts } from "../lib/blog";

export default function BlogPage() {
  let post = getBlogPosts();
  return (
    <section className="container space-y-6">
      <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
        Blog
      </h1>
      <div className="flex flex-col space-y-3">
        {post.map((post) => (
          <Link
            className="flex flex-col space-y-1"
            key={post?.slug}
            href={`/blog/${post?.slug}`}
          >
            <h2 className="text-xl font-bold">{post?.title}</h2>
            <p className="text-sm">{post?.description}</p>
            <dl className="text-xs tracking-wide">
              <time>{post?.date}</time>
            </dl>
          </Link>
        ))}
      </div>
    </section>
  );
}
