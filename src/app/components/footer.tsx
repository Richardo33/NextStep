export default function Footer({
  goToSection,
}: {
  goToSection: (i: number) => void;
}) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} NextStep. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <button
            onClick={() => goToSection(0)}
            className="hover:text-white transition cursor-pointer "
          >
            Home
          </button>
          <button
            onClick={() => goToSection(1)}
            className="hover:text-white transition cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => goToSection(2)}
            className="hover:text-white transition cursor-pointer"
          >
            Workflow
          </button>
          <button
            onClick={() => goToSection(3)}
            className="hover:text-white transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => goToSection(4)}
            className="hover:text-white transition cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
