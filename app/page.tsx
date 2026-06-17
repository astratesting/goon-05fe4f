import Link from "next/link";

const FEATURES = [
  {
    icon: "📖",
    title: "Storycards",
    desc: "Every piece arrives with a laser-engraved storycard detailing its artisan origin and material journey — turning a trinket into a narrative.",
  },
  {
    icon: "🪵",
    title: "Artisan Craftsmanship",
    desc: "Each trinket blends warm wood with cool metal, hand-finished by skilled artisans who respect the raw beauty of natural materials.",
  },
  {
    icon: "✨",
    title: "Limited Releases",
    desc: "Curated quarterly collections keep our catalog fresh and intentional. When a collection is gone, it's gone — making every piece feel special.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Choose a Collection",
    desc: "Browse our limited-release drops. Each collection is a curated set of trinkets — keychains, rings, charms — united by a theme.",
  },
  {
    step: "02",
    title: "Personalize the Story",
    desc: "Add a name, date, or short message to the storycard. Your engraving transforms the piece into a one-of-a-kind gift.",
  },
  {
    step: "03",
    title: "Receive & Delight",
    desc: "Your trinket arrives in a ready-to-gift box with the storycard. Give a gift that's as thoughtful as the person receiving it.",
  },
];

const PRODUCTS = [
  {
    name: "Dawn Keychain",
    type: "Keychain",
    material: "Walnut & Brass",
    price: "$32",
    desc: "A warm walnut body with a brass inlay — the start of something new.",
  },
  {
    name: "Mist Ring",
    type: "Ring",
    material: "Maple & Copper",
    price: "$38",
    desc: "Delicate maple wrapped in a copper band. Quiet elegance for everyday wear.",
  },
  {
    name: "Ray Charm",
    type: "Charm",
    material: "Ash & Sterling Silver",
    price: "$45",
    desc: "A sterling silver setting cradles a polished ash disc — light captured in form.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-soft-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-accent text-xl font-semibold tracking-tight text-ink">
            Goon
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="btn-ghost">
              Sign In
            </Link>
            <Link href="/sign-up" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky/50 bg-sky/20 px-4 py-1.5 text-xs font-medium text-ink-light">
            <span className="h-1.5 w-1.5 rounded-full bg-sky" />
            The Prism Series — Coming Soon
          </div>
          <h1 className="text-balance mb-6 font-accent text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Gifts that tell
            <br />
            <span className="text-sky">a real story.</span>
          </h1>
          <p className="text-balance mx-auto mb-10 max-w-xl text-lg leading-relaxed text-ink-light">
            Handcrafted wooden-and-metal trinkets with laser-engraved storycards.
            For the moments that deserve more than a gift card.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/sign-up" className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto">
              Explore the Collection
            </Link>
            <Link href="#how-it-works" className="btn-secondary px-8 py-3.5 text-base w-full sm:w-auto">
              How It Works →
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink-light/60">
            Free shipping on orders over $50
          </p>
        </div>

        {/* Subtle wave motif */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M0 32C240 0 480 64 720 32S1200 0 1440 32v32H0z"
              fill="#bae6fd"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-balance mb-4 font-accent text-3xl font-bold tracking-tight sm:text-4xl">
            More than a trinket.
            <br />
            <span className="text-mint">A story you can hold.</span>
          </h2>
          <p className="mx-auto max-w-xl text-ink-light">
            We believe a gift should carry meaning beyond the moment it's unwrapped.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card gradient-card">
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-accent text-lg font-semibold text-ink">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-accent text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-lg text-ink-light">
              Three simple steps from discovery to delivery.
            </p>
          </div>
          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-sky/20 font-accent text-xl font-bold text-ink">
                  {s.step}
                </div>
                <div>
                  <h3 className="mb-1 font-accent text-xl font-semibold">{s.title}</h3>
                  <p className="text-ink-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="gradient-hero py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-accent text-3xl font-bold tracking-tight sm:text-4xl">
              The Prism Collection
            </h2>
            <p className="mx-auto max-w-lg text-ink-light">
              Our debut collection. Five pieces, each telling its own story.
              Priced $25–$50.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="card gradient-card text-center">
                <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sand/30 font-accent text-2xl">
                  {p.type === "Keychain" ? "🔑" : p.type === "Ring" ? "💍" : "✨"}
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-ink-light">
                  {p.type} · {p.material}
                </p>
                <h3 className="mb-1 font-accent text-lg font-semibold">{p.name}</h3>
                <p className="mb-3 text-sm text-ink-light">{p.desc}</p>
                <p className="font-accent text-xl font-bold text-ink">{p.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/sign-up" className="btn-primary px-8 py-3.5 text-base">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance mb-4 font-accent text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to give something meaningful?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-slate-300">
            Join our early community. Be the first to know when new collections drop and get early access pricing.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-medium text-ink transition-all hover:bg-slate-100"
          >
            Get Started Free →
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            No credit card required. Join the waitlist for early access.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-light sm:flex-row">
          <span className="font-accent font-medium text-ink">Goon</span>
          <div className="flex gap-6">
            <Link href="/onboarding" className="hover:text-ink transition-colors">
              Onboarding
            </Link>
            <Link href="/survey" className="hover:text-ink transition-colors">
              Feedback
            </Link>
            <a href="mailto:hello@goon.co" className="hover:text-ink transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
