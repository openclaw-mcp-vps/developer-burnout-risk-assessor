export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Spot Burnout Before It<br />
          <span className="text-[#58a6ff]">Costs You Your Best Engineers</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          BurnoutRadar analyzes Git commit patterns, PR review times, and code quality signals to surface burnout risk scores for every developer on your team — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Monitoring for $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📊", title: "Connect GitHub/GitLab", desc: "OAuth in seconds. No SSH keys or manual tokens needed." },
          { icon: "🤖", title: "AI Analyzes Patterns", desc: "Commit frequency, PR latency, after-hours activity, and code churn are scored daily." },
          { icon: "🔔", title: "Get Alerts Early", desc: "Receive Slack or email alerts when a developer's risk score crosses your threshold." }
        ].map((item) => (
          <div key={item.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-[#8b949e] text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month · up to 25 developers</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "GitHub & GitLab integration",
              "Daily burnout risk scores",
              "Slack & email alerts",
              "Historical trend reports",
              "Team-level dashboards",
              "14-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does BurnoutRadar detect burnout risk?",
              a: "We analyze signals like late-night commits, declining PR review participation, increasing code churn, and shrinking commit sizes over time. These are weighted by an ML model trained on burnout research to produce a 0–100 risk score per developer."
            },
            {
              q: "Is my team's code or data ever stored?",
              a: "No source code is ever stored. We only process metadata: commit timestamps, PR open/close times, file change counts, and review activity. All data is encrypted at rest and in transit."
            },
            {
              q: "Can I use this with GitLab or only GitHub?",
              a: "BurnoutRadar supports both GitHub (Cloud and Enterprise) and GitLab (Cloud and self-hosted). More integrations including Bitbucket are on the roadmap."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} BurnoutRadar. All rights reserved.
      </footer>
    </main>
  );
}
