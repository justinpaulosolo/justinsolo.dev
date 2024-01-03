import Image from "next/image";
import Badge from "./components/badge";

function ProjectCard({
  title,
  link,
  description,
  technologies,
}: {
  title: string;
  link?: string;
  description: string;
  technologies: string[];
}) {
  return (
    <a
      target="_blank"
      href={link}
      className="group inline-flex flex-col rounded-lg border px-3 py-4 dark:border-neutral-700"
    >
      <div className="space-y-1.5">
        <h3 className="font-semibold tracking-tight text-black dark:text-white">
          <div className="flex items-center gap-2">
            <h3>{title}</h3>
            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </h3>
        <p className="text-xs">{description}</p>
      </div>
      <div className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="inline-flex items-center text-nowrap rounded border border-neutral-200 bg-neutral-50 px-1 py-0 text-[10px] font-semibold  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <section className="container space-y-8">
      <div className="mt-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          👋 Hello there.
        </h1>
        <p>
          I&apos;m{" "}
          <strong className="text-pretty text-black dark:text-white">
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
          <h1 className="text-xl font-bold text-black dark:text-white">
            Aquifer
          </h1>
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
