import { createFileRoute } from "@tanstack/react-router";
import { CertificatesSection } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/certificates")({
  head: () =>
    seo({
      title: "Certificates — Mohd Arsh",
      description:
        "Certificates and achievements of Mohd Arsh, biotechnology student and developer.",
      path: "/certificates",
      image: "/og-certificates.jpg",
    }),
  component: Certificates,
});

function Certificates() {
  return <CertificatesSection />;
}
