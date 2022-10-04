import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiSqlite,
  SiDotnet,
  SiVercel,
  SiNodedotjs,
} from "react-icons/si";

import { Container } from "@/components/Container";
import { SocialMediaLinks } from "@/lib/constants";

export default function About() {
  return (
    <Container title="About me - Justin Solo">
      <h1 className="text-6xl font-bold">About</h1>
      <p className="mt-4">
        Hello! My name is <span className="font-bold">Justin Solo</span> Im a{" "}
        <span className="font-bold">Full Stack Developer</span> based in Los
        Angeles, CA. I&apos;ve had exprience building full stack web
        applications and working in agile team environments. I&apos;m currently
        looking for a full time position as a software engineer.
      </p>
      <div className="mt-4">
        <h3 className="text-3xl font-bold">On the web</h3>
        <ul className="mt-1 list-disc flex-col pl-8">
          {SocialMediaLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="items-center text-blue-500 hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-bold">Current stack</h3>
        <div className="mt-2 flex space-x-3">
          <SiTypescript className="h-11 w-11" />
          <SiReact className="h-11 w-11" />
          <SiNextdotjs className="h-11 w-11" />
          <SiNodedotjs className="h-11 w-11" />
          <SiTailwindcss className="h-11 w-11" />
          <SiPrisma className="h-11 w-11" />
          <SiSqlite className="h-11 w-11" />
          <SiDotnet className="h-11 w-11" />
          <SiVercel className="h-11 w-11" />
        </div>
      </div>
    </Container>
  );
}
