export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:flex-row lg:px-6">
        <div>
          © {new Date().getFullYear()} Minta Cleaning under Mintahomes. All
          rights reserved.
        </div>
        <div className="flex gap-3">
          <a href="#home" className="hover:text-emerald-600">
            Back to top
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="mailto:info@mintahomes.com.au"
            className="hover:text-emerald-600"
          >
            info@mintahomes.com.au
          </a>
        </div>
      </div>
    </footer>
  );
}
