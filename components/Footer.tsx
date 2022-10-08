import Link from "next/link";
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="px-6 py-3">
      <div className="flex-col border-t border-gray-200  dark:border-gray-600">
        <div className="row mt-3">
          <NowPlaying />
        </div>
        <div className="row mt-1">
          <div className="flex justify-between">
            <span className="hidden text-gray-700 dark:text-gray-300 md:block">
              © 2022 &nbsp;
              <Link href="/">
                <a className="hover:underline">Justin Solo™</a>
              </Link>
              . All rights reserved.
            </span>
            <div className="hidden md:block">
              <ul className="flex space-x-4 text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/">
                    <a className="hover:underline">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="hover:underline">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:underline">Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="hover:underline">Projects</a>
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
