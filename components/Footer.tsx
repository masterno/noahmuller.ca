import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:h-16 md:flex-row md:py-0">
        <p className="text-foreground/60">© {new Date().getFullYear()} Noah Muller</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/masterno"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/noahmuller/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
