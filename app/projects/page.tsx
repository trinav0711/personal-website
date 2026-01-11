export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

      {/* Py_FS */}
      <section className="mt-10">
        <h2 className="text-xl font-medium">Py_FS</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Open-source Feature Selection Library (Python)
        </p>
        <p className="mt-4 text-zinc-700 leading-7">
          Py_FS is an open-source Python library implementing optimized feature
          selection algorithms for machine learning research. The library is
          actively used by researchers across academia.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>• 66+ GitHub stars and 39+ forks</li>
          <li>• Focus on performance, correctness, and usability</li>
          <li>• Used in published ML research</li>
        </ul>
        <p className="mt-4 text-sm">
          <a
            href="https://github.com/trinav0711"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </section>

      {/* CUFoodie */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">CUFoodie</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Full-stack Web Application
        </p>
        <p className="mt-4 text-zinc-700 leading-7">
          CUFoodie is a full-stack web application designed to help students at
          Columbia University discover curated restaurants near campus.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>• Served 500+ students</li>
          <li>• React frontend with Flask backend</li>
          <li>• PostgreSQL database</li>
        </ul>
      </section>
    </main>
  );
}