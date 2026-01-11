export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>

      {/* AWS SDE II */}
      <section className="mt-10">
        <h2 className="text-xl font-medium">
          Software Development Engineer II — AWS Aurora
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Amazon Web Services · Jun 2022 – Jul 2025
        </p>

        <p className="mt-4 text-zinc-700 leading-7">
          Worked on Aurora’s distributed database storage systems with a focus
          on durability, availability, and customer-impacting reliability.
        </p>

        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            • Owned and enhanced Aurora QA infrastructure for validating
            distributed replication paths across availability zones.
          </li>
          <li>
            • Resolved critical Undo subsystem defects in MySQL affecting
            enterprise customers including Netflix and Paytm.
          </li>
          <li>
            • Delivered cross-zone replication features for Aurora Graph DB,
            enabling adoption by enterprise clients such as Disney.
          </li>
          <li>
            • Built high-throughput validation pipelines for latency-sensitive
            distributed systems using Java, Bash, and PostgreSQL.
          </li>
          <li>
            • Reduced downtime risk by ~15%, improved availability by ~20%, and
            cut infrastructure costs by ~15%.
          </li>
        </ul>

        <p className="mt-4 text-sm text-zinc-600">
          Tech: C++, Java, Linux, PostgreSQL, AWS EC2, Distributed Systems
        </p>
      </section>

      {/* AWS Intern */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">
          Software Development Engineer Intern — AWS Aurora
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Amazon Web Services · Jun 2021 – Jul 2021
        </p>

        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            • Designed and implemented a Java-based system to collect logs from
            100,000+ Aurora nodes.
          </li>
          <li>
            • Stored and processed logs using DynamoDB and built a visualization
            dashboard.
          </li>
          <li>
            • Tool was integrated into production and led to a full-time offer.
          </li>
        </ul>
      </section>
    </main>
  );
}