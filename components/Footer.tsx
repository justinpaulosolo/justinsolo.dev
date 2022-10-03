import Link from "next/link";
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="px-6 py-3 border-t border-gray-100">
      <div className="flex-col">
        <div className="row">
          <NowPlaying />
        </div>
        <div className="row mt-1">
          <div className="flex justify-between">
            <span className="text-gray-700 ">
              © 2022 &nbsp;
              <Link href="/">
                <a className="hover:underline">Justin Solo™</a>
              </Link>
              . All rights reserved.
            </span>
            <div>
              <ul className="flex space-x-4 text-gray-600">
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
