import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticProps } from "next";

import { Button } from "../../components/Button";
import { ProjectLayout } from "@/components/layouts/ProjectLayout";

const PostPage = ({ frontmatter: { title }, mdxSource }: any) => {
  return (
    <ProjectLayout post={{ frontmatter: { title } }}>
      <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
    </ProjectLayout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("projects"));
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
    path.join("projects", slug + ".mdx"),
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
