"use client";

import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Intro / Bio */}
      <section id="bio" className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Bridging the Gap Between Manual Labor, Clinical Science, and Modern Technology.
          </h1>
          <div className="mt-4 max-w-prose space-y-4 text-foreground/70">
            <p>
              I am a BCAK Registered Kinesiologist, CSEP-Certified Personal Trainer, and full-stack
              developer. My mission is to improve client outcomes by combining evidence-based
              clinical practice with innovative, custom-built digital tools.
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              From the Job Site to the Clinic
            </h2>
            <p>
              My journey into healthcare wasn't traditional. I spent over a decade in the
              construction and landscaping industries, leading teams and executing complex projects
              with precision. That experience gave me more than just a strong work ethic&mdash;it
              gave me a deep, first-hand understanding of the physical demands placed on the human
              body.
            </p>
            <p>
              This curiosity led me to UBC, where I earned my Bachelor's degree in Kinesiology to
              better understand the science behind the movement, durability, and rehabilitation I
              saw on the job site every day.
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              The Technical Edge
            </h2>
            <p>
              As I entered the clinical world, my problem-solving instincts kicked in. I saw gaps
              where technology could streamline assessments and improve patient adherence. Teaching
              myself to code, I moved from simple scripts to building complex platforms.
            </p>
            <p>
              Most recently, I developed Fit Flux, an AI-powered practice management platform that
              uses contextual data to generate corrective exercise programs and track client
              progress. I build these tools not to replace the human element, but to handle the data
              so I can focus on what matters: the client in front of me.
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">My Focus Today</h2>
            <p>
              I am fully focused on my career in kinesiology and personal training. I bring a unique
              "triple-threat" skillset to my practice: the grit of a tradesman, the science of a
              clinician, and the efficiency of a developer.
            </p>
            <p>
              Whether I am rehabilitating an injured worker or coaching a client to a new PR, my
              goal is the same: using a scientific, client-centered approach to help people move
              better and live healthier lives.
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <Link
              href="/Noah_Muller_Resume.pdf"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-secondary/60"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <ProfileCard
            avatarUrl="/images/headshot.png"
            miniAvatarUrl="/images/headshot.png"
            name="Noah Muller"
            title="Kinesiologist & Developer"
            handle="noahmuller"
            status="Available for clients"
            contactText="Contact"
            showUserInfo
            enableMobileTilt
            innerGradient="linear-gradient(145deg, #3b5998 0%, #192f5d 100%)"
            behindGlowColor="rgba(59, 89, 152, 0.5)"
            behindGlowSize="50%"
            onContactClick={() => window.location.href = "/contact"}
          />
        </div>
      </section>

      {/* Kinesiology / Clinical Practice */}
      <section id="clinical" className="mt-12 border-t pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Kinesiology & Clinical Practice</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="max-w-prose text-foreground/70">
            My approach to kinesiology is built on a partnership. I believe in empowering you with
            the knowledge and tools to take an active role in your own recovery and performance.
            Using a foundation of <b>active rehabilitation</b>, I combine hands-on{" "}
            <b>manual therapy (IMT) </b>
            with a deep understanding of <b>biomechanics</b> to identify the root cause of an issue,
            not just treat the symptoms. A key part of my practice is integrating modern{" "}
            <b>pain science</b>, which helps us reframe the experience of pain and develop
            strategies to build resilience against future injury. My ultimate goal is to guide you
            beyond simple recovery and toward lasting, confident movement.
          </p>
          <div>
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-foreground/60">
              My key areas of practice include:
            </h3>
            <ul className="grid list-disc gap-2 pl-5 text-foreground/70">
              <li>Musculoskeletal assessments and functional testing</li>
              <li>Exercise prescription and progressions for pain and performance</li>
              <li>Return-to-activity planning and readiness monitoring</li>
              <li>Client-centered goals, education, and self-management strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section id="training" className="mt-12 border-t pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Personal Training</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="max-w-prose text-foreground/70">
            As a CSEP-Certified Personal Trainer, I see every client as an individual with unique
            goals and a unique history. That's why I reject the one-size-fits-all approach. My
            process always starts with a comprehensive <b>postural and movement assessment</b> to
            understand your body's specific patterns. From there, I design highly individualized
            <b> strength and conditioning programs</b> that are grounded in proven exercise science.
            We'll focus on mastering fundamental movements to build a strong, resilient foundation,
            and then progress you safely and effectively toward your goals—whether that's building
            muscle, improving athletic performance, or simply moving through life with more energy
            and less pain.
          </p>
          <div>
            <p className="text-sm text-foreground/60">Currently booking clients:</p>
            <div className="mt-3 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm hover:bg-secondary/60"
              >
                Get in touch
              </Link>
              {/* Placeholder: will point to focused.fitness later */}
              <span className="inline-flex h-9 items-center rounded-md px-3 text-xs text-foreground/60">
                focused.fitness coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Projects */}
      <section id="technology" className="mt-12 border-t pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Technology Projects</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="max-w-prose text-foreground/70">
            My passion for technology stems from a simple idea: we can build better tools to enhance
            healthcare. I use my skills in <b>Python</b>, <b>React</b>, and{" "}
            <b>AI/Machine Learning</b> to create practical solutions for real-world clinical
            challenges. This isn't just a hobby; it's an extension of my practice. From developing
            open-source web applications for pain assessment to engineering predictive models for
            exercise, my aim is to create tools that are accessible, data-driven, and designed to
            support both clinicians and their clients. I believe that thoughtful technology can
            empower us to make more informed decisions and ultimately lead to better health
            outcomes. You can see the code and concepts behind my work on my Projects page.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm hover:bg-secondary/60"
            >
              View projects
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm hover:bg-secondary/60"
            >
              Read posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
