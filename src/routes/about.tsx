import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohd Arsh" },
      { name: "description", content: "B.Tech Biotechnology student at Lovely Professional University, exploring neuro-engineering." },
      { property: "og:title", content: "About Mohd Arsh" },
      { property: "og:description", content: "Education and interests at the intersection of biology and technology." },
    ],
  }),
  component: About,
});

const timeline = [
  { when: "Present", title: "B.Tech in Biotechnology", place: "Lovely Professional University" },
  { when: "Completed", title: "Higher Secondary Studies", place: "Hamdard Public School, Delhi" },
];

function About() {
  return (
    <div>
      <SectionTitle tag="about_me" title="Where biology meets code" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass fade-up p-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm fascinated by how living systems process information — and how technology can
            read, model and enhance them. <span className="text-primary">Neuro-engineering</span> sits
            right at that intersection, and it's where I want to build.
          </p>
          <p className="mt-4">
            I combine a foundation in cellular biology with programming and bioinformatics to
            approach biological problems the way a developer would: measurable, iterative and
            built to scale.
          </p>
        </div>
        <ol className="space-y-5">
          {timeline.map((t, i) => (
            <li key={t.title} className="glass glow-border fade-up p-6" style={{ animationDelay: `${0.15 * (i + 1)}s` }}>
              <p className="font-mono text-xs text-secondary">{t.when}</p>
              <h2 className="mt-1 text-xl font-semibold">{t.title}</h2>
              <p className="text-muted-foreground">{t.place}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
