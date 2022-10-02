import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-6 py-3 border-t border-gray-100">
      <span className="text-gray-800 text-sm">
        © 2022 &nbsp;
        <Link href="/">
          <a className="hover:underline">Justin Solo™</a>
        </Link>
        . All rights reserved.
      </span>
      <div>
        <ul className="text-sm flex space-x-4">
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
    </footer>
  );
}
