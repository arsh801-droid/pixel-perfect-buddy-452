import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-bio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohd Arsh — Aspiring Biotechnologist & Developer" },
      { name: "description", content: "Bridging biological systems with technology — neuro-engineering, bioinformatics and software by Mohd Arsh." },
      { property: "og:title", content: "Mohd Arsh — Biotechnologist & Developer" },
      { property: "og:description", content: "Bridging biological systems with technology to create impactful solutions." },
    ],
  }),
  component: Index,
});

const focus = [
  {
    code: "neuro",
    title: "Neuro-engineering",
    desc: "Reading, modelling and enhancing how living systems process information.",
  },
  {
    code: "bioinfo",
    title: "Bioinformatics",
    desc: "Sequence analysis and biological databases, handled like a developer would.",
  },
  {
    code: "build",
    title: "Automation & web tools",
    desc: "Practical apps that take repetitive biological and admin work off your hands.",
  },
];

const skills = [
  { name: "Python", pct: 45 },
  { name: "Cellular Biology", pct: 70 },
  { name: "Bioinformatics", pct: 40 },
];

function Index() {
  return (
    <div className="space-y-28">
      <section className="grid min-h-[75vh] items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="fade-up">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Mohd <span className="text-gradient">Arsh</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-secondary md:text-2xl">
            Aspiring Biotechnologist &amp; Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            An aspiring biotechnologist and developer with a deep fascination for neuro-engineering
            and technical skills, driven by a passion to bridge biological systems with technology
            to create impactful solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="bg-gradient-bio shadow-glow rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              View Projects
            </Link>
            <Link to="/contact" className="glass glow-border px-6 py-3 font-semibold text-foreground">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="fade-up relative mx-auto aspect-square w-full max-w-sm" style={{ animationDelay: "0.2s" }}>
          <div className="bg-gradient-bio spin-slow absolute -inset-1 rounded-full opacity-80 blur-md" />
          <div className="bg-gradient-bio absolute -inset-0.5 rounded-full" />
          <img src={hero} alt="Glowing DNA helix entwined with neurons" width={1024} height={1024} className="relative h-full w-full rounded-full border-4 border-background object-cover" />
          <span className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 font-mono text-xs text-primary">
            neuro × bio × code
          </span>
        </div>
      </section>

      <p className="fade-up -mt-16 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        scroll ↓
      </p>

      <section className="fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">// focus</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          <span className="text-gradient">What I'm working toward</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focus.map((f, i) => (
            <article key={f.title} className="glass glow-border p-6" style={{ animationDelay: `${0.12 * i}s` }}>
              <span className="font-mono text-xs text-primary">.{f.code}</span>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fade-up">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">// skills</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              <span className="text-gradient">Tools I work with</span>
            </h2>
          </div>
          <Link to="/skills" className="font-mono text-sm text-primary hover:underline">
            all skills →
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {skills.map((s) => (
            <li key={s.name} className="glass p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-xs text-secondary">{s.pct}%</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="bg-gradient-bio h-full rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="fade-up glass glow-border p-8 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">// featured</p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Proofly</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              An automated certificate generation and verification platform — create certificates in
              bulk and let anyone verify their authenticity instantly.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Automation", "Verification", "Web App"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/projects" className="bg-gradient-bio shadow-glow rounded-lg px-6 py-3 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              See all projects
            </Link>
            <a href="https://github.com/arsh801-droid" target="_blank" rel="noreferrer" className="glass glow-border rounded-lg px-6 py-3 text-center font-semibold">
              GitHub profile →
            </a>
          </div>
        </div>
      </section>

      <section className="fade-up text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">// next</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          Have an idea that spans <span className="text-gradient">biology and code</span>?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-gradient-bio shadow-glow rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Get in touch
          </Link>
          <Link to="/about" className="glass glow-border px-6 py-3 font-semibold text-foreground">
            More about me
          </Link>
        </div>
      </section>
    </div>
  );
}
