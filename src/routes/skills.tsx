import { createFileRoute } from "@tanstack/react-router";
import { SkillsSection } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () =>
    seo({
      title: "Skills — Mohd Arsh",
      description:
        "Python, cellular biology and bioinformatics — the skill levels Mohd Arsh works with today.",
      path: "/skills",
      image: "/og-skills.jpg",
    }),
  component: Skills,
});

function Skills() {
  return <SkillsSection />;
}
