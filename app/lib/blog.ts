import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import { Post } from "./types";

/*
export const getPosts = cache(async () => {
  const posts = await fs.readdir("./posts");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const pathContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(pathContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  );
});


export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post!.slug === slug);
}

*/

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const filePath = `./posts/${file}`;
    const pathContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(pathContent);

    if (data.published === false) {
      return null;
    }

    return { ...data, content: content } as Post;
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "posts"));
}
