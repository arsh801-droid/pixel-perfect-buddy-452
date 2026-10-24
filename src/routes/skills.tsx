import { createFileRoute } from "@tanstack/react-router";
import { SkillsSection } from "@/components/sections";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mohd Arsh" },
      { name: "description", content: "Python, cellular biology and bioinformatics skills of Mohd Arsh." },
      { property: "og:title", content: "Skills & Expertise — Mohd Arsh" },
      { property: "og:description", content: "Python, cellular biology and bioinformatics." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return <SkillsSection />;
}
