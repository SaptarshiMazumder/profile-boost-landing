export default function Home() {
  // REPLACE WITH YOUR ACTUAL GUMROAD LINK
  const gumroadHref = "https://nextstepconsulting.gumroad.com/l/kmver"; 
  const year = new Date().getFullYear();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#030014] text-white selection:bg-pink-500/30">
      
      {/* --- BACKGROUND FX (Cyber/Nebula Look) --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-pink-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-10">
        
        {/* --- NAVBAR --- */}
        <header className="flex items-center justify-between mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(236,72,153,0.15)] backdrop-blur-md transition hover:border-pink-500/50">
              <BoltIcon />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight text-white">
                Profile Visibility Protocol
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-pink-400/80">
                System v1.0
              </div>
            </div>
          </div>
          
          <a
            href={gumroadHref}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white/10 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]"
          >
            Download PDF
          </a>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 relative z-10">
            
            {/* 1. The "Not Your Fault" Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-900/10 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-pink-200">
                Almost no matches on Tinder?<br /> It’s Not Your Fault!
              </span>
            </div>

            {/* 2. Massive Headline */}
            <h1 className="mt-8 text-5xl font-black tracking-tight sm:text-7xl leading-[0.95] drop-shadow-2xl">
              Profile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-600">
                Visibility Protocol
              </span>
            </h1>

            {/* 3. Text Block */}
            <div className="mt-8 space-y-8">
                <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
                    If Tinder feels dead, there’s a good chance your profile is buried and is <strong className="text-white decoration-pink-500 underline underline-offset-4 decoration-2">barely being shown</strong> — so you can swipe all day and still get nothing.
                </p>

                {/* 4. The [IMPORTANT] System Alert Box */}
                <div className="group relative overflow-hidden rounded-xl border border-pink-500/20 bg-pink-500/5 p-5 transition hover:border-pink-500/40 hover:bg-pink-500/10">
                    <div className="flex gap-4">
                        <div className="shrink-0 pt-1 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
                           <WarningIcon />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-1">Critical Insight</div>
                            <p className="text-sm font-medium text-slate-200">
                                This has almost nothing to do with your looks. It is a data problem.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
                    This protocol is a <strong>data-driven, repeatable system</strong> designed to <strong>improve profile visibility</strong> and put you in the best position to start getting consistent likes & matches again.
                </p>
            </div>

            {/* 5. CTA Buttons (NO PRICE) */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href={gumroadHref}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-10 text-base font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.3)] transition transform hover:scale-105 hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                    Get Instant Access
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
              <div className="flex flex-col justify-center border-l border-white/10 pl-5">
                <span className="text-xs font-bold text-white">Instant Download</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">PDF Format • 6 Pages</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (The Card) */}
          <div className="lg:col-span-5 relative perspective-1000">
            {/* Glow behind card */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-pink-500/30 to-purple-600/30 blur-2xl opacity-60 animate-pulse" />
            
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-1 shadow-2xl">
               <div className="rounded-[1.4rem] bg-[#0A0A10]/80 p-8">
                 
                 {/* Card Header */}
                 <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                      <BoltIcon />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl mix-blend-overlay"></div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">Visibility Protocol</div>
                        <div className="text-xs font-medium text-pink-300/70 uppercase tracking-wide">
                           Digital Download 
                        </div>
                    </div>
                 </div>

                 {/* Bullet Points */}
                 <div className="mt-8 space-y-5">
                    <CheckItem text="Addresses the core reasons matches aren't happening." />
                    <CheckItem text="A highly repeatable, step-by-step visibility protocol." />
                    <CheckItem text="Fixes what is burying your profile in the algorithm." />
                    <CheckItem text="Follow exactly for clear improvement in likes." />
                 </div>

                 {/* Card Footer */}
                 <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    <div className="rounded-xl bg-white/5 p-3 text-center transition border border-transparent hover:border-white/10">
                        <div className="text-[10px] uppercase tracking-wider text-white/40">Size</div>
                        <div className="font-mono text-sm font-bold text-white">1.14 MB</div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 text-center transition border border-transparent hover:border-white/10">
                        <div className="text-[10px] uppercase tracking-wider text-white/40">Length</div>
                        <div className="font-mono text-sm font-bold text-white">6 Pages</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="mt-32 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 lg:p-16 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[80px]"></div>
            
            <h2 className="text-3xl font-bold mb-10 relative z-10">What this is <span className="text-white/30">(and isn't)</span></h2>
            
            <div className="grid gap-12 lg:grid-cols-2 relative z-10">
                <div className="space-y-6">
                    <p className="text-lg text-slate-300 leading-relaxed">
                        This guide is not theory or random “tips.” <br />
                        It’s a <strong className="text-white">step-by-step tactical manual</strong> — I walk you through exactly what to do, in order.
                    </p>
                    
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-start gap-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4 transition hover:bg-emerald-500/10">
                             <span className="text-xl">✅</span>
                             <div className="text-sm text-slate-300">
                                <span className="block text-emerald-400 font-bold mb-1 uppercase text-xs tracking-wider">What you get</span> 
                                A step by step checklist you can follow in order.
                             </div>
                        </li>
                        <li className="flex items-start gap-4 rounded-xl bg-rose-500/5 border border-rose-500/10 p-4 transition hover:bg-rose-500/10">
                             <span className="text-xl">🚫</span>
                             <div className="text-sm text-slate-300">
                                <span className="block text-rose-400 font-bold mb-1 uppercase text-xs tracking-wider">What this isn't</span> 
                                Theory, “be confident,” or generic advice.
                             </div>
                        </li>
                    </ul>
                </div>

                {/* WHO THIS IS FOR */}
                <div className="rounded-3xl bg-[#08080C] p-8 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <h3 className="flex items-center gap-3 font-bold text-white mb-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white text-lg shadow-lg">
                          🎯
                        </span>
                        WHO THIS IS FOR
                    </h3>
                    <ul className="space-y-5">
                        <CheckItem text="Guys who have 0 matches or very few matches." />
                        <CheckItem text="Guys who want to quickly increase their visibility." />
                        <CheckItem text='Guys who think "My looks are not good enough" (※ This guide was built specifically for you).' />
                    </ul>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                 <p className="inline-block px-4 py-2 rounded-lg bg-white/5 text-xs text-white/40 italic border border-white/5">
                    Note: You do NOT need to pay for Tinder Gold or Platinum to execute this protocol.
                </p>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-32 mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tight mb-10 drop-shadow-xl">Level up your profile today.</h2>
            <a
                href={gumroadHref}
                className="group relative inline-flex h-20 items-center justify-center overflow-hidden rounded-full bg-white px-16 text-xl font-bold text-black shadow-[0_0_60px_rgba(255,255,255,0.2)] transition transform hover:scale-105 hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
            >
                <span className="relative z-10">Get Instant Access</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 transition group-hover:opacity-100" />
            </a>
            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-white/30">
               Secured by Gumroad • Instant Download
            </p>
        </section>

        {/* --- FOOTER WITH REQUIRED LEGAL LINKS --- */}
        <footer className="border-t border-white/5 pt-12 pb-8 text-center relative z-10">
            <div className="flex justify-center gap-6 mb-4 text-xs font-medium text-white/40">
                <a 
                  href="https://gumroad.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://gumroad.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  Terms of Service
                </a>
            </div>
            <p className="text-xs text-white/20">
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
            <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition group-hover:bg-emerald-500/30 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10 3L4.5 8.5L2 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition">{text}</span>
        </div>
    )
}

function BoltIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 11-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
}

function WarningIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
}