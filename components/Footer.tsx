import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--nav-border)] bg-[var(--nav)] text-[color:var(--nav-foreground)]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:h-16 md:flex-row md:py-0">
        <p className="text-[color:var(--nav-foreground)]/80">
          © {new Date().getFullYear()} Noah Muller
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/masterno"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/noahmuller/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
