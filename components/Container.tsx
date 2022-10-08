import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "./Footer";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { GoLogoGithub } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi"

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

export function Container(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme ,setTheme } = useTheme();
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

  function handleChangeTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    console.log(theme)
    if(theme === 'dark')
      setTheme('light')
    else 
      setTheme('dark')
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    setMounted(true)
  },[])

  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content={meta.type}></meta>
      </Head>
      <nav>
        <div className="flex w-full items-center justify-between py-5 px-3 ">
          <div className="hidden md:block">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <a
                    className={`rounded py-2  px-3 hover:text-gray-800 dark:hover:text-gray-100
                ${
                  router.asPath === item.url
                    ? "font-normal text-blue-500"
                    : "text-gray-500 dark:text-gray-400"
                }
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
          {/* <div className="md:hidden">
            <GoLogoGithub className="h-7 w-28" />
          </div>
          <div className="hidden items-center md:flex">
            <a
              href="https://github.com/justinpaulosolo/justinsolo.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg border border-blue-500 bg-blue-500 py-1.5 px-5 text-white transition-all hover:border-blue-500 hover:bg-white hover:text-blue-500"
            >
              <SiGithub />
              &nbsp;
              <span className="hidden md:block">Source Code</span>
            </a>
          </div> */}
          <div>
            <button onClick={handleChangeTheme} className="flex justify-center items-center dark:bg-gray-500 dark:border-gray-500 dark:hover:border-gray-200 bg-gray-200 rounded-lg h-9 w-9 border-[1.5px] border-gray-200 hover:border-gray-500">
              {
                theme === 'dark' && mounted ? <FiSun />: <FiMoon />
              }
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute ml-4 h-screen w-full bg-gray-50 dark:bg-black pr-10">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <a
                    className={`block w-full rounded py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-600
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
