import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/dashboard" className="btn-ghost mb-4 inline-flex">
        ← Back to Dashboard
      </Link>

      <h1 className="mb-2 font-accent text-3xl font-bold text-ink">
        Onboarding Call Guide
      </h1>
      <p className="mb-10 text-ink-light">
        Use this script when conducting 15-minute onboarding calls with new Goon users.
        Document friction points and feature requests during each call.
      </p>

      {/* Call Structure */}
      <div className="space-y-8">
        <Section
          number="01"
          title="Welcome & Introduction"
          duration="2 min"
          content={[
            "Thank the user for taking the time to connect.",
            "Briefly introduce yourself and your role at Goon.",
            '"We\'re building Goon to make gift-giving more meaningful — handcrafted wooden-and-metal trinkets with laser-engraved storycards that tell a real story."',
            '"Our debut collection, The Prism Series, launches soon. Today I\'d love to hear about your experience so far and how we can make Goon better for you."',
          ]}
        />

        <Section
          number="02"
          title="Product Demo"
          duration="5 min"
          content={[
            "Walk through the landing page — hero, features, how it works.",
            "Show the product preview (Dawn Keychain, Mist Ring, Ray Charm).",
            '"Each piece comes with a storycard — a laser-engraved card that tells the artisan\'s process and material origin. You can even add a personal message."',
            "Mention pricing: $25-$50 individual pieces, $60-$80 bundles, $55-$65/quarter subscription.",
            "Point out the sign-up flow and dashboard experience.",
          ]}
        />

        <Section
          number="03"
          title="Discovery Questions"
          duration="3 min"
          content={[
            '"How do you usually shop for meaningful gifts today?"',
            '"What frustrates you most about buying gifts online?"',
            '"What caught your eye about Goon — the materials, the storycards, or something else?"',
            '"If you could change one thing about the onboarding experience, what would it be?"',
            '"Would you consider giving a Goon trinket as a gift in the next 3 months? Why or why not?"',
          ]}
        />

        <Section
          number="04"
          title="Friction & Feedback Collection"
          duration="3 min"
          content={[
            "Ask about any confusion during sign-up or navigation.",
            '"Did anything feel broken, slow, or confusing?"',
            '"What feature would make you more likely to buy or recommend Goon?"',
            '"If Goon had a subscription — a new curated trinket every quarter with a storycard — would that interest you?"',
            "Document ALL friction points and feature requests in the space below.",
          ]}
        />

        <Section
          number="05"
          title="Wrap-Up & Next Steps"
          duration="2 min"
          content={[
            '"Thank you so much for your time and feedback — this is incredibly valuable as we build Goon."',
            '"I\'ll send you a follow-up email with a link to our feedback survey — it takes 2 minutes."',
            '"As an early member, you\'ll get first access to The Prism Series and any future collections."',
            '"If you think of anything else, reply to my email anytime. We\'re building this together."',
          ]}
        />
      </div>

      {/* Friction Documentation Template */}
      <div className="card gradient-card mt-10">
        <h2 className="mb-4 font-accent text-xl font-semibold text-ink">
          📋 Call Notes Template
        </h2>
        <p className="mb-4 text-sm text-ink-light">
          Copy this template for each call. Send the completed notes to the team after each session.
        </p>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 font-mono text-sm text-ink-light">
          <div>
            <strong className="text-ink">User:</strong> [Name / Email]
          </div>
          <div>
            <strong className="text-ink">Date:</strong> [YYYY-MM-DD]
          </div>
          <div>
            <strong className="text-ink">Duration:</strong> [min]
          </div>
          <div>
            <strong className="text-ink">Key Takeaways:</strong>
            <br />
            — 
            <br />
            — 
            <br />
            — 
          </div>
          <div>
            <strong className="text-ink">Friction Points:</strong>
            <br />
            1. 
            <br />
            2. 
            <br />
            3. 
          </div>
          <div>
            <strong className="text-ink">Feature Requests:</strong>
            <br />
            • 
            <br />
            • 
            <br />
            • 
          </div>
          <div>
            <strong className="text-ink">Likelihood to Recommend (1-10):</strong> 
          </div>
          <div>
            <strong className="text-ink">Follow-up Actions:</strong>
            <br />
            ☐ Send thank-you email with survey link
            <br />
            ☐ Log friction points in tracking doc
            <br />
            ☐ Update CRM with call notes
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/api/email/thank-you?name=New%20User" className="btn-secondary flex-1 text-center">
            Preview Thank-You Email →
          </Link>
          <Link href="/survey" className="btn-primary flex-1 text-center">
            Open Feedback Survey →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  duration,
  content,
}: {
  number: string;
  title: string;
  duration: string;
  content: string[];
}) {
  return (
    <div className="card gradient-card">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky/20 font-accent text-lg font-bold text-ink">
          {number}
        </span>
        <div>
          <h2 className="font-accent text-lg font-semibold text-ink">{title}</h2>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-light">
            {duration}
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {content.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink-light">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
