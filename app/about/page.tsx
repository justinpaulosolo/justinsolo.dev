export default function AboutPage() {
  return (
    <section className="container space-y-6">
      <div className="space-y-2">
        <h1 className="mt-6 text-2xl font-bold tracking-tighter text-black dark:text-white">
          About Me.
        </h1>
        <div className="">
          <div className="grid grid-cols-6 gap-y-6">
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              about
            </h2>
            <div className="col-span-4 space-y-2">
              <p>
                Hi, I&apos;m a full-stack JavaScript developer who loves to
                create positive and accessible web experiences with React,
                NEXT.js, SQL, and .NET.
              </p>
              <p>
                I enjoy solving problems and delivering value to users and
                clients. Whether it&apos;s building a responsive UI, optimizing
                a database query, or deploying a web app, I always strive to do
                my best and have fun along the way.
              </p>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              experience
            </h2>
            <div className="col-span-4 space-y-2">
              <div className="flex justify-between">
                <div>
                  <h3>Full Stack Developer</h3>
                  <h3 className="text-neutral-500">Aquifer</h3>
                </div>
                <p>2022</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>PACT Seaman</h3>
                  <h3 className="text-neutral-500">Aquifer</h3>
                </div>
                <p>2017-2019</p>
              </div>
            </div>
            <h2 className="col-span-2 font-light tracking-wide text-neutral-700 dark:text-neutral-200">
              connect
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
