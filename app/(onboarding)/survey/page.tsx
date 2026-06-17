"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SurveyPage() {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    experienceRating: 0,
    whatWorked: "",
    frictionPoints: "",
    featureRequests: "",
    recommendRating: 0,
  });

  // Pre-fill from session
  useState(() => {
    if (session?.user) {
      setForm((f) => ({
        ...f,
        name: session.user?.name || "",
        email: session.user?.email || "",
      }));
    }
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.experienceRating || !form.recommendRating) {
      setError("Please provide both ratings before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <div className="card gradient-card">
          <div className="mb-4 text-5xl">🎉</div>
          <h1 className="mb-2 font-accent text-2xl font-bold text-ink">
            Thank you!
          </h1>
          <p className="mb-6 text-ink-light">
            Your feedback helps us craft a better Goon experience. We read every response.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/dashboard" className="btn-primary">
              Back to Dashboard
            </Link>
            <Link href="/" className="btn-ghost">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="btn-ghost mb-4 inline-flex">
          ← Back to Dashboard
        </Link>
        <h1 className="font-accent text-3xl font-bold text-ink">
          Onboarding Feedback Survey
        </h1>
        <p className="mt-2 text-ink-light">
          Tell us about your experience with Goon. Your honest feedback shapes our product.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card gradient-card space-y-5">
          <h2 className="font-accent text-lg font-semibold text-ink">About You</h2>

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-field"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="card gradient-card space-y-5">
          <h2 className="font-accent text-lg font-semibold text-ink">Your Experience</h2>

          {/* Experience Rating */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              How would you rate your onboarding experience? (1-5)
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setForm({ ...form, experienceRating: n })}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold transition-all ${
                    form.experienceRating === n
                      ? "bg-ink text-white"
                      : "border border-slate-200 bg-white text-ink-light hover:border-sky"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* What Worked */}
          <div>
            <label htmlFor="whatWorked" className="mb-1.5 block text-sm font-medium text-ink">
              What worked well during onboarding?
            </label>
            <textarea
              id="whatWorked"
              rows={3}
              value={form.whatWorked}
              onChange={(e) => setForm({ ...form, whatWorked: e.target.value })}
              className="input-field resize-none"
              placeholder="The sign-up flow was smooth, I liked the design, etc."
            />
          </div>

          {/* Friction Points */}
          <div>
            <label htmlFor="frictionPoints" className="mb-1.5 block text-sm font-medium text-ink">
              What friction points or difficulties did you encounter?
            </label>
            <textarea
              id="frictionPoints"
              rows={3}
              value={form.frictionPoints}
              onChange={(e) => setForm({ ...form, frictionPoints: e.target.value })}
              className="input-field resize-none"
              placeholder="I got confused at the dashboard, something didn't work as expected, etc."
            />
          </div>

          {/* Feature Requests */}
          <div>
            <label htmlFor="featureRequests" className="mb-1.5 block text-sm font-medium text-ink">
              What features would you like to see added?
            </label>
            <textarea
              id="featureRequests"
              rows={3}
              value={form.featureRequests}
              onChange={(e) => setForm({ ...form, featureRequests: e.target.value })}
              className="input-field resize-none"
              placeholder="A wishlist, gift recommendations, subscription options, etc."
            />
          </div>

          {/* Recommend Rating */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              How likely are you to recommend Goon to a friend? (1-10)
            </label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setForm({ ...form, recommendRating: n })}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                    form.recommendRating === n
                      ? "bg-ink text-white"
                      : "border border-slate-200 bg-white text-ink-light hover:border-mint"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full py-3 text-base">
          {loading ? "Submitting…" : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}
