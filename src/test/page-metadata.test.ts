import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { Route as IndexRoute } from "@/routes/index";
import { Route as AboutRoute } from "@/routes/about";
import { Route as SkillsRoute } from "@/routes/skills";
import { Route as CertificatesRoute } from "@/routes/certificates";
import { Route as ProjectsRoute } from "@/routes/projects";
import { Route as ContactRoute } from "@/routes/contact";

type Meta = { title?: string; name?: string; property?: string; content?: string };
type Link = { rel: string; href: string };
type Head = { meta?: Meta[]; links?: Link[] };
type Entry = { path: string; image: string; route: { options: { head?: (ctx: never) => Head } } };

const pages: Entry[] = [
  { path: "/", image: "/og-share.jpg", route: IndexRoute as Entry["route"] },
  { path: "/about", image: "/og-about.jpg", route: AboutRoute as Entry["route"] },
  { path: "/skills", image: "/og-skills.jpg", route: SkillsRoute as Entry["route"] },
  { path: "/certificates", image: "/og-certificates.jpg", route: CertificatesRoute as Entry["route"] },
  { path: "/projects", image: "/og-projects.jpg", route: ProjectsRoute as Entry["route"] },
  { path: "/contact", image: "/og-contact.jpg", route: ContactRoute as Entry["route"] },
];

function headOf(entry: Entry): { meta: Meta[]; links: Link[] } {
  const head = entry.route.options.head?.(undefined as never);
  return { meta: head?.meta ?? [], links: head?.links ?? [] };
}

const byName = (meta: Meta[], name: string) => meta.find((m) => m.name === name)?.content;
const byProp = (meta: Meta[], prop: string) => meta.find((m) => m.property === prop)?.content;
const byTitle = (meta: Meta[]) => meta.find((m) => m.title !== undefined)?.title;

describe("Page metadata", () => {
  it("gives every page its own title and description", () => {
    const titles: string[] = [];
    const descriptions: string[] = [];

    for (const p of pages) {
      const { meta } = headOf(p);
      const title = byTitle(meta) ?? "";
      const description = byName(meta, "description") ?? "";
      expect(title, `title for ${p.path}`).toBeTruthy();
      expect(description, `description for ${p.path}`).toBeTruthy();
      titles.push(title);
      descriptions.push(description);
    }

    expect(new Set(titles).size).toBe(pages.length);
    expect(new Set(descriptions).size).toBe(pages.length);
  });

  it.each(pages)("$path carries share tags pointing at its own preview image", (p) => {
    const { meta, links } = headOf(p);
    const url = `https://pixel-perfect-buddy-452.lovable.app${p.path}`;
    const image = `https://pixel-perfect-buddy-452.lovable.app${p.image}`;

    expect(byProp(meta, "og:url")).toBe(url);
    expect(byProp(meta, "og:image")).toBe(image);
    expect(byName(meta, "twitter:image")).toBe(image);
    expect(byName(meta, "twitter:card")).toBe("summary_large_image");
    expect(byProp(meta, "og:title")).toBeTruthy();
    expect(byProp(meta, "og:description")).toBeTruthy();

    const canonical = links.filter((l) => l.rel === "canonical");
    expect(canonical).toHaveLength(1);
    expect(canonical[0]?.href).toBe(url);
  });

  it("ships every preview image it references", () => {
    for (const p of pages) {
      expect(existsSync(resolve(process.cwd(), "public", p.image.slice(1))), `public${p.image}`).toBe(true);
    }
  });
});
