import { PropsWithChildren, Suspense } from "react";
import Container from "../Container";

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: any }>) {
  return (
    <Container title={post.frontmatter.title}>
      <article>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          {post.frontmatter.title}
        </h1>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose max-w-none mb-8">{children}</div>
        </Suspense>
      </article>
    </Container>
  );
}
