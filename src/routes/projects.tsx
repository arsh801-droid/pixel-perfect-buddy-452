import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SiteHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohd Arsh" },
      { name: "description", content: "Proofly, an automated certificate generation and verification platform, and more in development." },
      { property: "og:title", content: "Projects — Mohd Arsh" },
      { property: "og:description", content: "Featuring Proofly: automated certificate generation and verification." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div>
      <SectionTitle tag="projects" title="Selected Work" />
      <div className="grid gap-6 md:grid-cols-3">
        <article className="glass glow-border fade-up p-8 md:col-span-2">
          <p className="font-mono text-xs text-primary">★ flagship</p>
          <h2 className="mt-3 text-3xl font-bold">Proofly</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            An automated certificate generation and verification platform — create certificates
            in bulk and let anyone verify their authenticity instantly.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Automation", "Verification", "Web App"].map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-secondary">{t}</span>
            ))}
          </div>
          <a href="https://github.com/arsh801-droid" target="_blank" rel="noreferrer" className="mt-8 inline-block font-mono text-sm text-primary hover:underline">
            view on github →
          </a>
        </article>
        <article className="fade-up flex flex-col items-center justify-center rounded-[var(--radius)] border border-dashed border-border p-8 text-center" style={{ animationDelay: "0.15s" }}>
          <span className="spin-slow inline-block font-mono text-3xl text-secondary">⟳</span>
          <h2 className="mt-4 text-xl font-semibold">New projects</h2>
          <p className="mt-2 text-sm text-muted-foreground">Currently in development. Stay tuned.</p>
        </article>
      </div>
    </div>
  );
}
