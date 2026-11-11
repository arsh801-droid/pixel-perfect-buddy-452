const SITE = "https://pixel-perfect-buddy-452.lovable.app";

/**
 * Per-route head metadata: title, description, Open Graph + Twitter preview
 * tags and a self-referencing canonical. `image` is a public/ path served at
 * the site root, so the share card always resolves to an absolute https URL.
 */
export function seo(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
}) {
  const url = `${SITE}${opts.path}`;
  const image = `${SITE}${opts.image}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
