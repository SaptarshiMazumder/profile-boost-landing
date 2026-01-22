import { ReviewCarousel } from "./components/ReviewCarousel";

export default function Home() {
  // REPLACE WITH YOUR ACTUAL GUMROAD LINK
  const gumroadHref = "https://nextstepconsulting.gumroad.com/l/kmver";
  const year = new Date().getFullYear();

  const reviewImages = [
    { src: "/reviews/review-1.png", alt: "Review screenshot 1" },
    { src: "/reviews/review-2.png", alt: "Review screenshot 2" },
    { src: "/reviews/review-3.png", alt: "Review screenshot 3" },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f7f7fb] text-slate-950 selection:bg-pink-500/25">

      {/* --- BACKGROUND FX (Soft Nebula) --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-400/25 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-pink-400/25 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-indigo-400/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.10] mix-blend-multiply"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20  sm:pt-10">



        {/* HERO */}
        <section className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-12 relative z-10">

            {/* 1. The "Not Your Fault" Pill */}
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-pink-500 shadow-[0_0_0_6px_rgba(236,72,153,0.14)]" />
              <span className="text-xs font-bold uppercase tracking-wide text-pink-700">
                Almost no matches on Tinder?<br /> It’s Not Your Fault!
              </span>
            </div>

            {/* 2. Massive Headline */}
            <h1 className="mt-8 text-5xl font-black tracking-tight sm:text-7xl leading-[0.95]">
              Profile <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-950 via-pink-600 to-indigo-600">
                Visibility Protocol
              </span>
            </h1>

            <div className="mt-6 max-w-xl space-y-5">
              <p className="text-lg leading-relaxed text-slate-700">
                If Tinder feels dead, there’s a good chance your profile is
                buried and{" "}
                <strong className="text-slate-800 decoration-pink-500 underline underline-offset-4 decoration-2">
                  barely being shown
                </strong>
                .
                <br /><br />Data shows that:
              </p>

              <div className="mt-1 flex flex-col gap-3">
                <span className="w-fit rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <strong className="text-slate-800">80%</strong> of men get{" "}
                  <strong className="text-slate-800">0–2 likes/day</strong>
                </span>
                <span className="w-fit rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <strong className="text-slate-800 decoration-pink-500">
                    50%
                  </strong>{" "}
                  get <strong className="text-slate-800">0 likes/day!</strong>
                </span>
                <span className="w-fit rounded-full border border-pink-200/80 bg-pink-500/6 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm">
                  That means they&apos;re practically invisible in the queue!
                </span>
              </div>

              <p className="text-lg leading-relaxed text-slate-700">
                So if your profile is stuck there too, more swiping won’t fix it—and
                neither will new photos or a{" "}
                <strong className="text-slate-800 decoration-pink-500">
                  &quot;catchy&quot; bio
                </strong>
                .
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-base leading-relaxed text-slate-700 shadow-sm">
                <span className="font-bold text-slate-800">What you need to do</span>{" "}
                is fix your <strong className="text-slate-800">Profile score</strong> , so that it&apos;s visible to everyone and is on <strong className="text-slate-800"> top of the stack</strong>!{" "}

              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#final-cta"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-10 text-base font-bold text-white shadow-[0_16px_40px_rgba(236,72,153,0.18)] transition hover:scale-[1.02] hover:shadow-[0_22px_60px_rgba(236,72,153,0.24)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get instant access
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </a>
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 shadow-sm">
                <div className="font-bold text-slate-950">Instant Download</div>
                <div className="mt-0.5 uppercase tracking-wider">PDF • 6 pages</div>
              </div>
            </div>

            {/* Critical Insight */}
            <div className="mt-8 group relative overflow-hidden rounded-2xl border border-pink-200/80 bg-white/70 p-5 shadow-sm transition hover:border-pink-300">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1 text-pink-600">
                  <WarningIcon />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-700 mb-1">Critical Insight</div>
                  <p className="text-sm font-medium text-slate-800">
                    This strategy has almost nothing to do with your looks or your photos.
                    <br /><br />
                    It&apos;s a strategy to make the algorithm work in <strong className="text-slate-800">your favor</strong> by fixing your profile score.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-lg leading-relaxed text-slate-700 block mt-6">
              This protocol is a <strong>step by step guide</strong> designed to{":"}

            </span>
            <ul className="mt-6 max-w-xl space-y-3 text-lg leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">

                <FancyCheckIcon />
                <div>

                  <strong>Improve profile visibility</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FancyCheckIcon />
                <div>
                  Take your profile from{" "}
                  <span className="inline-flex items-center rounded-md bg-pink-500/10 px-2 py-0.5 align-baseline text-xl font-extrabold leading-none text-pink-600 ring-1 ring-pink-500/20 sm:text-2xl">
                    0-1 likes
                  </span>{" "}
                  to{" "}
                  <span className="inline-flex items-center rounded-md bg-pink-500/10 px-2 py-0.5 align-baseline text-xl font-extrabold leading-none text-pink-600 ring-1 ring-pink-500/20 sm:text-2xl">
                    10+ likes
                  </span>{" "}
                  per day.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="mt-14 rounded-[2.25rem] border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard
              label="Format"
              value="PDF"
              sub="Instant download"
              tone="pink"
            />
            <StatCard
              label="Length"
              value="6 pages"
              sub="Short + tactical"
              tone="indigo"
            />
            <StatCard
              label="Goal"
              value="Boost Visibility to the Maximum"
              sub="Increase impressions"
              tone="emerald"
            />
          </div>
        </section>



        {/* DETAILS SECTION */}
        <section className="mt-32 rounded-[2.5rem] border border-slate-200 bg-white/2 p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-purple-400/15 blur-[80px]"></div>

          <h2 className="text-3xl font-bold mb-10 relative z-10">What this is <span className="text-slate-500">(and isn&apos;t)</span></h2>

          <div className="grid gap-12 lg:grid-cols-2 relative z-10">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                This guide is not theory or random “tips.” <br />
                It’s a <strong className="text-slate-800">step-by-step manual</strong> — I walk you through exactly what to do, in order.
              </p>

              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4 rounded-xl bg-emerald-500/6 border border-emerald-500/15 p-4 transition hover:bg-emerald-500/10">
                  <span className="text-xl">✅</span>
                  <div className="text-sm text-slate-700">
                    <span className="block text-emerald-600 font-bold mb-1 uppercase text-xs tracking-wider">What you get</span>
                    A step by step checklist guide you can follow in order.
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-xl bg-rose-500/6 border border-rose-500/15 p-4 transition hover:bg-rose-500/10">
                  <span className="text-xl">🚫</span>
                  <div className="text-sm text-slate-700">
                    <span className="block text-rose-600 font-bold mb-1 uppercase text-xs tracking-wider">What this isn&apos;t</span>
                    Theory, “be confident,” or generic advice to &quot;fix your bio&quot;.
                  </div>
                </li>
              </ul>
            </div>

            {/* WHO THIS IS FOR */}
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
              <h3 className="flex items-center gap-3 font-bold text-slate-950 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 text-lg shadow-sm">
                  🎯
                </span>
                WHO THIS IS FOR
              </h3>
              <ul className="space-y-5">
                <CheckItem text="Guys who have 0 matches or very few matches." />
                <CheckItem text="Guys who want to quickly increase their visibility." />
                <CheckItem text='Guys who think &quot;My looks are not good enough&quot; (※ This guide was built specifically for you).' />
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="inline-block px-4 py-2 rounded-lg bg-white/70 text-xs text-slate-600 italic border border-slate-200">
              Note: You do NOT need to pay for Tinder Gold or Platinum to execute this protocol.
            </p>
          </div>
        </section>
        <section>
          <div className="grid gap-12 lg:grid-cols-2 relative z-10 mt-8">
            You need to understand that, these apps like Tinder were NOT designed to make everyone win. <br /><br />
            The algorithm is designed to keep most people stuck, so that the app can make money from ads and subscriptions.
            <br /><br />
            In this guide, I will show you EXACTLY how to make the algorithm work in your favor, instead of keeping you stuck at the bottom of the barrel.
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <a
            href="#final-cta"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-10 text-base font-bold text-white shadow-[0_16px_40px_rgba(236,72,153,0.18)] transition hover:scale-[1.02] hover:shadow-[0_22px_60px_rgba(236,72,153,0.24)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get instant access
              <span className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </a>
        </div>

        {/* REVIEWS */}
        <section id="reviews" className="mt-16">
          <SectionHeader

            title="Reviews"
          />

          <div className="mt-8">
            <ReviewCarousel images={reviewImages} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16">
          <SectionHeader
            title="FAQ"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FaqItem
              q="How do I receive it?"
              a="Instant digital download (PDF) after purchase."
            />
            <FaqItem
              q="Do I need Tinder Gold or Platinum?"
              a="No. This is focused on what you control: profile structure, data, and execution."
            />
            <FaqItem q="Is this affiliated with Tinder?" a="No." />
            <FaqItem
              q="How long does it take to apply?"
              a="If you follow the guide exactly (a few minutes), the results may be visible after 24 hours."
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="final-cta" className="mt-32 mb-12 text-center scroll-mt-24">
          <h2 className="text-4xl font-black tracking-tight mb-10">Don&apos;t waste your time. Get the most out of Tinder today!</h2>
          <a
            href={gumroadHref}
            className="group relative inline-flex h-20 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-16 text-xl font-bold text-white shadow-[0_18px_70px_rgba(15,23,42,0.22)] transition transform hover:scale-105 hover:shadow-[0_24px_90px_rgba(15,23,42,0.28)]"
          >
            <span className="relative z-10">Get Instant Access</span>
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-900 to-slate-800 opacity-0 transition group-hover:opacity-100" />
          </a>
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-500">
            Secured by Gumroad • Instant Download
          </p>
        </section>

        {/* --- FOOTER WITH REQUIRED LEGAL LINKS --- */}
        <footer className="border-t border-slate-200 pt-12 pb-8 text-center relative z-10">
          <div className="flex justify-center gap-6 mb-4 text-xs font-medium text-slate-600">
            <a
              href="https://gumroad.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-950 transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://gumroad.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-950 transition"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {year} Digital Solutions. Not affiliated with Tinder. Results vary.
          </p>
        </footer>
      </div>


    </main>
  );
}

