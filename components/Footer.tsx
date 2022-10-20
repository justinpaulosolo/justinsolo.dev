import Link from "next/link";
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="px-6 py-3">
      <div className="flex-col border-t border-gray-200  dark:border-gray-400">
        <div className="row mt-3">
          <NowPlaying />
        </div>
        <div className="row mt-1">
          <div className="flex justify-between">
            <span className="hidden text-neutral-600 dark:text-neutral-400 md:block">
              © 2022 &nbsp;
              <Link href="/">
                <a className="hover:underline">Justin Solo</a>
              </Link>
              . All rights reserved.
            </span>
            <div className="hidden md:block">
              <ul className="flex space-x-4 dark:text-gray-300">
                <li>
                  <Link href="/">
                    <a className="text-neutral-600 hover:underline dark:text-neutral-400">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-neutral-600 hover:underline dark:text-neutral-400">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="text-neutral-600 hover:underline dark:text-neutral-400">
                      Blogs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="text-neutral-600 hover:underline dark:text-neutral-400">
                      Projects
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
