import Link from "next/link";
import { Post } from "@/lib/types";

export function BlogPostCard({ blog }: { blog: Post }) {
  const css = { width: "100%", height: "200px" };
  console.log(blog);
  return (
    <Link href={"/blog/" + blog.slug}>
      <div className="tansform w-full rounded-lg border border-gray-200 bg-white transition-all hover:scale-[1.05] hover:cursor-pointer dark:border-neutral-800 dark:bg-neutral-900 md:max-w-[350px] ">
        <div className="p-5">
          <Link href={"/blog/" + blog.slug} passHref>
            <a>
              <h5 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {blog.frontmatter.title}
              </h5>
            </a>
          </Link>
          <p className="mb-2 tracking-wider text-neutral-800 dark:text-neutral-300">
            {blog.frontmatter.date}
          </p>
          <p className="mb-3 font-normal text-neutral-700 dark:text-neutral-300">
            {blog.frontmatter.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
