const organizations = [
  { name: "Apple", logo: "/logos/apple.svg", glow: "rgba(80,110,255,.20)" },
  { name: "AstraZeneca", logo: "/logos/astrazeneca.svg", glow: "rgba(133,52,188,.20)" },
  { name: "United States Postal Service", logo: "/logos/usps.svg", glow: "rgba(24,83,163,.20)" },
  { name: "U.S. Department of Defense", logo: "/logos/dod.svg", glow: "rgba(19,52,93,.20)" },
  { name: "Marriott International", logo: "/logos/marriott.svg", glow: "rgba(156,42,62,.18)" },
  { name: "Cracker Barrel", logo: "/logos/cracker-barrel.svg", glow: "rgba(220,150,34,.22)" },
];

const services = [
  { number: "01", title: "Specialized Search", text: "Targeted recruiting for technical roles that demand precision, speed, and a clear understanding of the underlying business need." },
  { number: "02", title: "Team Development", text: "Support for individual hires, project teams, and broader technology initiatives across complex enterprise environments." },
  { number: "03", title: "Talent Intelligence", text: "Focused market mapping, candidate identification, compensation insight, and competitive talent research." },
];

const specialties = [
  "Software Engineering", "Cloud & Infrastructure", "Cybersecurity", "Data & Analytics",
  "Enterprise Applications", "Technical Program Management", "Product & Digital Transformation",
  "Government Technology", "Life Sciences Technology",
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#f8fbff]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07152c]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-extrabold tracking-[.22em] text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-500 text-[11px] tracking-normal shadow-lg shadow-indigo-900/30">HF</span>
            HIREFI
          </a>
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-200 sm:gap-8">
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#experience">Experience</a>
            <a className="hidden rounded-full border border-white/20 bg-white/8 px-5 py-2.5 transition hover:bg-white hover:text-[#0a1830] sm:inline-flex" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mesh relative min-h-[760px] pt-24 text-white">
        <div className="grid-overlay absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute left-[8%] top-36 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[10%] top-52 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
          <div className="max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-blue-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
              Technology Recruiting
            </div>
            <h1 className="max-w-6xl text-[3.65rem] font-semibold leading-[.96] tracking-[-.06em] sm:text-7xl lg:text-[7rem]">
              Specialized technology talent for organizations that <span className="gradient-text">cannot afford to miss.</span>
            </h1>
            <div className="mt-12 grid max-w-5xl gap-8 border-t border-white/18 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                Hirefi helps enterprise and public-sector organizations identify and secure experienced technology professionals for critical initiatives.
              </p>
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0a1830] shadow-xl shadow-black/15 transition hover:-translate-y-1">
                Contact Hirefi <span className="text-lg transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 px-6 lg:px-10">
        <div className="glass mx-auto max-w-7xl rounded-[2rem] px-6 py-9 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label text-indigo-600">Selected organizations supported</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em] text-[#0a1830]">Enterprise, government, and consumer brands.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Experience across complex technical environments, regulated programs, and high-visibility organizations.</p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {organizations.map((organization) => (
              <div key={organization.name} className="logo-card flex min-h-28 items-center justify-center rounded-2xl p-5" style={{ "--glow": organization.glow } as React.CSSProperties} title={organization.name}>
                <img src={organization.logo} alt={`${organization.name} logo`} className="logo-mark max-h-14 w-full max-w-[150px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="section-label text-indigo-600">Capabilities</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-.045em] text-[#0a1830] sm:text-5xl lg:text-6xl">Recruiting built around the actual requirement.</h2>
            </div>
            <div className="lg:pt-9">
              <p className="max-w-2xl text-lg leading-8 text-slate-600">Every search begins with the business objective behind the role. Hirefi combines targeted research, direct outreach, qualification, and disciplined follow-through to reach the right people.</p>
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(26,55,105,.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(26,55,105,.15)]">
                <div className={`absolute inset-x-0 top-0 h-1 ${i === 0 ? "bg-blue-500" : i === 1 ? "bg-violet-500" : "bg-cyan-500"}`} />
                <span className="text-xs font-bold tracking-[.22em] text-slate-400">{service.number}</span>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-.03em] text-[#0a1830]">{service.title}</h3>
                <p className="mt-5 leading-7 text-slate-600">{service.text}</p>
                <div className="mt-8 h-10 w-10 rounded-full bg-slate-100 text-center text-xl leading-10 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden bg-[#08172f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(95,91,255,.28),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(0,196,255,.17),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.03fr_.97fr] lg:gap-24">
            <div>
              <p className="section-label text-cyan-300">Experience</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl lg:text-6xl">Enterprise and public-sector recruiting experience.</h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">Hirefi has supported recruiting initiatives connected to globally recognized corporations, life-sciences organizations, hospitality brands, government agencies, and defense-related programs.</p>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">The work has required an understanding of complex technical requirements, competitive talent markets, multiple stakeholders, and the importance of trust throughout the hiring process.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 backdrop-blur sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.24em] text-violet-200">Areas of expertise</p>
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {specialties.map((specialty, index) => (
                  <div key={specialty} className="flex items-center gap-3 border-b border-white/10 py-4 text-sm text-slate-200">
                    <span className={`h-2 w-2 rounded-full ${index % 3 === 0 ? "bg-blue-400" : index % 3 === 1 ? "bg-violet-400" : "bg-cyan-400"}`} />
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-blue-100">Contact</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl lg:text-6xl">Let’s talk about the talent behind your next critical initiative.</h2>
            </div>
            <a href="mailto:Mike@hirefi.com" className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-bold text-indigo-700 shadow-2xl shadow-indigo-900/20 transition hover:-translate-y-1">
              Mike@hirefi.com <span className="text-lg transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#061226] text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="font-semibold tracking-[.14em] text-white">HIREFI CONSULTING SOLUTIONS</span>
          <span>© 2026 Hirefi Consulting Solutions. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
