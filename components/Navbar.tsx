"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--nav-border)] bg-[var(--nav)] text-[color:var(--nav-foreground)] backdrop-blur supports-[backdrop-filter]:bg-[var(--nav)]/95 shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Noah Muller
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link
            href="/about"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            Projects
          </Link>
          <Link
            href="/credentials"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            Credentials
          </Link>
          <Link
            href="/blog"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="transition-colors text-[color:var(--nav-foreground)]/70 hover:text-[color:var(--nav-foreground)]"
          >
            Contact
          </Link>
          <div className="ml-2 h-6 w-px bg-border" />
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--nav-border)] bg-[var(--nav)] text-[color:var(--nav-foreground)]"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-[color:var(--nav-border)] bg-[var(--nav)] p-4 text-[color:var(--nav-foreground)] md:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/about" onClick={() => setOpen(false)} className="text-[color:var(--nav-foreground)]/90">
              About
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="text-[color:var(--nav-foreground)]/90">
              Projects
            </Link>
            <Link href="/credentials" onClick={() => setOpen(false)} className="text-[color:var(--nav-foreground)]/90">
              Credentials
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="text-[color:var(--nav-foreground)]/90">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-[color:var(--nav-foreground)]/90">
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
