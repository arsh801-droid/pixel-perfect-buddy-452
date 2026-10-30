import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohd Arsh" },
      { name: "description", content: "Projects by Mohd Arsh — currently in development, with more on the way." },
      { property: "og:title", content: "Projects — Mohd Arsh" },
      { property: "og:description", content: "Projects by Mohd Arsh — currently in development." },
    ],

  }),
  component: Projects,
});

function Projects() {
  return <ProjectsSection />;
}
