import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
} from "react-icons/si";

//Todo: Read into this more
export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<"ul">;

export function TechIcon({ techs }: TechIconsProps) {
  return (
    <ul className="mb-4 flex space-x-2">
      {techs.map((tech, index) => {
        if (!techList[tech]) return;
        const current = techList[tech];

        return (
          <li key={index} className="flex">
            <current.icon className="h-5 w-5" />
          </li>
        );
      })}
    </ul>
  );
}

const techList = {
  "Next.js": {
    icon: SiNextdotjs,
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
  },
  Vercel: {
    icon: SiVercel,
  },
  TypeScript: {
    icon: SiTypescript,
  },
};
