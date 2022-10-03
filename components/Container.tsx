import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { GithubIcon } from "./icons/Github";
import Footer from "./Footer";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { GoLogoGithub } from "react-icons/go";

const MenuItems = [
  {
    lable: "Home",
    url: "/",
    active: true,
  },
  {
    lable: "About",
    url: "/about",
    active: false,
  },
  {
    lable: "Blog",
    url: "/blog",
    active: false,
  },
  {
    lable: "Projects",
    url: "/projects",
    active: false,
  },
];

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Container(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Justin Solo - Developer",
    description: "Full Stack Developer",
    type: "website",
    ...customMeta,
  };

  function toggleMenu() {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <div className="flex flex-col max-w-3xl h-screen mx-auto">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content={meta.type}></meta>
      </Head>
      <nav>
        <div className="flex items-center justify-between w-full py-5 px-3">
          <div className="hidden md:block">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <a
                    className={`hover:bg-gray-100 py-2 px-3 rounded
                ${router.asPath === item.url ? "font-bold" : ""}
                `}
                  >
                    {item.lable}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <HiMenu className="h-7 w-7" />
            </button>
          </div>
          <div className="md:hidden">
            <GoLogoGithub className="w-28 h-7" />
          </div>
          <div className="hidden md:flex items-center">
            <button className="flex color:gray-600 hover:text-white hover:bg-blue-500 py-2 px-3 rounded items-center">
              <GithubIcon />
              &nbsp;
              <span className="hidden md:block">Source Code</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute bg-white w-full h-screen ml-4 pr-10">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <a
                    className={`block hover:bg-gray-100 py-2 w-full px-3 rounded
                ${router.asPath === item.url ? "font-bold" : ""}
                `}
                  >
                    {item.lable}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
      <main className="mb-auto mt-8 px-6">{children}</main>
      <Footer />
    </div>
  );
}
