export const dynamic = "force-dynamic";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/lib/auth";

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex h-full w-64 flex-col border-r border-slate-100 bg-white">
        <div className="border-b border-slate-100 px-6 py-5">
          <Link href="/dashboard" className="font-accent text-xl font-semibold text-ink">
            Goon
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          <NavLink href="/dashboard" icon="🏠" label="Home" />
          <NavLink href="/dashboard" icon="💎" label="Your Collection" />
          <NavLink href="/survey" icon="📝" label="Feedback Survey" />
          <NavLink href="/onboarding" icon="📋" label="Onboarding Guide" />
        </nav>

        <div className="border-t border-slate-100 px-3 py-4">
          <div className="mb-3 px-3">
            <p className="text-xs font-medium text-ink-light">Signed in as</p>
            <p className="truncate text-sm font-medium text-ink">
              {session.user?.email}
            </p>
          </div>
          <form action={handleSignOut}>
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-ink-light transition-all hover:bg-slate-100 hover:text-ink"
            >
              <span>🚪</span>
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-ink-light transition-all hover:bg-slate-50 hover:text-ink"
    >
      <span className="text-base">{icon}</span>
      {label}
    </Link>
  );
}
