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
        Full stack software engineer passionate about creating innovative and
        accessible full-stack applications.
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
