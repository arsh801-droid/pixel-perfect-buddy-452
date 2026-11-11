import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About — Mohd Arsh",
      description:
        "B.Tech Biotechnology student at Lovely Professional University, exploring neuro-engineering where biology meets code.",
      path: "/about",
      image: "/og-about.jpg",
    }),
  component: About,
});

function About() {
  return <AboutSection />;
}
