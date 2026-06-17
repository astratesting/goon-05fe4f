import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div className="px-8 py-10">
      {/* Welcome */}
      <div className="mb-10">
        <h1 className="font-accent text-3xl font-bold text-ink">
          Welcome, {session.user?.name || "friend"}
        </h1>
        <p className="mt-2 text-ink-light">
          Discover handcrafted trinkets with stories worth sharing.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="card gradient-card">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-ink-light">
            Collection
          </p>
          <p className="font-accent text-3xl font-bold text-ink">0</p>
          <p className="mt-1 text-sm text-ink-light">Trinkets owned</p>
        </div>
        <div className="card gradient-card">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-ink-light">
            Storycards
          </p>
          <p className="font-accent text-3xl font-bold text-ink">0</p>
          <p className="mt-1 text-sm text-ink-light">Stories collected</p>
        </div>
        <div className="card gradient-card">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-ink-light">
            Early Access
          </p>
          <p className="font-accent text-3xl font-bold text-mint">Active</p>
          <p className="mt-1 text-sm text-ink-light">Waitlist member</p>
        </div>
      </div>

      {/* Your Collection */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-accent text-xl font-semibold text-ink">
            Your Collection
          </h2>
        </div>
        <div className="card text-center">
          <div className="py-8">
            <div className="mb-3 text-4xl">💎</div>
            <h3 className="mb-1 font-accent text-lg font-semibold text-ink">
              No trinkets yet
            </h3>
            <p className="mb-6 text-sm text-ink-light">
              Your collection is empty. Browse our debut Prism Series to find your first piece.
            </p>
            <Link href="/" className="btn-primary">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Your Storycards */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-accent text-xl font-semibold text-ink">
            Your Storycards
          </h2>
        </div>
        <div className="card text-center">
          <div className="py-8">
            <div className="mb-3 text-4xl">📖</div>
            <h3 className="mb-1 font-accent text-lg font-semibold text-ink">
              No storycards yet
            </h3>
            <p className="text-sm text-ink-light">
              Storycards arrive with each trinket you collect. They tell the artisan&apos;s story and your personal message.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="mb-4 font-accent text-xl font-semibold text-ink">
          Quick Actions
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/survey"
            className="card gradient-card flex items-center gap-4 transition-all hover:shadow-md"
          >
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-medium text-ink">Share Feedback</h3>
              <p className="text-sm text-ink-light">Help us improve with a quick survey</p>
            </div>
          </Link>
          <Link
            href="/onboarding"
            className="card gradient-card flex items-center gap-4 transition-all hover:shadow-md"
          >
            <span className="text-2xl">📋</span>
            <div>
              <h3 className="font-medium text-ink">Onboarding Guide</h3>
              <p className="text-sm text-ink-light">Learn how to get the most from Goon</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
