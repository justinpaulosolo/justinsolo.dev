import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import NowPlaying from "../components/NowPlaying";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl tracking-tighter font-bold">Justin Solo</h1>
          <p className="text-gray-900">Full Stack Developer</p>
        </div>
        <div>
          <Image
            src="/profile.jpeg"
            alt="profile-picture"
            width={150}
            height={150}
            className="rounded-full"
          ></Image>
        </div>
      </div>
      <div className="mt-4 mb-4">
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
      </div>
      <div>
        <NowPlaying />
      </div>
    </Container>
  );
};

export default Home;
