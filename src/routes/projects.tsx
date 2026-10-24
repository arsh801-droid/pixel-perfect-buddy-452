import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohd Arsh" },
      { name: "description", content: "Proofly, an automated certificate generation and verification platform, and more in development." },
      { property: "og:title", content: "Projects — Mohd Arsh" },
      { property: "og:description", content: "Featuring Proofly: automated certificate generation and verification." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return <ProjectsSection />;
}
