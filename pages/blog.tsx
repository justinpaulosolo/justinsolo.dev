import { GetStaticProps } from "next";
import Container from "../components/Container";
export default function Blog() {
  return (
    <Container title="Blog - Justin Solo">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-6xl font-bold">Blog</h1>
        <div className="mt-4 flex justify-center items-center">
          <p className="text-2xl font-bold">✋ 🛑 Under construction</p>
        </div>
      </div>
    </Container>
  );
}
