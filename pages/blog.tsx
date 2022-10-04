import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/Container";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Post } from "@/lib/types";

export default function Blog({ posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <Container title="Blog - Justin Solo">
      <div className="flex h-full w-full flex-col">
        <h1 className="text-6xl font-bold">Blog</h1>
        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:flex-wrap ">
          {posts.map((post, index) => (
            <BlogPostCard blog={post} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      frontmatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
