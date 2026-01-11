export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Research</h1>

      <p className="mt-6 text-zinc-700 leading-7">
        I have conducted research in machine learning, privacy, and applied AI,
        resulting in multiple peer-reviewed publications across IEEE, Springer,
        and Elsevier venues.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Current Research</h2>
        <p className="mt-4 text-zinc-700 leading-7">
          I am currently a Research Assistant at the ARiSE Lab at Columbia
          University, working on an NSF-funded project focused on compliance
          auditing of large language models using causal inference and
          explainable AI techniques.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Previous Research</h2>
        <ul className="mt-4 space-y-4 text-zinc-700">
          <li>
            • Published 9 peer-reviewed research papers with 350+ citations in
            areas including feature selection, stock market prediction, and
            image segmentation.
          </li>
          <li>
            • Collaborated with academic researchers and guided undergraduate
            students at CMATER Lab, Jadavpur University.
          </li>
          <li>
            • Presented research findings at multiple international conferences.
          </li>
        </ul>
      </section>
    </main>
  );
}