import { PropsWithChildren, Suspense } from "react";
import { Container } from "@/components/Container";

export function ProjectLayout({
  children,
  post,
}: PropsWithChildren<{ post: any }>) {
  return (
    <Container title={post.frontmatter.title}>
      <article>
        <Suspense fallback={null}>
          <div className="prose mt-4 mb-8 w-full max-w-none dark:prose-dark">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
