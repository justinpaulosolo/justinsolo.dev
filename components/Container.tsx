import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { GithubIcon } from "./icons/Github";

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
    <div className=" max-w-3xl mx-auto">
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
          <button className="flex hover:bg-gray-100 py-2 px-3 rounded">
            <GithubIcon />
            &nbsp;
            <span>Github</span>
          </button>
        </div>
      </nav>
      <main className="mt-10 bg-purple-400">{children}</main>
    </div>
  );
}
