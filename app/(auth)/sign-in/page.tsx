"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: form.get("email") as string,
      password: form.get("password") as string,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <>
      <div className="mb-8 text-center">
        <Link href="/" className="font-accent text-2xl font-semibold text-ink">
          Goon
        </Link>
        <h1 className="mt-4 font-accent text-2xl font-bold text-ink">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-ink-light">
          Sign in to your account to continue.
        </p>
      </div>

      <div className="card gradient-card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="input-field"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="input-field"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full py-3">
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-ink-light">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-medium text-ink underline underline-offset-2 hover:text-ink/80">
          Create one
        </Link>
      </p>
    </>
  );
}
