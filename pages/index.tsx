import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../components/Container";
import { GithubIcon } from "../components/icons/Github";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      <h1 className="text-7xl font-bold">Justin Solo</h1>
    </Container>
  );
};

export default Home;