// --- SUBCOMPONENTS ---

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-linear-to-br from-green-500/15 to-emerald-500/15 border border-emerald-600/30 text-emerald-700 transition group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.20)]">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10 3L4.5 8.5L2 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-950 transition">{text}</span>
    </div>
  )
}

function FancyCheckIcon() {
  return (
    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-linear-to-br from-pink-600 to-indigo-600 shadow-[0_14px_40px_rgba(236,72,153,0.22)]">
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16.25 5.75L8.5 13.5 3.75 8.75"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FaqItem(props: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-slate-950">
        <span>{props.q}</span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {props.a}
      </p>
    </details>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )
}

function SectionHeader(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {props.eyebrow ? (
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
          {props.eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {props.title}
      </h2>
      {props.subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {props.subtitle}
        </p>
      ) : null}
    </div>
  );
}

function StatCard(props: {
  label: string;
  value: string;
  sub: string;
  tone: "pink" | "indigo" | "emerald";
}) {
  const toneMap = {
    pink: "from-pink-500/14 to-transparent text-pink-700 border-pink-200/70",
    indigo:
      "from-indigo-500/14 to-transparent text-indigo-700 border-indigo-200/70",
    emerald:
      "from-emerald-500/14 to-transparent text-emerald-700 border-emerald-200/70",
  } as const;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border bg-linear-to-b p-6 shadow-sm ${toneMap[props.tone]}`}
    >
      <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
        {props.label}
      </div>
      <div className="mt-2 text-2xl font-black tracking-tight text-slate-950">
        {props.value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{props.sub}</div>
    </div>
  );
}
