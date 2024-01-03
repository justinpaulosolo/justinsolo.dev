import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className='mb-8 tracking-tighter font-bold text-4xl'>👋 Hello there.</h1>
      <p>I&apos;m <strong>Justin</strong>, a full-stack developer passionate about creating scalable and efficient web applications</p>
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
        <a href="https://bun.sh">
          BUN
        </a>
      </div>
    </div>
  )
}
