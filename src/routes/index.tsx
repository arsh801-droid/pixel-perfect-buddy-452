import { useEffect } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import hero from "@/assets/hero-bio.jpg";
import { AboutSection, ContactSection, ProjectsSection, SkillsSection } from "@/components/sections";

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
);

function Index() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="space-y-24">
      <section className="relative flex min-h-[85vh] items-center">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_1fr]">
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
              <button type="button" onClick={() => scrollToId("projects")} className="bg-gradient-bio shadow-glow rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                View Projects
              </button>
              <button type="button" onClick={() => scrollToId("contact")} className="glass glow-border px-6 py-3 font-semibold text-foreground">
                Get in Touch
              </button>
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
        </div>
        <p className="fade-up absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          scroll ↓
        </p>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
