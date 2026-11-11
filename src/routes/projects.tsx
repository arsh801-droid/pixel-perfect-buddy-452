import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    seo({
      title: "Projects — Mohd Arsh",
      description:
        "Projects by Mohd Arsh — new work currently in development, with more on the way.",
      path: "/projects",
      image: "/og-projects.jpg",
    }),
  component: Projects,
});

function Projects() {
  return <ProjectsSection />;
}
