import { ProjectCard } from "../components/project-card";

export default function ProjectsPage() {
  return (
    <section className="container space-y-6">
      <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
        Projects
      </h1>
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
        <ProjectCard
          isActive={false}
          technologies={[
            "ASP.NET",
            "EF Core",
            "React",
            "Typescript",
            "SQL Server",
          ]}
          title="Rate My Bootcamp"
          link="https://github.com/justinpaulosolo/rate-my-bootcamp-client"
          description="Web platform to rate and review coding bootcamps."
        />
      </div>
    </section>
  );
}
