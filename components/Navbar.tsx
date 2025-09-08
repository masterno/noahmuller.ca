"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Noah Muller
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Projects
          </Link>
          <Link
            href="/credentials"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Credentials
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background"
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
      {open ? (
        <div className="border-t bg-background p-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/credentials" onClick={() => setOpen(false)}>
              Credentials
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
