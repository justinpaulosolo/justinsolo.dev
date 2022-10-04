import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticProps } from "next";

import { Button } from "../../components/Button";
import { BlogLayout } from "../../components/layouts/BlogLayout";

const PostPage = ({ frontmatter: { title }, mdxSource }: any) => {
  return (
    <BlogLayout post={{ frontmatter: { title } }}>
      <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
    </BlogLayout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
