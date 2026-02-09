export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>

      {/* AWS SDE II/I */}
      <section className="mt-10">
        <h2 className="text-xl font-medium">
          Software Development Engineer II/I — AWS Aurora
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Amazon Web Services · Jun 2022 - Jul 2025
        </p>

        <p className="mt-4 text-zinc-700 leading-7">
          Worked on AWS Aurora Storage's distributed database storage systems with a focus
          on durability, availability, and customer-impacting reliability. Part of storage management team
          responsible for maintaining and improving database storage in all AWS regions across the globe.
          Joined initially as a Software Development Engineer, and was promoted in October 2024 to reward
          the work done for customers and the benefit of the team.
        </p>

        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            • Solely owned and built Aurora's primary QA infrastructure from scratch to build customer trust
            and create an environment as close to production as possible.
            Since 2023, all features in Aurora
            storage were validated by this framework before being released into production. I designed and
            built the entire codebase from scratch and was responsible for debugging all failures, while
            incorporating new features and test cases into the software. The work was presented by me
            to the Aurora Storage management, and later adopted by every other team in Aurora.
          </li>
          <li>
            • Resolved critical Undo subsystem defects with the backtracking code in MySQL, affecting
            enterprise customers including Netflix and Paytm. Calculated and ensured refunds for all
            customers affected by the defect, earning trust of our users. Most of the anomalies were related
            to improper garbage collection of older logs, bloating customer bills due to extra unnecessary
            storage being used.
          </li>
          <li>
            • Delivered cross-zone replication features for Aurora Graph DB, enabling adoption by
            enterprise clients such as Disney. Also, implemented more than 15 integration tests for the same.
          </li>
          <li>
            • Implemented enhancement to existing peer-to-peer replication code to smartly detect
            performance degradation of database nodes and ensure replacement workflows activate immediately.
            The work led to a 15% decrease in chances of customer's distributed database going down.
          </li>
          <li>
            • Scrutinized the annual capital expenditure of the team to identify database nodes operating
            on old infrastructure and working below expected capacity. Led a team to automate workflows to remove
            old nodes and replace them with newer hardware which use less electricity and have greater efficiency.
            The project decreased the team's next capital expenditure bill by 15%.
          </li>
          <li>
            • Mentored an intern for a period of six months to guide development of an improvement in the
            inter-node gossip protocol. Due to the success of this task, each database node could now
            push an additional 20% payload to its peer nodes, ensuring that laggard nodes catch up with
            new data and logs, thus reducing the probability of a customer losing data.
          </li>
          <li>
            • Designed and developed multiple Bash scripts to be executed during booting of database nodes
            to interact with a global server and retrive its metadata information and credentials using
            session-tokens instead of hardcoded credentials. This ensured adherence to every latest
            mandated security protocols and advisories at Amazon, increasing security and customer trust.
          </li>
          <li>
            • Conducted 6 interviews for Software Development Engineer and Intern roles, attending
            meetings with bar raisers and hiring managers, voting and evaluating decisions for the
            hiring process.
          </li>
        </ul>

        <p className="mt-4 text-sm text-zinc-600">
          Tech: C++, Java, Linux, Bash, MySQL, PostgreSQL, AWS EC2/S3/EMR/DDB, Low-latency systems, Distributed Systems
        </p>
      </section>

      {/* AWS Intern */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">
          Software Development Engineer Intern — AWS Aurora
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Amazon Web Services · Jun 2021 - Jul 2021
        </p>

        <p className="mt-4 text-zinc-700 leading-7">
          Collaborated with senior developers in the AWS Aurora Storage team. The primary project involved
          building features to cut debugging time of developers in Aurora. The work directly benefited enterprise
          and small clients by decreasing downtime of their databases. Impressed by the eventual dashboard
          and log collation funtionalities, the team decided to incorporate the work into the source code, with
          the features developed being used even today.
        </p>

        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            • The aim was to dramatically reduce time spent by developers during on-calls to identify
            patterns in emitted metrics by database nodes, and figure out how to proceed.
          </li>
          <li>
            • Designed and implemented a Java-based system to collect logs from 100,000+ Aurora database nodes.
          </li>
          <li>
            • Stored and processed logs using DynamoDB and built a visualization dashboard.
          </li>
          <li>
            • Tool was integrated into production and led to a full-time offer.
          </li>
        </ul>
      </section>

      {/* Teaching Experience */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">
          Teaching Assistant II — Columbia University
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Jan 2026 – Present
        </p>

        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            • Teaching Assistant II for graduate-level Natural Language Processing for Social Sciences course.
          </li>
          <li>
            • Led teaching of coding materials, discussion sections, clarified theoretical concepts, and assisted
            students with assignments and projects.
          </li>
          <li>
            • Reinforced understanding of Python, PyTorch, scikit-learn, algorithms, probability, statistics,
            linear algebra, multivariable calculus and applied ML & NLP through hands-on problem solving.
          </li>
        </ul>
      </section>
    </main>
  );
}