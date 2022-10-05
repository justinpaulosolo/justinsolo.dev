import Link from "next/link";
import Image from "next/future/image";
import { Post } from "@/lib/types";

export function ProjectCard({ project }: { project: any }) {
  const css = { width: "100%", height: "200px" };
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md md:max-w-[350px] ">
      <div className="p-5">
        <Link href={"/blog/" + project.slug} passHref>
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {project.frontmatter.title}
            </h5>
          </a>
        </Link>
        <p className="mb-2 font-normal text-gray-700">
          {project.frontmatter.description}
        </p>
        <p className="mb-2">
          {project.frontmatter.technology.map((tech: any, index: number) => (
            <span
              key={index}
              className="mr-1 text-sm font-semibold text-gray-800"
            >
              {tech}
            </span>
          ))}
        </p>
        <Image
          src={project.frontmatter.thumbnailUrl}
          alt="screenshot"
          width={100}
          height={100}
          style={css}
          quality={100}
          className="mb-2 rounded"
          priority
        />
        <Link href={"/project/" + project.slug} passHref>
          <a className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500 py-2 px-3 text-center text-sm font-medium text-white hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
            See more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
