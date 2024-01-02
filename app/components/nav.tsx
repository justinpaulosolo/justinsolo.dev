import Link from "next/link";

const navLinks = {
  '/' : {
    name: 'Home',
  },
  '/projects' : {
    name: 'Projects',
  },
  '/blog' : {
    name: 'Blog',
  }
}

export function Navbar() {
  return (
    <div className="tracking-tight mb-10">
      <nav className='flex flex-row justify-between'>
        <Link href='/'>
          <h1 className='font-mono font-bold text-xl tracking-tighter'>Justin Solo</h1>
        </Link>
      <div className='flex space-x-4'>
        {Object.entries(navLinks).map(([path, { name }]) => (
          <Link href={path} key={path} className="tansition-all hover:text-neutral-700 dark:hover:text-neutral-200">
            {name}
          </Link>
        ))}
      </div>
      </nav>
    </div>
  )
}