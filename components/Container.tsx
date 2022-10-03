import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { GithubIcon } from "./icons/Github";
import Footer from "./Footer";

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
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Justin Solo - Developer",
    description: "Full Stack Developer",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="flex flex-col max-w-3xl h-screen mx-auto">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content={meta.type}></meta>
      </Head>
      <nav className="flex justify-between w-full py-5 px-3">
        <div>
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
        <div className="flex items-center">
          <button className="flex color:gray-600 hover:text-white hover:bg-blue-500 py-2 px-3 rounded items-center">
            <GithubIcon />
            &nbsp;
            <span>Source Code</span>
          </button>
        </div>
      </nav>
      <main className="mb-auto mt-8 px-6">{children}</main>
      <Footer />
    </div>
  );
}
