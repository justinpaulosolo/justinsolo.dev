import { CustomMDX } from "@/app/components/mdx";
import { getBlogPosts } from "@/app/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post?.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container">
      <article className="prose">
        <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
          {post?.title}
        </h1>
        <article className="prose prose-neutral dark:prose-invert">
          <CustomMDX source={post?.content} />
        </article>
      </article>
    </section>
  );
}
