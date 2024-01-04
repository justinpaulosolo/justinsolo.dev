import { cn } from "@/lib/utils";

export function ProjectCard({
  title,
  link,
  description,
  technologies,
  isActive = true,
}: {
  title: string;
  link?: string;
  description: string;
  technologies: string[];
  isActive?: boolean;
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
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full bg-red-500",
                isActive && "bg-green-500"
              )}
            />
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
        <div className="mt-4 flex flex-wrap gap-1">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="inline-flex items-center text-nowrap rounded border border-neutral-200 bg-neutral-50 px-1 py-0 text-[10px] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
