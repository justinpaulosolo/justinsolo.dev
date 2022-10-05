import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Container } from "@/components/Container";
import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects({ projects }: { projects: Project[] }) {
  console.log(projects);
  return (
    <Container title="Projects - Justin Solo">
      <div className="flex h-full w-full flex-col">
        <h1 className="text-6xl font-bold">Blog</h1>
        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:flex-wrap ">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const projectFiles = fs.readdirSync(path.join("projects"));

  const projects = projectFiles.map((project) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", project),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      frontmatter,
      slug: project.split(".")[0],
    };
  });

  return {
    props: {
      projects,
    },
  };
};
