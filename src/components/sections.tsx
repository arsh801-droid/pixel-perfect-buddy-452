import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { SectionTitle } from "@/components/SiteHeader";
import { sendContactMessage } from "@/lib/contact.functions";

const EMAIL = "arshaftab801@gmail.com";

const timeline = [
  { when: "Present", title: "B.Tech in Biotechnology", place: "Lovely Professional University" },
  { when: "Completed", title: "Higher Secondary Studies", place: "Hamdard Public School, Delhi" },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
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
    </section>
  );
}

const skills = [
  { name: "Python", level: "Basic", pct: 45, code: "py", desc: "Scripting, data handling and automation." },
  { name: "Cellular Biology", level: "Core", pct: 70, code: "cell", desc: "Cell structure, function and signalling." },
  { name: "Bioinformatics", level: "Basic", pct: 40, code: "bio", desc: "Sequence analysis and biological databases." },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28">
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
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionTitle tag="projects" title="Projects in Progress" />
      <div className="glass glow-border fade-up flex flex-col items-center justify-center p-12 text-center md:p-16">
        <span className="spin-slow inline-block font-mono text-3xl text-secondary">⟳</span>
        <h2 className="mt-4 text-2xl font-semibold">New projects</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Currently in development. Something new is on the way — this space will fill up soon.
        </p>
        <a href="https://github.com/arsh801-droid" target="_blank" rel="noreferrer" className="mt-8 font-mono text-sm text-primary hover:underline">
          see my github →
        </a>
      </div>
    </section>
  );
}


const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const field = "w-full rounded-lg border border-input bg-muted/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-glow";

export function ContactSection() {
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const send = useServerFn(sendContactMessage);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const r = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!r.success) return setError(r.error.issues[0]?.message ?? "Invalid input");
    setError(null);
    setStatus("sending");
    try {
      await send({ data: r.data });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError("Could not send message. Please try again.");
    }
  }

  const details = [
    { k: "email", v: EMAIL, href: `mailto:${EMAIL}` },
    { k: "phone", v: "+91 96504 27694", href: "tel:+919650427694" },
    { k: "location", v: "Shaheen Bagh, New Delhi" },
    { k: "github", v: "arsh801-droid", href: "https://github.com/arsh801-droid" },
  ];

  return (
    <section id="contact" className="scroll-mt-28">
      <SectionTitle tag="contact" title="Get in Touch" />
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <ul className="space-y-4">
          {details.map((d) => (
            <li key={d.k} className="glass glow-border fade-up p-5">
              <p className="font-mono text-xs text-secondary">{d.k}</p>
              {d.href ? (
                <a href={d.href} target="_blank" rel="noreferrer" className="mt-1 block text-lg font-medium hover:text-primary">{d.v}</a>
              ) : (
                <p className="mt-1 text-lg font-medium">{d.v}</p>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} className="glass fade-up space-y-4 p-8" noValidate>
          <input name="name" placeholder="Your name" maxLength={100} className={field} />
          <input name="email" type="email" placeholder="you@example.com" maxLength={255} className={field} />
          <textarea name="message" rows={5} placeholder="Your message" maxLength={1000} className={field} />
          {error && <p className="text-sm text-destructive">{error}</p>}
          {status === "sent" && <p className="text-sm text-primary">Thanks! Your message was sent.</p>}
          <button type="submit" disabled={status === "sending"} className="bg-gradient-bio shadow-glow w-full rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
