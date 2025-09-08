"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const params = useSearchParams();
  const success = params.get("success") === "1";
  const [showBanner, setShowBanner] = useState(success);

  useEffect(() => {
    if (success) {
      // Auto-fade the banner
      const hideId = setTimeout(() => setShowBanner(false), 6000);
      // Clean the URL so the banner doesn't reappear on refresh/back
      const cleanId = setTimeout(() => {
        if (typeof window !== "undefined") {
          const url = new URL(window.location.href);
          url.searchParams.delete("success");
          window.history.replaceState({}, "", url.toString());
        }
      }, 6600);
      return () => {
        clearTimeout(hideId);
        clearTimeout(cleanId);
      };
    }
  }, [success]);

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-prose text-foreground/70">
        Have a question or want to work together? Send a message and I’ll reply as soon as I can. If
        you prefer a call, include your phone number and the best time to reach you.
      </p>

      {success ? (
        <div
          role="status"
          aria-live="polite"
          className={`relative md:static fixed left-1/2 -translate-x-1/2 bottom-4 z-50 w-[calc(100%-2rem)] md:w-auto mt-6 md:mt-6 max-w-xl rounded-md border bg-secondary/30 p-4 text-sm shadow-md backdrop-blur transition-opacity duration-700 ${
            showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ paddingBottom: "max(env(safe-area-inset-bottom), 8px)" }}
        >
          <button
            type="button"
            aria-label="Dismiss message"
            onClick={() => {
              setShowBanner(false);
              if (typeof window !== "undefined") {
                const url = new URL(window.location.href);
                url.searchParams.delete("success");
                window.history.replaceState({}, "", url.toString());
              }
            }}
            className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-secondary/60"
          >
            ×
          </button>
          Thanks for reaching out — your message was sent successfully. I’ll get back to you soon.
        </div>
      ) : null}

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact?success=1"
          className="grid gap-4"
        >
          {/* Netlify needs this hidden input to map the form */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field */}
          <input type="text" name="bot-field" className="hidden" aria-hidden />

          <label className="grid gap-1" htmlFor="name">
            <span className="text-sm text-foreground/80">Name</span>
            <input
              id="name"
              name="name"
              className="h-10 rounded-md border bg-background px-3"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </label>
          <label className="grid gap-1" htmlFor="email">
            <span className="text-sm text-foreground/80">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              className="h-10 rounded-md border bg-background px-3"
              placeholder="you@example.com"
              required
              autoComplete="email"
              inputMode="email"
            />
          </label>
          <label className="grid gap-1" htmlFor="phone">
            <span className="text-sm text-foreground/80">Phone (optional)</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="h-10 rounded-md border bg-background px-3"
              placeholder="(555) 123-4567"
              autoComplete="tel"
              inputMode="tel"
              pattern="^[+]?[-() .\d]{7,}$"
              title="Use digits and optional +, spaces, dashes, or parentheses"
            />
          </label>
          <label className="grid gap-1" htmlFor="reason">
            <span className="text-sm text-foreground/80">Reason for contact</span>
            <select
              id="reason"
              name="reason"
              className="h-10 rounded-md border bg-background px-3"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Clinical Practice</option>
              <option>Personal Training</option>
              <option>Technology Project</option>
              <option>Other</option>
            </select>
          </label>
          <label className="grid gap-1" htmlFor="message">
            <span className="text-sm text-foreground/80">Message</span>
            <textarea
              id="message"
              name="message"
              className="min-h-32 rounded-md border bg-background px-3 py-2"
              placeholder="How can I help?"
              required
              minLength={10}
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Send
          </button>
          <p className="mt-3 max-w-xl text-xs text-foreground/60">
            I respect your privacy. Your details are used only to respond to your inquiry and are
            never shared or sold.
          </p>
        </form>

        <aside className="self-start rounded-lg border p-5">
          <h2 className="text-lg font-semibold">Other ways to reach me</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/noahmuller/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/masterno"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="text-foreground/70">
              Response time: typically within 1–2 business days
            </li>
          </ul>

          <div className="mt-5">
            <h3 className="text-sm font-medium text-foreground/80">FAQ</h3>
            <div className="mt-2 space-y-2">
              <details className="rounded-md border p-3">
                <summary className="cursor-pointer text-sm font-medium">
                  Do you offer virtual sessions?
                </summary>
                <p className="mt-2 text-sm text-foreground/70">
                  Yes—virtual consultations and follow-ups are available.
                </p>
              </details>
              <details className="rounded-md border p-3">
                <summary className="cursor-pointer text-sm font-medium">
                  How soon will I hear back?
                </summary>
                <p className="mt-2 text-sm text-foreground/70">
                  I usually reply within 1–2 business days.
                </p>
              </details>
              <details className="rounded-md border p-3">
                <summary className="cursor-pointer text-sm font-medium">
                  What should I include in my message?
                </summary>
                <p className="mt-2 text-sm text-foreground/70">
                  A brief goal, any relevant history, and preferred availability helps me respond
                  faster.
                </p>
              </details>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground/80">In‑person service area</h3>
            <p className="mt-1 text-sm text-foreground/70">
              I offer in‑person sessions across Metro Vancouver. If you’re outside this area,
              virtual appointments are available.
            </p>
            <div
              className="relative mt-3 w-full overflow-hidden rounded-md border md:max-w-[360px]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <iframe
                title="Metro Vancouver Service Area Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277682.9650016763!2d-123.35562173870261!3d49.25782621494099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717984d6c72f%3A0xa301c1a3cdfed98c!2sMetro%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1725816600000"
                allowFullScreen
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
