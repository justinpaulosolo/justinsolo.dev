import { PropsWithChildren, Suspense } from "react";
import { Container } from "@/components/Container";

export function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: any }>) {
  return (
    <Container title={post.frontmatter.title}>
      <article>
        <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
          {post.frontmatter.title}
        </h1>
        <Suspense fallback={null}>
          <div className="prose mt-4 mb-8 w-full max-w-none">{children}</div>
        </Suspense>
      </article>
    </Container>
  );
}
