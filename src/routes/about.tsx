import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections";

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

function About() {
  return <AboutSection />;
}
