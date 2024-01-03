import Image from "next/image";
import Badge from "./components/badge";

export default function Home() {
  return (
    <section className="container space-y-2">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        👋 Hello there.
      </h1>
      <p>
        I&apos;m <strong>Justin</strong>, a full-stack developer passionate
        about creating scalable and efficient web applications
      </p>
      <div className="flex gap-2">
        {/* Fix Icons for dark mode */}
        <Badge href="https://github.com/justinpaulosolo">
          <Image
            alt="Github logomark"
            src="/github-logo.svg"
            width="20"
            height="20"
          />
        </Badge>
        <Badge href="https://linkedin.com/justinpaulosolo">
          <Image
            alt="LinkedIn logomark"
            src="/linkedin-logo.svg"
            width="20"
            height="20"
          />
        </Badge>
        <Badge href="mailto: justinpaulosolo@outlook.com">
          <Image
            alt="Email logomark"
            src="/email-logo.svg"
            width="20"
            height="20"
          />
        </Badge>
      </div>
    </section>
  );
}
