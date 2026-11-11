import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact — Mohd Arsh",
      description:
        "Email, phone, GitHub and location for Mohd Arsh — send a message straight from the site.",
      path: "/contact",
      image: "/og-contact.jpg",
    }),
  component: Contact,
});

function Contact() {
  return <ContactSection />;
}
