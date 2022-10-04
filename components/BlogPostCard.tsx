import Image from "next/future/image";
import Link from "next/link";

interface Post {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  };
  slug: string;
}

export default function BlogPostCard({ blog }: { blog: Post }) {
  const css = { width: "100%", height: "200px" };
  console.log(blog);
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md md:max-w-[350px] ">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {blog.frontmatter.title}
          </h5>
        </a>
        <p className="mb-2 font-bold text-gray-800">Sept 1, 2022</p>
        <p className="mb-3 font-normal text-gray-700">
          {blog.frontmatter.description}
        </p>
        <Link href={"/blog/" + blog.slug} passHref>
          <a className="inline-flex items-center rounded-lg bg-blue-500 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
