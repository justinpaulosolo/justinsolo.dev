import Image from "next/image";
import Badge from "./components/badge";
import { ProjectCard } from "./components/project-card";

export default function Home() {
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
          {/* Fix Icons for dark mode */}
          <Badge href="https://github.com/justinpaulosolo">
            <Image
              alt="Github logomark"
              src="/github-logo.svg"
              width="20"
              height="20"
            />
          </Badge>
          <Badge href="https://linkedin.com/justinpaulosolo">
            <Image
              alt="LinkedIn logomark"
              src="/linkedin-logo.svg"
              width="20"
              height="20"
            />
          </Badge>
          <Badge href="mailto: justinpaulosolo@outlook.com">
            <Image
              alt="Email logomark"
              src="/email-logo.svg"
              width="20"
              height="20"
            />
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
            title="Cripsy Happiness"
            link="https://github.com/justinpaulosolo/CalorieTracker"
            description="Online platform to track and set fitness goals."
          />
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-pretty text-sm font-light tracking-wide text-neutral-700 dark:text-neutral-200">
          FEATURED BLOG POSTS
        </h2>
      </section>
    </section>
  );
}
