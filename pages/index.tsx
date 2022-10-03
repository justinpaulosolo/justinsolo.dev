import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/future/image";

import profile from "../public/profile.jpeg";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl tracking-tighter font-bold">Justin Solo</h1>
          <p className="text-gray-900 text-lg">Full Stack Developer</p>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/justinpaulosolo/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.github.com/justinpaulosolo/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src={profile}
            alt="profile-pic"
            width={100}
            height={100}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-12 mb-4">
        <h1 className="font-bold text-3xl">Recent Posts</h1>
        <div className="border-b hover:cursor-pointer border-gray-200 tansform hover:scale-[1.01] py-3 tansition-all ">
          <div className="flex">
            <div className="mr-4 text-gray-600">01</div>
            <h4 className="font-medium">Title here</h4>
          </div>
        </div>
        <div className="border-b hover:cursor-pointer border-gray-200 tansform hover:scale-[1.01] py-3 tansition-all ">
          <div className="flex">
            <div className="mr-4 text-gray-600">02</div>
            <h4 className="font-medium">Title here</h4>
          </div>
        </div>
        <div className="border-b hover:cursor-pointer border-gray-200 tansform hover:scale-[1.01] py-3 tansition-all ">
          <div className="flex">
            <div className="mr-4 text-gray-600">03</div>
            <h4 className="font-medium">Title here</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center"></div>
    </Container>
  );
};

export default Home;
