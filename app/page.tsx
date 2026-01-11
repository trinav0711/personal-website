export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Trinav Bhattacharyya
      </h1>

      <p className="mt-2 text-lg text-zinc-600">
        Software Engineer — Systems, Performance, ML
      </p>

      <p className="mt-6 text-base leading-7 text-zinc-700">
        I build and optimize backend systems with an emphasis on performance,
        reliability, and correctness.
      </p>

      <nav className="mt-8 flex gap-6 text-sm font-medium">
        <a href="/resume" className="hover:underline">
          Resume
        </a>
        <a href="https://github.com/trinav0711" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/trinavb/" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:tb3201@columbia.edu" className="hover:underline">
          Email
        </a>
      </nav>
    </main>
  );
}