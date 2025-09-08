import Link from "next/link";
import Image from "next/image";

export default function AdvancedCalorieEstimatorCaseStudy() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Advanced Calorie Estimator</h1>
          <p className="mt-4 max-w-prose text-foreground/70">
            A personalized calorie burn estimator powered by a machine learning model trained on
            thousands of real-world workout sessions. Goes beyond simple linear formulas to capture
            non-linear and interaction effects, with safeguards for realistic predictions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://github.com/masterno/Advanced-Calorie-Estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              GitHub Repository
            </Link>
            <Link
              href="https://masterno.github.io/Advanced-Calorie-Estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              Live App
            </Link>
          </div>
        </div>

        {/* Right sidebar image */}
        <aside className="self-start rounded-lg border p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-white">
            <Image
              src="/images/calorie-estimator.jpeg"
              alt="Advanced Calorie Estimator screenshot"
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="mt-2 text-center text-xs text-foreground/60">
            Advanced Calorie Estimator – UI
          </p>
        </aside>
      </div>

      <div className="mt-10 grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">How to Use</h2>
          <ol className="mt-2 grid list-decimal gap-2 pl-5 text-foreground/70">
            <li>
              Enter your Age, Gender, Weight (kg), Session Duration (hours), and Average Heart Rate
              (BPM).
            </li>
            <li>Click "Calculate Calories".</li>
            <li>The estimated calories burned will appear below the form.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">The Data Science Journey</h2>
          <h3 className="mt-2 text-sm font-medium">The Goal</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            Build a model that accurately predicts calories burned using simple, measurable
            inputs—capturing more complex physiological relationships than basic linear equations.
          </p>

          <h3 className="mt-4 text-sm font-medium">Data & Cleaning</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            Trained on ~5,000 sessions from two Kaggle datasets. A key step was standardizing
            duration units across sources (minutes vs. hours). Mixed units produced misleadingly
            high accuracy; careful cleaning was critical for trustworthy results.
          </p>

          <h3 className="mt-4 text-sm font-medium">Feature Engineering: Beyond the Basics</h3>
          <ul className="mt-2 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>Squared terms (e.g., Age², Weight²) for non-linear relationships</li>
            <li>Interaction terms (e.g., Weight × Avg_BPM) to capture combined effects</li>
            <li>Expanded 5 base inputs to ~20 engineered features</li>
          </ul>

          <h3 className="mt-4 text-sm font-medium">Model Selection: Why Lasso Regression?</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            Lasso (L1) regularization combats overfitting by shrinking less useful coefficients to
            zero—doubling as feature selection. Performed better than plain linear regression on
            validation.
          </p>

          <h3 className="mt-4 text-sm font-medium">Key Insights from the Model</h3>
          <ul className="mt-2 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>
              <b>The Power of Interaction:</b> Duration × Avg_BPM dominates; maintaining a higher HR
              for longer has a compounding effect on calories burned.
            </li>
            <li>
              <b>Non-Linear Effect of Weight:</b> Heavier individuals show accelerating increases in
              energy expenditure.
            </li>
            <li>
              <b>Diminishing Returns of Heart Rate:</b> Additional calories per BPM level off at
              very high intensities.
            </li>
          </ul>

          <h3 className="mt-4 text-sm font-medium">Honest Performance</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            R² ≈ 0.75 on cleaned data—strong and realistic performance.
          </p>

          <h3 className="mt-4 text-sm font-medium">
            Handling Model Limitations: Extrapolation Safeguard
          </h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            Training data capped at ~2-hour sessions. For longer durations, the app computes a
            baseline at 2h and extends with a linear burn rate (with a fatigue factor) to avoid
            physiologically impossible predictions.
          </p>
        </section>
      </div>
    </section>
  );
}
