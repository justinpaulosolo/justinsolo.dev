import Link from "next/link";
import Badge from "./components/badge";
import { ProjectCard } from "./components/project-card";
import { getBlogPosts } from "./lib/blog";

export default function Home() {
  let posts = getBlogPosts();
  return (
    <section className="container space-y-8">
      <div className="mt-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          👋 Hello there.
        </h1>
        <p>
          I&apos;m{" "}
          <strong className="text-pretty font-semibold text-black dark:text-white">
            Justin
          </strong>
          , a full-stack developer passionate about creating scalable and
          efficient web applications.
        </p>
        <div className="flex gap-2">
          {/*Github Link*/}
          <Badge href="https://github.com/justinpaulosolo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              className="stroke-neutral-700 dark:stroke-neutral-300"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 20.027c-3 .973-5.5 0-7-3"
              />
            </svg>
          </Badge>
          {/*LinkedIn Link*/}
          <Badge href="https://linkedin.com/justinpaulosolo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              strokeWidth="1.5"
              className="stroke-neutral-700 dark:stroke-neutral-300"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5ZM7 17v-7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
              />
            </svg>
          </Badge>
          {/*Mail Link*/}
          <Badge href="mailto: justinpaulosolo@outlook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              strokeWidth="1.5"
              className="stroke-neutral-700 dark:stroke-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7 9 5 3.5L17 9"
              />
              <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            </svg>
          </Badge>
        </div>
      </div>
      <section className="space-y-2">
        <h2 className="text-sm font-light tracking-wide text-neutral-700 dark:text-neutral-200">
          EXPERIENCE
        </h2>
        <div className="space-y-1">
          <h3 className="font-bold text-black dark:text-white">Aquifer</h3>
          <p className="text-sm font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
            Full Stack Developer
          </p>
          <p className="text-sm">
            Developed user authentication and authorization systems, utilizing
            claims-based security protocols. Technologies: ASP.NET, ADO.NET,
            React, SQL Server
          </p>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-sm font-light tracking-wide text-neutral-700 dark:text-neutral-200">
          RECENT PROJECTS
        </h2>
        <div className="-mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard
            technologies={["Next.js", "Tailwind", "MDX"]}
            title="JustinSolo.dev"
            description="My personal portfolio website built with Next.js and Tailwind, blog using MDX."
            link="https://justinsolo.dev"
          />
          <ProjectCard
            technologies={[
              "ASP.NET",
              "EF Core",
              "React",
              "Typescript",
              "SQL Server",
            ]}
            title="Crispy Happiness"
            link="https://github.com/justinpaulosolo/CalorieTracker"
            description="Online platform to track and set fitness goals."
          />
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-sm font-light tracking-wide text-neutral-700 dark:text-neutral-200">
          Featured Blog Posts
        </h2>
        <div className="flex flex-col space-y-3">
          {posts.map((post) => (
            <Link
              className="flex flex-col space-y-1"
              key={post?.slug}
              href={`/blog/${post?.slug}`}
            >
              <h2 className="text-xl font-bold">{post?.title}</h2>
              <p className="text-sm">{post?.description}</p>
              <dl className="text-xs tracking-wide">
                <time>{post?.date}</time>
              </dl>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
