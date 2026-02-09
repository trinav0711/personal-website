export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Research</h1>

      <p className="mt-6 text-zinc-700 leading-7">
        I have conducted research in machine learning optimization, feature selection, and
        image segmentation, resulting in 9 peer-reviewed publications across IEEE, Springer,
        and Elsevier journals, amongst others. My current work at Columbia University is at the
        intersection of Causal Inference and Privacy Laws in the contemporary world to ensure adherence
        of LLMs to legal frameworks, data management, and building user trust in these technologies.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Current Research</h2>
        <p className="mt-4 text-zinc-700 leading-7">
          I am currently a Research Assistant at the ARiSE (Advanced Research in Software Engineering)
          Lab at Columbia University. I am working on an NSF-funded project focused on compliance
          auditing of LLMs using Causal Inference and Explainable AI techniques. The primary goal is
          to check adherence of modern and upcoming LLMs to data privacy laws across the globe, such as GDPR,
          EU AI Act, Colorado AI Act, amongst others. These laws build upon FIPPS and OECD's purpose limitation
          and data minimization guidelines. The current task focuses on building a benchmark to audit
          the current open-source LLMs against both real-world and synthetically generated datasets in the
          Finance, Employment and Healthcare domains, providing counter-factuals and eventually evaluating the
          models. Apart from Columbia University, there are academic collaborators from Wesleyan University
          and University of South Carolina, while industry participation is being spearheaded by Google
          and IBM whose focus is to provide their own LLMs and datasets.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Previous Research</h2>
        I have previously worked as a Research Assistant at the Centre for Microprocessor Applications
        Training and Research (CMATER) lab at Jadavpur University, India during my undergraduate studies.
        To continue my passion for ML optimization problems, upon request from various journals,
        I currently review research works to help advancement in this domain. Some salient observations
        during my time at CMATER are as follows:
        <ul className="mt-4 space-y-4 text-zinc-700">
          <li>
            • Collaborated with 5+ academic researchers while guiding undergraduate
            and graduate students at the CMATER Lab.
          </li>
          <li>
            • Published 9 peer-reviewed research papers with 400+ citations in
            areas including cancer detection, stock market prediction, signature verification,
            social networks' advertising optimization and image segmentation of brain MRI scans.
          </li>
          <li>
            • Presented research findings at multiple international conferences organized by
            IEEE and Elsevier.
          </li>
          <li>
            • Actively involved in helping current university students in the feature selection domain.
          </li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Tech: Python, NumPy, SciPy, scikit-learn, PyPI, MATLAB, Statistics
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://scholar.google.com/citations?user=uuB5LPEAAAAJ"
            target="_blank"
            className="underline"
          >
            View all research papers
          </a>
        </p>
      </section>
    </main>
  );
}