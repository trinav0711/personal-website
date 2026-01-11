export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>

      <p className="mt-4 text-zinc-700">
        You can view or download my resume below.
      </p>

      <div className="mt-8">
        <a
          href="/Trinav_Bhattacharyya_Resume.pdf"
          target="_blank"
          className="text-sm font-medium underline"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 border rounded-lg overflow-hidden">
        <iframe
          src="/Trinav_Bhattacharyya_Resume.pdf"
          className="w-full h-[800px]"
        />
      </div>
    </main>
  );
}