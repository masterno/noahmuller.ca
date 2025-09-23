"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { credentialCategories } from "../../lib/credentialsData";

export default function CredentialsPage() {
  const tocRef = useRef<HTMLDivElement | null>(null);
  const tocContainerRef = useRef<HTMLDivElement | null>(null);
  const [tocOffset, setTocOffset] = useState<number>(96);

  // Measure the TOC (nav) height so we can offset scroll targets to appear below it
  useEffect(() => {
    const measure = () => {
      const container = tocContainerRef.current;
      const nav = tocRef.current;
      const h = container?.offsetHeight ?? nav?.offsetHeight ?? 0;
      // Read the sticky top offset from the sticky container (aside)
      const topStr = container ? getComputedStyle(container).top : "0";
      let topPx = Number.parseFloat(topStr || "0");
      // Some mobile browsers may return 'auto' for sticky top; fall back to known Tailwind values
      if (!isFinite(topPx) || topStr === "auto") {
        topPx = window.matchMedia("(min-width: 768px)").matches ? 96 : 80; // md:top-24 -> 96px, top-20 -> 80px
      }
      // bottom of sticky nav = sticky top offset + measured height
      const bottom = (Number.isNaN(topPx) ? 0 : topPx) + h;
      // add a little extra spacing so the summary title is fully visible
      setTocOffset(bottom + 12);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  // Auto-open the matching accordion when navigating to a hash (e.g., /credentials#clinical)
  useEffect(() => {
    const openForHash = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
      if (!hash) return;
      const section = document.getElementById(hash);
      const details = section?.querySelector("details") as HTMLDetailsElement | null;
      if (details && !details.open) {
        details.open = true;
      }
    };

    openForHash();
    window.addEventListener("hashchange", openForHash);
    return () => window.removeEventListener("hashchange", openForHash);
  }, []);
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        Credentials & Professional Development
      </h1>
      <p className="mt-4 max-w-prose text-foreground/70">
        I am a firm believer in lifelong learning to stay current in the fields of kinesiology and
        technology. Below is a comprehensive list of my professional licenses, advanced
        certifications, and continuing education courses. Where available, a link is provided to
        verify the credential.
      </p>

      {/* On this page index + content layout */}
      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        <aside ref={tocContainerRef} className="sticky top-20 z-20 self-start md:top-24">
          <nav
            aria-label="On this page"
            ref={tocRef}
            className="rounded-lg border bg-background p-4 shadow-sm"
          >
            <h2 className="text-sm font-semibold">On this page</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {credentialCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="text-primary underline-offset-4 hover:underline"
                    onClick={() => {
                      const section = document.getElementById(cat.id);
                      const details = section?.querySelector(
                        "details",
                      ) as HTMLDetailsElement | null;
                      if (details && !details.open) details.open = true;
                    }}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="grid gap-4">
          {credentialCategories.map((cat) => (
            <div key={cat.id} id={cat.id} style={{ scrollMarginTop: tocOffset }}>
              <details className="rounded-lg border">
                <summary className="cursor-pointer select-none rounded-lg px-4 py-3 text-base font-medium">
                  {cat.name}
                  {cat.intro ? (
                    <p className="mt-1 text-sm font-normal text-foreground/60">{cat.intro}</p>
                  ) : null}
                </summary>
                <div className="border-t px-4 py-3">
                  <ul className="grid gap-4">
                    {cat.items.map((item) => (
                      <li key={item.title} className="rounded-md border p-4">
                        <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                        {item.issuer ? (
                          <p className="mt-1 text-xs text-foreground/70">
                            Issued by: {item.issuer}
                          </p>
                        ) : null}
                        {item.validThrough ? (
                          <p className="mt-1 text-xs text-foreground/70">
                            Valid through: {item.validThrough}
                          </p>
                        ) : null}
                        {item.bullets && item.bullets.length > 0 ? (
                          <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                            {item.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ) : item.description ? (
                          <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
                        ) : null}
                        {item.link ? (
                          <div className="mt-3">
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary underline-offset-4 hover:underline"
                            >
                              Verify credential
                            </Link>
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
