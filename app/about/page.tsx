import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Intro / Bio */}
      <section id="bio" className="grid items-start gap-8 md:grid-cols-[1fr_320px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Hello, I'm Noah Muller.</h1>
          <div className="mt-4 max-w-prose space-y-4 text-foreground/70">
            <p>
              I'm a Registered Kinesiologist and a developer, and I'm passionate about the
              intersection of human movement and technology. My mission is to improve client
              outcomes by combining evidence-based clinical practice with innovative, custom-built
              digital tools.
            </p>
            <p>
              My professional journey has been unique. I spent over a decade in the construction and
              landscaping industries, where I learned the value of hard work, precision, and leading
              a team to get the job done right. That experience gave me a deep appreciation for the
              physical demands the body can handle, but it also ignited a deeper curiosity to
              understand the science behind movement, performance, and rehabilitation. This passion
              led me to pursue a Bachelor's degree in Human Kinetics from UBC and become a Certified
              Human Movement Specialist (HMS).
            </p>
            <p>
              As I delved deeper into the world of kinesiology, my problem-solving instincts from my
              previous career kicked in. I saw opportunities where technology could enhance
              traditional assessment and build more accessible tools for both clinicians and
              clients. This inspired me to teach myself to code. I started by building an
              open-source pain assessment web app (HPPAP) and have since moved on to creating
              AI-powered tools for range of motion analysis and predictive models for exercise.
            </p>
            <p>
              Today, I'm fully focused on my career in kinesiology and personal training, where I
              can apply both my clinical knowledge and my technical skills. Whether I'm working with
              a client one-on-one or building a new digital health tool, my goal remains the same:
              to use a scientific, client-centered approach to help people move better and live
              healthier lives. If you're interested in my work or have a project you'd like to
              discuss, please feel free to get in touch.
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
        <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border bg-card shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-border">
          <Image
            src="/images/headshot.png"
            alt="Headshot of Noah Muller"
            fill
            className="object-cover"
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
            healthcare. I use my skills in <b>Python</b>, <b>React</b>, and <b>AI/Machine Learning</b> to create
            practical solutions for real-world clinical challenges. This isn't just a hobby; it's an
            extension of my practice. From developing open-source web applications for pain
            assessment to engineering predictive models for exercise, my aim is to create tools that
            are accessible, data-driven, and designed to support both clinicians and their clients.
            I believe that thoughtful technology can empower us to make more informed decisions and
            ultimately lead to better health outcomes. You can see the code and concepts behind my
            work on my Projects page.
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
