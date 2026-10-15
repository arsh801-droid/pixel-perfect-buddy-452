import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { SectionTitle } from "@/components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohd Arsh" },
      { name: "description", content: "Get in touch with Mohd Arsh — email, GitHub and location in New Delhi." },
      { property: "og:title", content: "Contact Mohd Arsh" },
      { property: "og:description", content: "Reach out for collaborations in biotech and software." },
    ],
  }),
  component: Contact,
});

const EMAIL = "arshaftab801@gmail.com";
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const field = "w-full rounded-lg border border-input bg-muted/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-glow";

function Contact() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) return setError(r.error.issues[0].message);
    setError(null);
    const subject = encodeURIComponent(`Portfolio message from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const details = [
    { k: "email", v: EMAIL, href: `mailto:${EMAIL}` },
    { k: "location", v: "Shaheen Bagh, New Delhi" },
    { k: "github", v: "arsh801-droid", href: "https://github.com/arsh801-droid" },
  ];

  return (
    <div>
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
          <button type="submit" className="bg-gradient-bio shadow-glow w-full rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Send message →
          </button>
        </form>
      </div>
    </div>
  );
}
