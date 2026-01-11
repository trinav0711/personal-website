export default function Navbar() {
  return (
    <nav className="mx-auto max-w-3xl px-6 py-6">
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/experience" className="hover:underline">
          Experience
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
        <a href="/research" className="hover:underline">
          Research
        </a>
        <a href="/resume" className="hover:underline">
          Resume
        </a>
      </div>
    </nav>
  );
}