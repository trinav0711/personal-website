export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Trinav Bhattacharyya
      </h1>

      <p className="mt-2 text-lg text-zinc-600">
        Software Engineer · Distributed Systems · Machine Learning
      </p>

      <p className="mt-6 text-base leading-7 text-zinc-700">
        I am a Software Engineer with 3+ years of experience at AWS Aurora,
        working on reliability-critical distributed database systems. I am
        currently pursuing an MS in Computer Science (Machine Learning Track)
        at Columbia University.
      </p>

      <p className="mt-4 text-base leading-7 text-zinc-700">
        My interests include low-latency systems, databases, and applied
        machine learning.
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
        <a
          href="/resume"
          className="hover:underline"
        >
          Resume
        </a>
        <a
          href="/experience"
          className="hover:underline"
        >
          Experience
        </a>
        <a
          href="/projects"
          className="hover:underline"
        >
          Projects
        </a>
        <a
          href="/research"
          className="hover:underline"
        >
          Research
        </a>
        <a
          href="https://github.com/trinav0711"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/trinavb"
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:tb3201@columbia.edu"
          className="hover:underline"
        >
          Email
        </a>
      </div>
    </main>
  );
}