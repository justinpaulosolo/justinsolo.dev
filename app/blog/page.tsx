import Link from "next/link";
import { getBlogPosts } from "../lib/blog";

export default function BlogPage() {
  let post = getBlogPosts();
  console.log(post);
  return (
    <section className="container">
      <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
        Blog
      </h1>
      {post.map((post) => (
        <Link key={post?.slug} href={`/blog/${post?.slug}`}>
          <h2 className="text-bold">{post?.title}</h2>
          <p className="text-xs">{post?.description}</p>
          <p className="text-sm">{post?.date}</p>
        </Link>
      ))}
    </section>
  );
}
