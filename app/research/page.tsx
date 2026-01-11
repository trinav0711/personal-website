export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Research</h1>

      <p className="mt-6 text-zinc-700 leading-7">
        I have conducted research in machine learning optimization, feature selection, privacy,
        and applied AI, resulting in multiple peer-reviewed publications across IEEE, Springer,
        and Elsevier journals, amongst others.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Current Research</h2>
        <p className="mt-4 text-zinc-700 leading-7">
          I am currently a Research Assistant at the ARiSE (Advanced Research in Software Engineering)
          Lab at Columbia University. I am working on an NSF-funded project focused on compliance
          auditing of LLMs using causal inference and explainable AI techniques. The primary goal is
          to check adherence to FIPPs' purpose limitation and data minimization guidelines. Apart from
          Columbia University, there are academic collaborators from Wesleyan University and University
          of South Carolina, while industry participation is being spearheaded by Google and IBM
          whose focus is to provide LLMs and datasets.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Previous Research</h2>
        <ul className="mt-4 space-y-4 text-zinc-700">
          <li>
            • Published 9 peer-reviewed research papers with 400+ citations in
            areas including feature selection, stock market prediction, signature verification,
            social networks advertising and image segmentation.
          </li>
          <li>
            • Collaborated with academic researchers and guided undergraduate
            students at CMATER (Centre for Microprocessor Applications Training
            and Research) Lab, Jadavpur University.
          </li>
          <li>
            • Presented research findings at multiple international conferences organized by
            IEEE and Elsevier.
          </li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Tech: Python, NumPy, SciPy, scikit-learn, PyPI, MATLAB
        </p>
      </section>
    </main>
  );
}