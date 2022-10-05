import Link from "next/link";
import Image from "next/future/image";
import { Project } from "@/lib/types";
import { TechIcon, TechIconsProps, TechListType } from "./TechIcon";

export function ProjectCard({ project }: { project: Project }) {
  const css = { width: "100%", height: "200px" };
  return (
    <Link href={"/project/" + project.slug} passHref>
      <div className="w-full transform rounded-lg border border-gray-200 bg-white transition-all hover:scale-[1.05] hover:cursor-pointer md:max-w-[350px] ">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {project.frontmatter.title}
          </h5>
          <p className="mb-2 font-normal text-gray-700">
            {project.frontmatter.description}
          </p>
          <TechIcon
            techs={project.frontmatter.technology as Array<TechListType>}
            className="mb-2"
          />
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
        </div>
      </div>
    </Link>
  );
}
