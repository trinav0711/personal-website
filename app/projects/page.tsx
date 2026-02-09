export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

      {/* Py_FS */}
      <section className="mt-10">
        <h2 className="text-xl font-medium">Py_FS</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Open-source Feature Selection Library
        </p>
        <p className="mt-4 text-zinc-700 leading-7">
          An open-source Python library for machine learning research. It contains implementations of
          all contemporary and renowned nature-inspired feature selection and ML optimization techniques.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>• 66+ GitHub stars, 39+ forks.</li>
          <li>• Used in peer-reviewed research extensively due to the framework being easy to install.</li>
          <li>• Focus on performance and correctness, while drastically cutting down developer
            time in algorithm implementation.
          </li>
          <li> • Presented by me as a conference paper at Springer and accepted for publication.</li>
          <li>• Implemented using MATLAB and Python with libraries such as NumPy, SciPy and scikit-learn.</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Tech: Python, NumPy, scikit-learn, PyPI
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://github.com/Ritam-Guha/Py_FS"
            target="_blank"
            className="underline"
          >
            View on GitHub
          </a><br></br>
          <a
            href="https://link.springer.com/chapter/10.1007/978-981-16-2543-5_42"
            target="_blank"
            className="underline"
          >
            View research paper
          </a>
        </p>
      </section>

      {/* CUFoodie */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">CUFoodie</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Full-stack Web Application for Columbia students
        </p>
        <p className="mt-4 text-zinc-700 leading-7">
          A website developed for helping current students at Columbia to discover, review, explore
          and choose restaurants near the University at Morningside Heights, New York.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>• 500+ users have used the site during the Fall of 2025.</li>
          <li>• Community-driven website such that users could add reviews of restaurants they tried,
            mentioning recommended food items and curated trails such as midnight snack places, etc.
          </li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Tech: React, Flask, Python, JavaScript, PostgreSQL, Google Cloud
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://github.com/trinav0711/CUFoodie"
            target="_blank"
            className="underline"
          >
            View on GitHub
          </a>
        </p>
      </section>

      {/* Mayfly Optimization - Harmony Search */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">Mayfly Optimization - Harmony Search</h2>
        <p className="mt-2 text-sm text-zinc-600">
          ML Optimization Algorithm
        </p>
        <p className="mt-4 text-zinc-700 leading-7">
          A nature-inspired ML optimization algorithm called Mayfly Algorithm, coupled with
          greedy local search for purpose of feature selection. Used in various domains such as
          cancer cell detection, signature verification, etc. Cited and used even after 5+ years by academic researchers.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>• Work published in IEEE Access journal</li>
          <li>• Accumulated 150+ citations</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Tech: Python, NumPy, SciPy, scikit-learn, MATLAB
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://github.com/trin07/MA-HS"
            target="_blank"
            className="underline"
          >
            View on GitHub
          </a><br></br>
          <a
            href="https://ieeexplore.ieee.org/abstract/document/9226476/"
            target="_blank"
            className="underline"
          >
            View research paper
          </a>
        </p>
      </section>

      {/* More Projects */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">More Projects</h2>
        <p className="mt-4 text-zinc-700">
          Additional academic, systems, and machine learning projects can be
          found on my GitHub profile.
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://github.com/trinav0711"
            target="_blank"
            className="underline"
          >
            View all projects on GitHub →
          </a>
        </p>
      </section>
    </main>
  );
}