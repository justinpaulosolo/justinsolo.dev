"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = {
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/blog": {
    name: "Blog",
  },
};

export default function MainNav() {
  const currentPath = usePathname();

  return (
    <header className="container z-40">
      <div className="flex h-20 items-center justify-between py-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tighter text-black dark:text-white"
        >
          {"//"}justinsolo.dev
        </Link>
        <nav className="flex gap-3">
          {Object.entries(navLinks).map(([path, { name }]) => (
            <Link
              href={path}
              key={path}
              className={cn(
                "flex items-center text-sm font-medium text-neutral-700 transition-all sm:text-sm dark:text-neutral-200",
                currentPath === path && "text-black dark:text-neutral-400"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
