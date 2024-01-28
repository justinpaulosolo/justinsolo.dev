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
                Building rock-solid systems, brick by digital brick.
              </p>
              <p>
                I&apos;m a Backend Engineer and System Architect passionate about designing and building efficient, scalable, and secure web infrastructures. While my journey began in the full-stack realm, my focus has now morphed into crafting the critical backbone of web applications, optimizing performance, and ensuring seamless user experiences.
              </p>
              <p>
                My passion lies in crafting innovative backend solutions that power amazing online experiences. I'm always eager to collaborate, learn new things, and build something impactful. Let's connect and embark on a digital adventure together!
              </p>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              my toolbox
            </h2>
            <div className="col-span-4 space-y-6 text-pretty">
              <li>Backend Mastery: Fluent in languages like Python, Java, and Go, I tackle server-side development and API creation with ease.</li>
              <li>Architecting for the Future: I thrive on designing robust, cloud-native architectures that are adaptable and ready to grow.</li>
              <li>DevOps Evangelist: Bridging the gap between development and operations, I automate workflows and embrace CI/CD practices for agile deployments.</li>
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
