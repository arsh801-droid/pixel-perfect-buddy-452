import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections";

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

function Contact() {
  return <ContactSection />;
}
