function SocialCard({ title, href }: { title: string; href: string }) {
  return (
    <div className="auto group flex w-full">
      <a
        target="_blank"
        href={href}
        className="flex w-full items-center justify-between gap-2 text-nowrap rounded border border-neutral-200 p-1.5 font-medium text-black md:gap-0 dark:border-neutral-700 dark:text-white"
      >
        <p>{title}</p>
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
      </a>
    </div>
  );
}

function Experience({
  position,
  company,
  date,
}: {
  position: string;
  company: string;
  date: string;
}) {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-medium text-black dark:text-white">{position}</h3>
        <p className="text-sm text-neutral-500">{company}</p>
      </div>
      <p className="font-medium">{date}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="container space-y-6">
      <div className="space-y-6">
        <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
          About Me.
        </h1>
        <div>
          <div className="grid grid-cols-6 gap-y-12">
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              about
            </h2>
            <div className="col-span-4 space-y-6 text-pretty">
              <p>
                I&apos;m a full-stack JavaScript developer obsessed with
                crafting positive and accessible web experiences. Experience in
                React, NEXT.js, Blazor, and ASP.NET, I thrive on solving
                problems and exceeding expectations. I&apos;m always learning,
                always iterating, and always striving to make the web a more
                welcoming and engaging place.
              </p>
              <p>
                In my free time, you&apos;ll find me contributing to open source
                projects, building computers, or conquering epic hikes - both
                adventures that fuel my creativity and problem-solving skills.
              </p>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              experience
            </h2>
            <div className="col-span-4 space-y-6">
              <Experience
                position="Full Stack Developer"
                company="Aquifer"
                date="2022"
              />
              <Experience
                position="PACT Seaman"
                company="United States Navy"
                date="2017-2019"
              />
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              connect
            </h2>
            <div className="col-span-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <SocialCard
                title="LinkedIn"
                href="https://linkedin.com/justinpaulosolo"
              />
              <SocialCard
                title="Github"
                href="https://github.com/justinpaulosolo"
              />
              <SocialCard
                title="Email"
                href="mailto:justinpaulosolo@outlook.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
