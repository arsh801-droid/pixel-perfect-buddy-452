import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { SectionTitle } from "@/components/SiteHeader";
import { sendContactMessage } from "@/lib/contact.functions";

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
          {status === "sent" && <p className="text-sm text-primary">Thanks! Your message was sent.</p>}
          <button type="submit" disabled={status === "sending"} className="bg-gradient-bio shadow-glow w-full rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
