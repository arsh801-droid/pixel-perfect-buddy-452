import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SiteHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mohd Arsh" },
      { name: "description", content: "Python, cellular biology and bioinformatics skills of Mohd Arsh." },
      { property: "og:title", content: "Skills & Expertise — Mohd Arsh" },
      { property: "og:description", content: "Python, cellular biology and bioinformatics." },
    ],
  }),
  component: Skills,
});

const skills = [
  { name: "Python", level: "Basic", pct: 45, code: "py", desc: "Scripting, data handling and automation." },
  { name: "Cellular Biology", level: "Core", pct: 70, code: "cell", desc: "Cell structure, function and signalling." },
  { name: "Bioinformatics", level: "Basic", pct: 40, code: "bio", desc: "Sequence analysis and biological databases." },
];

function Skills() {
  return (
    <div>
      <SectionTitle tag="skills" title="Skills & Expertise" />
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s, i) => (
          <div key={s.name} className="glass glow-border fade-up p-6" style={{ animationDelay: `${0.12 * i}s` }}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary">.{s.code}</span>
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-secondary">{s.level}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="bg-gradient-bio h-full rounded-full" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
