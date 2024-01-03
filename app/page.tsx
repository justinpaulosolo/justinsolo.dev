import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        👋 Hello there.
      </h1>
      <p>
        I&apos;m <strong>Justin</strong>, a full-stack developer passionate
        about creating scalable and efficient web applications
      </p>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://bun.sh">BUN</a>
      </div>
    </div>
  );
}
