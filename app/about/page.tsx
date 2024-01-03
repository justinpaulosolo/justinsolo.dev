function SocialCard({ title, href }: { title: string; href: string }) {
  return (
    <div className="group flex w-full">
      <a
        target="_blank"
        href={href}
        className="flex w-full items-center justify-between text-nowrap rounded border border-neutral-200 p-1.5 font-semibold  dark:border-neutral-700 dark:text-neutral-100"
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
                Hi, I&apos;m a full-stack JavaScript developer who loves to
                create positive and accessible web experiences with React,
                NEXT.js, SQL, and .NET.
              </p>
              <p>
                I enjoy solving problems and delivering value to users and
                clients. Whether it&apos;s building a responsive UI, optimizing
                a database query, or deploying a web app, I always strive to do
                my best and have fun along the way.
              </p>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              experience
            </h2>
            <div className="col-span-4 space-y-6">
              <div className="flex justify-between">
                <div>
                  <h3>Full Stack Developer</h3>
                  <h3 className="text-neutral-500">Aquifer</h3>
                </div>
                <p>2022</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>PACT Seaman</h3>
                  <h3 className="text-neutral-500">United States Navy</h3>
                </div>
                <p>2017-2019</p>
              </div>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              connect
            </h2>
            <div className="col-span-4 flex justify-between gap-3">
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
